(() => {
  const track = (eventName, params = {}) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });
  };

  const once = new Set();
  const trackOnce = (key, eventName, params = {}) => {
    if (once.has(key)) return;
    once.add(key);
    track(eventName, params);
  };

  const pageTitles = {
    "/works": "idealwhy | Works",
    "/works/workmate-english": "idealwhy | WorkMate English",
    "/works/insightmate": "idealwhy | InsightMate",
    "/works/let-it-flow": "idealwhy | Let It Flow",
    "/works/deokmate": "idealwhy | Deokmate",
    "/brand/name": "idealwhy | Name",
    "/brand/belief": "idealwhy | Belief",
    "/about": "idealwhy | About",
    "/contact": "idealwhy | Contact",
  };

  const sectionPaths = {
    name: "/brand/name",
    belief: "/brand/belief",
    works: "/works",
    maker: "/about",
    about: "/about",
    contact: "/contact",
  };

  const projectPaths = {
    workmate_english: "/works/workmate-english",
    insightmate: "/works/insightmate",
    let_it_flow: "/works/let-it-flow",
    deokmate: "/works/deokmate",
  };

  let currentVirtualPath = window.location.pathname || "/";
  let previousVirtualLocation = window.location.href;

  const sendVirtualPageView = (path, extra = {}) => {
    if (!path || path === "/" || once.has(`virtual:${path}`)) return;
    once.add(`virtual:${path}`);

    const pageLocation = `${window.location.origin}${path}`;
    track("page_view", {
      page_location: pageLocation,
      page_path: path,
      page_title: pageTitles[path] || `idealwhy | ${path.split("/").filter(Boolean).pop() || "Home"}`,
      page_referrer: previousVirtualLocation,
      virtual_path: path,
      ...extra,
    });

    previousVirtualLocation = pageLocation;
    currentVirtualPath = path;
  };

  const projectNameFromElement = (element) => {
    if (!(element instanceof Element)) return "unknown";
    if (element.classList.contains("deokmate-teaser")) return "deokmate";

    const dataProject = element.dataset?.project || "";
    if (dataProject) return dataProject;
    if (element.querySelector('a[href*="enmate.co.kr"]')) return "workmate_english";
    if (element.querySelector('a[href*="insightmate.idealwhy.com"]')) return "insightmate";
    if (element.querySelector('a[href^="intoss://let-it-flow"]')) return "let_it_flow";
    return "unknown";
  };

  const safeLinkDestination = (href) => {
    if (!href) return "";
    if (href.startsWith("mailto:")) return "mailto";
    if (href.startsWith("intoss://")) return "intoss://let-it-flow";
    if (href.startsWith("#")) return href;
    try {
      const url = new URL(href, window.location.href);
      return `${url.hostname}${url.pathname}`;
    } catch {
      return href.slice(0, 120);
    }
  };

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const linkText = (link.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);

    track("link_click", {
      link_name: linkText || "unnamed_link",
      link_destination: safeLinkDestination(href),
      virtual_path: currentVirtualPath,
      is_external: /^https?:/i.test(href) && !href.includes("idealwhy.com"),
    });

    if (href.includes("enmate.co.kr")) {
      track("project_click", {
        project_name: "workmate_english",
        click_area: link.classList.contains("link") ? "text_link" : "preview",
        virtual_path: currentVirtualPath,
      });
      return;
    }

    if (href.startsWith("intoss://let-it-flow")) {
      track("project_click", {
        project_name: "let_it_flow",
        click_area: link.classList.contains("link") ? "text_link" : "phone_preview",
        virtual_path: currentVirtualPath,
      });
      return;
    }

    if (href.includes("insightmate.idealwhy.com")) {
      track("project_click", {
        project_name: "insightmate",
        click_area: "text_link",
        virtual_path: currentVirtualPath,
      });
      return;
    }

    if (href.includes("mate.idealwhy.com")) {
      track("project_click", {
        project_name: "deokmate",
        click_area: "text_link",
        virtual_path: currentVirtualPath,
      });
      return;
    }

    if (href.startsWith("mailto:")) {
      track("contact_click", { channel: "email", virtual_path: currentVirtualPath });
      return;
    }

    if (href.includes("github.com/ark-netizen")) {
      track("contact_click", { channel: "github", virtual_path: currentVirtualPath });
      return;
    }

    if (link.closest(".navlinks") && href.startsWith("#")) {
      track("nav_click", {
        section_target: href.slice(1) || "top",
        virtual_path: currentVirtualPath,
      });
    }
  });

  const viewportBand = { rootMargin: "-18% 0px -58% 0px", threshold: 0 };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const sectionName = el.id || (el.classList.contains("hero") ? "top" : "unknown");
      trackOnce(`section:${sectionName}`, "section_view", {
        section_name: sectionName,
        virtual_path: sectionPaths[sectionName] || currentVirtualPath,
      });

      const virtualPath = sectionPaths[sectionName];
      if (virtualPath) sendVirtualPageView(virtualPath, { section_name: sectionName });
    });
  }, viewportBand);

  const hero = document.querySelector(".hero");
  if (hero) sectionObserver.observe(hero);
  document.querySelectorAll("section[id]").forEach((section) => sectionObserver.observe(section));

  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const projectName = projectNameFromElement(entry.target);
      if (projectName === "unknown") return;

      const virtualPath = projectPaths[projectName] || `/works/${projectName.replaceAll("_", "-")}`;
      trackOnce(`project:${projectName}`, "project_view", {
        project_name: projectName,
        virtual_path: virtualPath,
      });
      sendVirtualPageView(virtualPath, { project_name: projectName, content_group: "works" });
    });
  }, viewportBand);

  document.querySelectorAll("article.work, .deokmate-teaser").forEach((article) => projectObserver.observe(article));

  const scrollThresholds = [25, 50, 75, 90, 100];
  const firedScroll = new Set();
  let ticking = false;

  const measureScroll = () => {
    ticking = false;
    const doc = document.documentElement;
    const body = document.body;
    const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0;
    const scrollHeight = Math.max(doc.scrollHeight, body.scrollHeight);
    const maxScroll = Math.max(1, scrollHeight - window.innerHeight);
    const percent = Math.min(100, Math.round((scrollTop / maxScroll) * 100));

    scrollThresholds.forEach((threshold) => {
      if (percent >= threshold && !firedScroll.has(threshold)) {
        firedScroll.add(threshold);
        track("scroll_depth", {
          percent_scrolled: threshold,
          virtual_path: currentVirtualPath,
        });
      }
    });
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(measureScroll);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  measureScroll();
})();

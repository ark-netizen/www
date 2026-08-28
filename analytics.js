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

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";

    if (href.includes("enmate.co.kr")) {
      track("project_click", {
        project_name: "workmate_english",
        click_area: link.classList.contains("link") ? "text_link" : "preview",
      });
      return;
    }

    if (href.startsWith("intoss://let-it-flow")) {
      track("project_click", {
        project_name: "let_it_flow",
        click_area: link.classList.contains("link") ? "text_link" : "phone_preview",
      });
      return;
    }

    if (href.startsWith("mailto:")) {
      track("contact_click", { channel: "email" });
      return;
    }

    if (href.includes("github.com/ark-netizen")) {
      track("contact_click", { channel: "github" });
      return;
    }

    if (link.closest(".navlinks") && href.startsWith("#")) {
      track("nav_click", { section_target: href.slice(1) || "top" });
    }
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const sectionName = el.id || (el.classList.contains("hero") ? "top" : "unknown");
        trackOnce(`section:${sectionName}`, "section_view", { section_name: sectionName });
      });
    },
    { threshold: 0.35 },
  );

  const hero = document.querySelector(".hero");
  if (hero) sectionObserver.observe(hero);
  document.querySelectorAll("section[id]").forEach((section) => sectionObserver.observe(section));

  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const article = entry.target;
        const dataProject = article.dataset.project || "";
        const hasWorkMate = !!article.querySelector('a[href*="enmate.co.kr"]');
        const hasLetItFlow = !!article.querySelector('a[href^="intoss://let-it-flow"]');
        const projectName = dataProject || (hasWorkMate ? "workmate_english" : hasLetItFlow ? "let_it_flow" : "unknown");
        if (projectName !== "unknown") {
          trackOnce(`project:${projectName}`, "project_view", { project_name: projectName });
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll("article.work").forEach((article) => projectObserver.observe(article));

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
        track("scroll_depth", { percent_scrolled: threshold });
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

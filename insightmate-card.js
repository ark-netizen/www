(()=>{
  const worksSection=document.querySelector('#works .wrap');
  if(!worksSection || document.querySelector('[data-project="insightmate"]')) return;

  const style=document.createElement('style');
  style.textContent=`
    .insightmate-showcase{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(290px,.65fr);gap:clamp(36px,5vw,70px);align-items:center;padding:46px 0;border-bottom:1px solid}
    .insightmate-status{display:inline-flex;align-items:center;gap:8px;margin-top:21px;font:500 10px "DM Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--blue)}
    .insightmate-status::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--acid);border:1px solid var(--ink)}
    .insightmate-ui{height:100%;display:grid;grid-template-columns:22% 1fr;background:#f1f5f9;color:#0f172a;font-family:"DM Sans","Noto Sans KR",sans-serif}
    .insightmate-nav{background:#0f172a;padding:9% 8%;color:#94a3b8}
    .insightmate-brand{color:#fff;font-weight:800;font-size:clamp(8px,1vw,15px);margin-bottom:18%;letter-spacing:-.02em}
    .insightmate-nav span{display:block;padding:7% 8%;margin:4% 0;border-radius:5px;font-size:clamp(4px,.55vw,8px)}
    .insightmate-nav span:nth-child(1){background:#3157ff;color:#fff}
    .insightmate-main{padding:4%;overflow:hidden}
    .insightmate-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:4%}
    .insightmate-top b{font-size:clamp(7px,.85vw,13px)}
    .insightmate-top i{font:500 clamp(4px,.5vw,8px) "DM Mono";color:#3157ff;font-style:normal}
    .insightmate-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:2.5%;margin-bottom:3%}
    .insightmate-kpi,.insightmate-chart,.insightmate-feed{background:#fff;border:1px solid #dbe2ea;border-radius:6px;padding:6%}
    .insightmate-kpi small{display:block;color:#64748b;font-size:clamp(4px,.48vw,7px)}
    .insightmate-kpi strong{display:block;font-size:clamp(8px,1vw,15px);margin-top:4%}
    .insightmate-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:2.5%;height:50%}
    .insightmate-chart{display:flex;align-items:end;gap:5%;padding:8% 6% 5%}
    .insightmate-chart i{display:block;flex:1;background:#3157ff;border-radius:3px 3px 0 0;opacity:.9}
    .insightmate-chart i:nth-child(1){height:38%}.insightmate-chart i:nth-child(2){height:70%}.insightmate-chart i:nth-child(3){height:52%}.insightmate-chart i:nth-child(4){height:88%}.insightmate-chart i:nth-child(5){height:62%}
    .insightmate-feed span{display:block;height:7%;margin:8% 0;background:#dbe2ea;border-radius:99px}.insightmate-feed span:nth-child(2){width:78%}.insightmate-feed span:nth-child(3){width:62%}.insightmate-feed span:nth-child(4){width:86%}
    .insightmate-capabilities{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--ink)}
    .insightmate-capability{min-height:190px;padding:24px;border-right:1px solid var(--line)}
    .insightmate-capability:nth-child(3n){border-right:0}.insightmate-capability:nth-child(-n+3){border-bottom:1px solid var(--line)}
    .insightmate-capability b{font:500 9px "DM Mono",monospace;letter-spacing:.1em;color:var(--blue)}
    .insightmate-capability h5{font-size:18px;line-height:1.35;margin:25px 0 7px;letter-spacing:-.025em}
    .insightmate-capability p{font-size:13px;color:var(--muted);margin:0}
    @media(max-width:850px){.insightmate-showcase{grid-template-columns:1fr}.insightmate-ui{min-height:250px}.insightmate-capabilities{grid-template-columns:1fr 1fr}.insightmate-capability,.insightmate-capability:nth-child(3n){border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.insightmate-capability:nth-child(2n){border-right:0}}
    @media(max-width:540px){.insightmate-capabilities{grid-template-columns:1fr}.insightmate-capability,.insightmate-capability:nth-child(2n),.insightmate-capability:nth-child(3n){border-right:0}}
  `;
  document.head.appendChild(style);

  const article=document.createElement('article');
  article.className='work reveal';
  article.dataset.project='insightmate';
  article.innerHTML=`
    <div class="workhead"><div><div class="tag">Experiment 002 · InsightMate</div><h3>Insight<br>Mate</h3><a class="link" href="https://insightmate.idealwhy.com" target="_blank" rel="noreferrer">Open preview ↗</a><div class="insightmate-status">Frontend live</div></div><p class="workq">“보고 있는 팬 반응을 바로 수집하고,<br><strong>AI와 함께 의미까지 읽어낼 수는 없을까?</strong>”</p></div>
    <div class="insightmate-showcase"><div class="monitor"><div class="monitor-shell"><div class="monitor-screen"><div class="insightmate-ui"><div class="insightmate-nav"><div class="insightmate-brand">InsightMate</div><span>Browser Capture</span><span>Dashboard</span><span>Network</span><span>YouTube</span><span>Instagram</span></div><div class="insightmate-main"><div class="insightmate-top"><b>AI Fan Insight Dashboard</b><i>LIVE DATA / ANALYSIS</i></div><div class="insightmate-kpis"><div class="insightmate-kpi"><small>COLLECT</small><strong>EXT</strong></div><div class="insightmate-kpi"><small>SOURCES</small><strong>3 CH</strong></div><div class="insightmate-kpi"><small>INTERPRET</small><strong>AI</strong></div></div><div class="insightmate-grid"><div class="insightmate-chart"><i></i><i></i><i></i><i></i><i></i></div><div class="insightmate-feed"><span></span><span></span><span></span><span></span></div></div></div></div></div></div><div class="monitor-neck"></div><div class="monitor-base"></div><div class="caption"><span>INSIGHTMATE / ANALYSIS WORKSPACE</span><span>PRIVATE PREVIEW</span></div></div><div class="showcopy"><h4>브라우저에서 모으고,<br class="desktop-br">AI와 함께 해석합니다.</h4><p>브라우저 확장프로그램으로 X, YouTube, Instagram에서 보고 있는 반응을 바로 수집합니다. 저장된 데이터는 감성·키워드·관계망 분석을 거쳐 AI에게 질문하고 맥락을 해석할 수 있습니다.</p><div class="mini"><div><b>CAPTURE</b><span>탐색 중인 게시물과 댓글을 브라우저 확장프로그램에서 바로 수집</span></div><div><b>INTERPRET</b><span>모인 반응의 감성·키워드·관계를 보고 AI와 대화하며 의미 해석</span></div></div></div></div>
    <div class="insightmate-capabilities"><div class="insightmate-capability"><b>01 / BROWSER CAPTURE</b><h5>보는 화면에서 바로 수집</h5><p>확장프로그램으로 X·YouTube·Instagram의 게시물과 댓글을 대시보드로 보냅니다.</p></div><div class="insightmate-capability"><b>02 / SENTIMENT</b><h5>감성 분류와 보정</h5><p>긍정·부정·중립 분포를 보고 분류 결과를 검토·보정해 분석 기준을 다듬습니다.</p></div><div class="insightmate-capability"><b>03 / KEYWORD & TREND</b><h5>키워드와 변화 흐름</h5><p>핵심 키워드, 워드클라우드, 버블 그래프와 시간별 트렌드로 대화의 중심을 찾습니다.</p></div><div class="insightmate-capability"><b>04 / NETWORK</b><h5>관계망과 동시출현 구조</h5><p>계정·키워드 관계망과 동시출현 네트워크를 통해 반응이 연결되고 확산되는 구조를 살펴봅니다.</p></div><div class="insightmate-capability"><b>05 / DATA WORKSPACE</b><h5>저장 데이터 탐색과 정제</h5><p>Supabase에 모인 데이터를 필터링하고 동의어·불용어·임시 보정 규칙을 관리합니다.</p></div><div class="insightmate-capability"><b>06 / AI INTERPRETATION</b><h5>AI에게 질문하고 해석</h5><p>선택한 데이터에 질문해 요약과 맥락을 얻고, 필요한 결과를 보고서 형태로 내보냅니다.</p></div></div>
    <div class="workbody"><div class="cell"><div class="num">THE GAP</div><h4>반응은 많지만<br class="desktop-br">판단까지 이어지지 않았습니다.</h4><p>플랫폼을 오가며 댓글과 게시물을 복사해 정리하는 데 시간이 들고, 모은 뒤에도 어떤 반응이 중요한지 다시 사람이 맥락을 읽어야 했습니다.</p></div><div class="cell"><div class="num">THE WHY</div><h4>왜 수집 도구와<br class="desktop-br">해석 도구는 따로 있어야 할까?</h4><p>보고 있는 화면에서 바로 수집하고, 같은 데이터에 감성·키워드·관계 구조를 더한 뒤 AI에게 질문할 수 있어야 실제 판단까지 빨라진다고 봤습니다.</p></div><div class="cell"><div class="num">THE FORM</div><h4>확장프로그램과 AI를<br class="desktop-br">하나의 분석 흐름으로 이었습니다.</h4><p>브라우저 확장프로그램이 반응을 수집하면 대시보드에서 정제·시각화하고, AI가 요약과 질문 응답을 통해 데이터 안의 맥락을 해석하는 워크스페이스로 구현했습니다.</p></div></div>
    <div class="flowbar"><div class="step"><b>01</b><span>플랫폼에서 반응 탐색</span></div><div class="step"><b>02</b><span>확장프로그램으로 수집</span></div><div class="step"><b>03</b><span>감성 · 키워드 · 트렌드</span></div><div class="step"><b>04</b><span>관계망 · AI 맥락 해석</span></div><div class="step"><b>05</b><span>저장 · 요약 · 내보내기</span></div></div>
    <div class="foot"><span>브라우저에서 발견한 팬 반응이 AI 해석을 거쳐 다음 콘텐츠와 캠페인 판단의 근거가 되도록 설계했습니다.</span><div class="chips"><span>React</span><span>FastAPI</span><span>Supabase</span><span>LLM</span><span>Vercel</span><span>Render</span></div></div>
  `;

  const existingWorks=[...worksSection.querySelectorAll('.work')];
  const workmate=existingWorks[0];
  const flow=existingWorks[1];
  const flowTag=flow?.querySelector('.tag');
  if(flowTag) flowTag.textContent='Experiment 003 · Let It Flow / 흘려보내요';
  if(workmate) workmate.insertAdjacentElement('afterend',article);
  else worksSection.appendChild(article);
  requestAnimationFrame(()=>article.classList.add('in'));
})();

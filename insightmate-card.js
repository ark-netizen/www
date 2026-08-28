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
    @media(max-width:850px){.insightmate-showcase{grid-template-columns:1fr}.insightmate-ui{min-height:250px}}
  `;
  document.head.appendChild(style);

  const article=document.createElement('article');
  article.className='work reveal';
  article.dataset.project='insightmate';
  article.innerHTML=`
    <div class="workhead"><div><div class="tag">Experiment 003 · InsightMate</div><h3>Insight<br>Mate</h3><div class="insightmate-status">Deployment ready</div></div><p class="workq">“팬의 반응을 모으는 데서 끝내지 않고,<br><strong>다음 판단에 쓸 수 있는 인사이트로 바꿀 수는 없을까?</strong>”</p></div>
    <div class="insightmate-showcase"><div class="monitor"><div class="monitor-shell"><div class="monitor-screen"><div class="insightmate-ui"><div class="insightmate-nav"><div class="insightmate-brand">InsightMate</div><span>Dashboard</span><span>X Search</span><span>Network</span><span>YouTube</span><span>Instagram</span></div><div class="insightmate-main"><div class="insightmate-top"><b>AI Fan Insight Dashboard</b><i>LIVE DATA / ANALYSIS</i></div><div class="insightmate-kpis"><div class="insightmate-kpi"><small>MENTIONS</small><strong>LIVE</strong></div><div class="insightmate-kpi"><small>POSITIVE</small><strong>3 CH</strong></div><div class="insightmate-kpi"><small>KEYWORDS</small><strong>AI</strong></div></div><div class="insightmate-grid"><div class="insightmate-chart"><i></i><i></i><i></i><i></i><i></i></div><div class="insightmate-feed"><span></span><span></span><span></span><span></span></div></div></div></div></div></div><div class="monitor-neck"></div><div class="monitor-base"></div><div class="caption"><span>INSIGHTMATE / ANALYSIS WORKSPACE</span><span>PRIVATE PREVIEW</span></div></div><div class="showcopy"><h4>수집·분석·해석을<br class="desktop-br">한 작업 화면으로.</h4><p>X, YouTube, Instagram 반응을 모아 감성·키워드·관계망을 탐색하고, 저장된 데이터를 AI 대화와 요약·내보내기로 이어지게 구성했습니다.</p><div class="mini"><div><b>ANALYZE</b><span>플랫폼별 검색, 감성 분류, 키워드·트렌드·관계망 시각화</span></div><div><b>ACT</b><span>Supabase 저장 데이터, AI 분석 대화, 요약과 결과 내보내기</span></div></div></div></div>
    <div class="workbody"><div class="cell"><div class="num">THE GAP</div><h4>반응은 많지만<br class="desktop-br">판단까지 이어지지 않았습니다.</h4><p>플랫폼마다 흩어진 댓글과 게시물을 따로 모으고 정리하는 데 시간이 들고, 정작 어떤 반응이 중요한지는 다시 사람이 해석해야 했습니다.</p></div><div class="cell"><div class="num">THE WHY</div><h4>왜 대시보드는<br class="desktop-br">숫자를 보여주는 데서 끝날까?</h4><p>조회 결과를 나열하는 대신, 감성·키워드·관계 구조를 함께 보고 바로 질문할 수 있어야 다음 콘텐츠와 캠페인 판단에 쓸 수 있다고 봤습니다.</p></div><div class="cell"><div class="num">THE FORM</div><h4>팬 반응 탐색을<br class="desktop-br">하나의 분석 흐름으로 만들었습니다.</h4><p>수집, 정제, 시각화, 저장, AI 해석, 결과 내보내기를 한 화면 안에서 이어지는 팬 인사이트 워크스페이스로 구현했습니다.</p></div></div>
    <div class="flowbar"><div class="step"><b>01</b><span>플랫폼 선택</span></div><div class="step"><b>02</b><span>검색 · 수집</span></div><div class="step"><b>03</b><span>감성 · 키워드 분석</span></div><div class="step"><b>04</b><span>관계망 · AI 해석</span></div><div class="step"><b>05</b><span>저장 · 요약 · 내보내기</span></div></div>
    <div class="foot"><span>흩어진 팬 반응을 “보는 데이터”에서 “다음 결정을 돕는 근거”로 바꾸는 것을 목표로 했습니다.</span><div class="chips"><span>React</span><span>FastAPI</span><span>Supabase</span><span>LLM</span><span>Vercel</span><span>Render</span></div></div>
  `;

  const existingWorks=[...worksSection.querySelectorAll('.work')];
  const anchor=existingWorks[existingWorks.length-1];
  if(anchor) anchor.insertAdjacentElement('afterend',article);
  else worksSection.appendChild(article);
  requestAnimationFrame(()=>article.classList.add('in'));
})();

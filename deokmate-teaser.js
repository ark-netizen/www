(()=>{
  const worksSection=document.querySelector('#works .wrap');
  if(!worksSection || document.querySelector('.deokmate-teaser')) return;

  const style=document.createElement('style');
  style.textContent=`
    .deokmate-teaser{margin-top:130px;border-top:1px solid var(--ink);border-bottom:1px solid var(--ink);padding:40px 0 34px;display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(50px,8vw,110px);align-items:end}
    .deokmate-teaser .tag{margin-bottom:20px}
    .deokmate-teaser h3{font-size:clamp(48px,6vw,78px);line-height:.94;letter-spacing:-.065em;margin:0;text-wrap:balance}
    .deokmate-status{margin-top:20px;display:inline-flex;align-items:center;gap:9px;font:500 10px "DM Mono",monospace;letter-spacing:.12em;text-transform:uppercase;color:var(--blue)}
    .deokmate-status::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--acid);border:1px solid var(--ink);box-shadow:0 0 0 3px rgba(217,245,90,.24)}
    .deokmate-copy{padding-bottom:3px}
    .deokmate-copy h4{font-size:clamp(25px,3vw,38px);line-height:1.25;letter-spacing:-.04em;margin:0 0 14px;text-wrap:balance}
    .deokmate-copy p{max-width:650px;margin:0;color:var(--muted);font-size:15px;line-height:1.78;text-wrap:pretty}
    .deokmate-public{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}
    .deokmate-public span{border:1px solid var(--line);padding:7px 10px;font:500 9px "DM Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);background:rgba(255,255,255,.35)}
    .redacted{margin-top:26px;display:grid;gap:8px;max-width:520px}
    .redacted span{display:block;height:10px;background:var(--ink);position:relative;overflow:hidden}
    .redacted span:nth-child(1){width:68%}.redacted span:nth-child(2){width:39%}
    .redacted span::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(49,87,255,.18),transparent);transform:translateX(-110%);animation:redactedScan 5.8s ease-in-out infinite}
    .deokmate-note{margin-top:12px!important;font:500 10px "DM Mono",monospace!important;letter-spacing:.06em;color:var(--muted)!important}
    .deokmate-meta{grid-column:1/-1;border-top:1px solid var(--line);margin-top:30px;padding-top:14px;display:flex;justify-content:space-between;gap:20px;font:500 9px "DM Mono",monospace;letter-spacing:.11em;text-transform:uppercase;color:var(--muted)}
    .deokmate-meta span:last-child{color:var(--blue)}
    @keyframes redactedScan{0%,70%,100%{transform:translateX(-110%)}82%{transform:translateX(110%)}}
    @media(max-width:850px){.deokmate-teaser{grid-template-columns:1fr;gap:38px}.deokmate-meta{margin-top:12px}}
    @media(max-width:540px){.deokmate-teaser{margin-top:100px;padding:32px 0 28px}.deokmate-meta{display:block}.deokmate-meta span{display:block;margin-top:5px}.redacted span{height:9px}}
    @media(prefers-reduced-motion:reduce){.redacted span::after{animation:none}}
  `;
  document.head.appendChild(style);

  const teaser=document.createElement('article');
  teaser.className='deokmate-teaser reveal';
  teaser.innerHTML=`
    <div>
      <div class="tag">Experiment 003 · Deokmate</div>
      <h3>Deok<br>mate</h3>
      <div class="deokmate-status">In development</div>
    </div>
    <div class="deokmate-copy">
      <h4>좋아하는 공연으로 향하는 과정도<br class="desktop-br">덕질의 일부니까.</h4>
      <p>Deokmate는 공연을 중심으로 <strong>동행, 이동, 현장 정보</strong>를 한곳에서 연결해보는 팬 경험 서비스입니다.<br class="desktop-br">같은 공연을 보러 가는 사람들이 필요한 사람과 정보를 조금 더 편하게 찾을 수 있는 방법을 만들고 있습니다.</p>
      <div class="deokmate-public" aria-label="public project scope">
        <span>Fandom</span><span>Concert</span><span>Offline experience</span>
      </div>
      <div class="redacted" aria-label="some product details are intentionally hidden">
        <span></span><span></span>
      </div>
      <p class="deokmate-note">구체적인 연결 방식과 세부 기능은 개발이 더 진행된 뒤 공개합니다.</p>
    </div>
    <div class="deokmate-meta">
      <span>mate.idealwhy.com</span>
      <span>building / not yet public</span>
    </div>
  `;

  const existingWorks=[...worksSection.querySelectorAll('.work')];
  const anchor=existingWorks[existingWorks.length-1];
  if(anchor) anchor.insertAdjacentElement('afterend',teaser);
  else worksSection.appendChild(teaser);

  requestAnimationFrame(()=>teaser.classList.add('in'));
})();

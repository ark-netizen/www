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
    .deokmate-copy p{max-width:610px;margin:0;color:var(--muted);font-size:15px;line-height:1.78;text-wrap:pretty}
    .redacted{margin-top:30px;display:grid;gap:9px;max-width:580px}
    .redacted span{display:block;height:13px;background:var(--ink);position:relative;overflow:hidden}
    .redacted span:nth-child(1){width:92%}.redacted span:nth-child(2){width:71%}.redacted span:nth-child(3){width:44%}
    .redacted span::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(49,87,255,.18),transparent);transform:translateX(-110%);animation:redactedScan 5.8s ease-in-out infinite}
    .deokmate-meta{grid-column:1/-1;border-top:1px solid var(--line);margin-top:30px;padding-top:14px;display:flex;justify-content:space-between;gap:20px;font:500 9px "DM Mono",monospace;letter-spacing:.11em;text-transform:uppercase;color:var(--muted)}
    .deokmate-meta span:last-child{color:var(--blue)}
    @keyframes redactedScan{0%,70%,100%{transform:translateX(-110%)}82%{transform:translateX(110%)}}
    @media(max-width:850px){.deokmate-teaser{grid-template-columns:1fr;gap:38px}.deokmate-meta{margin-top:12px}}
    @media(max-width:540px){.deokmate-teaser{margin-top:100px;padding:32px 0 28px}.deokmate-meta{display:block}.deokmate-meta span{display:block;margin-top:5px}.redacted span{height:11px}}
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
      <h4>아직 공개 전인 실험입니다.</h4>
      <p>이름과 다음 주소만 먼저 남깁니다.<br class="desktop-br">문제 정의와 기능은 공개할 수 있는 시점에 업데이트합니다.</p>
      <div class="redacted" aria-label="details intentionally hidden">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="deokmate-meta">
      <span>mate.idealwhy.com</span>
      <span>details intentionally hidden / preparing</span>
    </div>
  `;

  const existingWorks=[...worksSection.querySelectorAll('.work')];
  const anchor=existingWorks[existingWorks.length-1];
  if(anchor) anchor.insertAdjacentElement('afterend',teaser);
  else worksSection.appendChild(teaser);

  requestAnimationFrame(()=>teaser.classList.add('in'));
})();

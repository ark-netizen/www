(()=>{
  const maker=document.querySelector('#maker .wrap');
  if(!maker || maker.querySelector('.privacy-fold')) return;

  const style=document.createElement('style');
  style.textContent=`
    .privacy-fold{margin-top:48px;border-top:1px solid var(--ink);border-bottom:1px solid var(--line)}
    .privacy-fold summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:20px 0;font:600 13px "DM Sans","Noto Sans KR",sans-serif}
    .privacy-fold summary::-webkit-details-marker{display:none}
    .privacy-fold-title{display:flex;align-items:center;gap:10px}
    .privacy-fold-title::before{content:"+";display:grid;place-items:center;width:24px;height:24px;border:1px solid var(--ink);border-radius:50%;font:500 16px/1 "DM Mono",monospace;transition:transform .2s ease}
    .privacy-fold[open] .privacy-fold-title::before{content:"−"}
    .privacy-fold-note{color:var(--muted);font:500 9px "DM Mono",monospace;letter-spacing:.1em;text-transform:uppercase}
    .privacy-fold-body{padding:0 0 44px}
    .privacy-fold-body .makergrid{margin-top:20px}
    .contact-privacy{margin-top:18px;border-top:1px solid #ffffff55;border-bottom:1px solid #ffffff55}
    .contact-privacy summary{list-style:none;cursor:pointer;padding:12px 0;font:600 13px "DM Sans","Noto Sans KR",sans-serif}
    .contact-privacy summary::-webkit-details-marker{display:none}
    .contact-privacy summary::before{content:"+ ";font-family:"DM Mono",monospace;color:var(--acid)}
    .contact-privacy[open] summary::before{content:"− "}
    .contact-privacy-body{padding:0 0 12px}
    @media(max-width:540px){.privacy-fold{margin-top:34px}.privacy-fold summary{align-items:flex-start}.privacy-fold-note{text-align:right;max-width:120px}}
  `;
  document.head.appendChild(style);

  const details=document.createElement('details');
  details.className='privacy-fold';
  details.innerHTML='<summary><span class="privacy-fold-title">프로필 · 경력 보기</span><span class="privacy-fold-note">Recruiting information</span></summary><div class="privacy-fold-body"></div>';
  const body=details.querySelector('.privacy-fold-body');
  ['.makergrid','.traits','.evidence'].forEach(selector=>{
    const node=maker.querySelector(selector);
    if(node) body.appendChild(node);
  });
  maker.appendChild(details);

  const contact=document.querySelector('.contact');
  const contactCopy=contact?.querySelector('.contactgrid > div:last-child');
  if(contactCopy){
    const privateLinks=[...contactCopy.querySelectorAll('a[href^="mailto:"],a[href*="github.com/ark-netizen"]')];
    if(privateLinks.length){
      const contactDetails=document.createElement('details');
      contactDetails.className='contact-privacy';
      contactDetails.innerHTML='<summary>연락처 보기</summary><div class="contact-privacy-body"></div>';
      const contactBody=contactDetails.querySelector('.contact-privacy-body');
      privateLinks.forEach(link=>contactBody.appendChild(link));
      contactCopy.appendChild(contactDetails);
    }
  }
})();
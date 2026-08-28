(()=>{
  const style=document.createElement('style');
  style.textContent=`
    .entertainment-origin{margin:28px 0 4px;padding:22px 0 2px;border-top:1px solid var(--line)}
    .entertainment-origin .origin-label{font:500 9px "DM Mono",monospace;letter-spacing:.12em;text-transform:uppercase;color:var(--blue);margin-bottom:11px}
    .entertainment-origin h5{font-size:clamp(20px,2.1vw,27px);line-height:1.42;letter-spacing:-.035em;margin:0 0 9px;text-wrap:balance}
    .entertainment-origin p{max-width:650px;margin:0;color:var(--muted);font-size:14px;line-height:1.75;text-wrap:pretty}
    @media(max-width:850px){.entertainment-origin{margin-top:24px}}
  `;
  document.head.appendChild(style);

  const worksLead=document.querySelector('#works .workshead .lead');
  if(worksLead){
    worksLead.innerHTML='직장 영어, 감정, 팬 경험처럼 서로 다른 주제지만 출발점은 같습니다.<br class="desktop-br">익숙한 방식을 한 번 더 의심하고, 그 안의 질문을 실제로 써볼 수 있는 서비스 경험으로 확장합니다.';
  }

  const works=[...document.querySelectorAll('#works .work')];
  const flow=works[1];
  if(flow){
    const copy=flow.querySelector('.flowcopy');
    const callout=flow.querySelector('.philosophy-callout');
    if(copy && callout && !copy.querySelector('.entertainment-origin')){
      callout.insertAdjacentHTML('afterend',`
        <div class="entertainment-origin">
          <div class="origin-label">From entertainment to experience</div>
          <h5>좋아하는 아티스트에서 받은 영감을,<br class="desktop-br">하나의 서비스 경험으로 확장했습니다.</h5>
          <p>흘려보내요는 좋아하는 아티스트를 뮤즈로 삼아 시작한 개인 작업입니다. 엔터테인먼트에서 받은 감정과 팬 경험이 음악이나 콘텐츠 소비에 머물지 않고, 사용자가 직접 참여하는 새로운 서비스 경험으로 이어질 수 있는지 실험했습니다.</p>
        </div>
      `);
    }
  }

  const makerCopy=document.querySelector('#maker .makercopy');
  if(makerCopy){
    makerCopy.innerHTML='<span class="sentence-block">콘텐츠·음악 사업과 K-pop 마케팅을 경험하며 팬이 콘텐츠를 만나고 반응하는 방식을 가까이서 봤습니다. 그 경험이 기존 엔터테인먼트 상품 안에서 끝나지 않고, 새로운 서비스와 사업으로 확장되는 지점에 관심이 있습니다.</span><br class="desktop-br"><span class="sentence-block">지금은 AI와 웹 기술을 활용해 떠올린 아이디어를 직접 제품으로 옮기고 있습니다.</span><br class="desktop-br"><strong>idealwhy는 사업 감각, 팬과 사용자에 대한 관찰, 데이터, 구현을 한곳에 모아<br class="desktop-br">질문과 결과물을 쌓는 브랜드입니다.</strong>';
  }

  const rows=[...document.querySelectorAll('#maker .erow')];
  if(rows[2]){
    const p=rows[2].querySelector('p');
    if(p)p.textContent='WorkMate English, 흘려보내요, InsightMate, Deokmate 등 개인 제품을 기획하고 직접 구현.';
  }
})();

(()=>{
  const setHTML=(selector,html,root=document)=>{const el=root.querySelector(selector);if(el)el.innerHTML=html;};
  const setText=(selector,text,root=document)=>{const el=root.querySelector(selector);if(el)el.textContent=text;};

  const style=document.createElement('style');
  style.textContent=`
    .feature-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-top:0}
    .feature-item{padding:22px 20px 24px;border-right:1px solid var(--line);min-height:168px}
    .feature-item:first-child{padding-left:0}.feature-item:last-child{border-right:0;padding-right:0}
    .feature-item b{display:block;font:500 9px "DM Mono",monospace;color:var(--blue);letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px}
    .feature-item h5{font-size:18px;line-height:1.35;letter-spacing:-.025em;margin:0 0 8px}
    .feature-item p{font-size:13px;color:var(--muted);margin:0}
    .philosophy-callout{margin:26px 0 0;padding:24px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);font-size:clamp(20px,2.2vw,30px);line-height:1.45;letter-spacing:-.035em}
    .philosophy-callout strong{background:linear-gradient(transparent 62%,var(--acid) 62%)}
    @media(max-width:850px){.feature-grid{grid-template-columns:1fr 1fr}.feature-item:nth-child(2){border-right:0}.feature-item:nth-child(-n+2){border-bottom:1px solid var(--line)}}
    @media(max-width:540px){.feature-grid{grid-template-columns:1fr}.feature-item,.feature-item:first-child,.feature-item:last-child{padding:20px 0;border-right:0;border-bottom:1px solid var(--line);min-height:0}.feature-item:last-child{border-bottom:0}}
  `;
  document.head.appendChild(style);

  setText('.hero .side','이상적인 답은 출발점입니다. idealwhy는 익숙한 해결책을 그대로 채택하기보다, 왜 필요한지와 무엇이 달라져야 하는지를 묻고 그 질문을 실제 제품과 경험으로 옮깁니다.');

  setHTML('#name .title','ideal은 목표이고,<br><span style="color:var(--blue)">why?</span>는 그 목표를 다시 들여다보는 질문입니다.');
  setText('#name .equation small','좋아 보이는 답 → 이유를 묻는 질문 → 직접 만들어 확인하는 과정');
  const principles=[...document.querySelectorAll('#name .principle')];
  const principleCopy=[
    ['답보다 이유를 먼저 봅니다.','기능이나 아이디어가 좋아 보여도, 사용자가 실제로 필요로 하는 순간과 맥락이 분명한지부터 봅니다.'],
    ['문제를 다시 정의합니다.','기존 방식의 불편을 그대로 고치기보다, 왜 불편한지와 무엇이 빠져 있는지부터 분해합니다.'],
    ['질문은 구현으로 확인합니다.','설명에서 끝내지 않고 작게라도 작동하는 형태로 만들어 실제 경험에서 다시 판단합니다.']
  ];
  principles.forEach((item,i)=>{if(!principleCopy[i])return;setText('h3',principleCopy[i][0],item);setText('p',principleCopy[i][1],item);});

  setHTML('#belief .manifest','정답을 빨리 고르는 것보다,<br><em>질문을 한 번 더 정확하게 하는 것.</em>');
  const rules=[...document.querySelectorAll('#belief .rule span')];
  [
    '해결책을 정하기 전에 왜 필요한지부터 묻습니다.',
    '사용자가 실제로 행동하는 순간과 맥락을 기준으로 봅니다.',
    '설명 가능한 아이디어보다 직접 경험할 수 있는 형태로 만듭니다.',
    '만든 뒤의 반응을 보고 다시 질문하고 고칩니다.'
  ].forEach((t,i)=>{if(rules[i])rules[i].textContent=t;});

  setText('#works .workshead .lead','WorkMate English와 흘려보내요는 같은 방식으로 시작했습니다. 익숙한 해결법을 한 번 더 의심하고, 질문을 실제로 써볼 수 있는 경험으로 바꿨습니다.');

  const works=[...document.querySelectorAll('#works .work')];
  const workmate=works[0];
  if(workmate){
    setHTML('.workq','“직장 영어를 따로 공부하는 대신,<br><strong>영어로 일하는 상황 자체를 연습할 수는 없을까?</strong>”',workmate);
    setText('.showcopy h4','같은 업무 시뮬레이션, 다른 몰입 방식.',workmate);
    setText('.showcopy > p','게임 모드와 비즈니스 모드는 기능이 다른 서비스가 아니라 같은 회사생활을 서로 다른 인터페이스로 경험하는 선택지입니다. 사용자는 더 익숙하고 편한 화면으로 출근하지만, 관계별 업무·힌트·AI 피드백·리포트라는 학습 구조는 동일하게 이어집니다.',workmate);
    const mini=[...workmate.querySelectorAll('.mini div span')];
    if(mini[0])mini[0].textContent='픽셀 오피스와 캐릭터를 활용한 게임형 인터페이스';
    if(mini[1])mini[1].textContent='메신저·업무 도구에 가까운 정돈된 인터페이스';

    const cells=[...workmate.querySelectorAll('.workbody .cell')];
    const cellCopy=[
      ['배운 영어와 실제 업무 사이에 간극이 있었습니다.','교재에서는 문장을 익혀도 실제 회사에서는 동료·상사·거래처에 따라 말투와 목적, 사용하는 채널까지 달라집니다. 필요한 건 문장 암기보다 상황 안에서 판단하고 답하는 연습이었습니다.'],
      ['왜 직장 영어도 ‘공부하러 들어가야’ 할까?','학습 의지에만 기대기보다 실제 업무처럼 연락이 먼저 찾아오고, 답해야 할 이유가 생기면 영어를 쓰는 빈도와 맥락을 함께 만들 수 있다고 봤습니다.'],
      ['하루의 업무 흐름 전체를 학습 구조로 만들었습니다.','출근하면 업무 연락이 오고, 필요한 만큼 힌트를 확인해 답변하고, Solar 피드백과 후속 대화를 거쳐 퇴근 리포트에서 막혔던 표현을 다시 복습합니다.']
    ];
    cells.forEach((cell,i)=>{if(!cellCopy[i])return;setText('h4',cellCopy[i][0],cell);setText('p',cellCopy[i][1],cell);});

    const monitor=workmate.querySelector('.monitor-showcase');
    if(monitor && !workmate.querySelector('.feature-grid')){
      monitor.insertAdjacentHTML('afterend',`
        <div class="feature-grid">
          <div class="feature-item"><b>PROACTIVE CONTACT</b><h5>업무가 먼저 찾아옵니다.</h5><p>Web Push와 카카오톡으로 첫 업무와 리포트·재참여 알림을 보내고, 메신저와 이메일로 실제 업무 흐름을 이어갑니다.</p></div>
          <div class="feature-item"><b>AWAY MODE</b><h5>바쁜 날에는 기다립니다.</h5><p>지금 답하기 어렵다면 ‘외근 중’으로 연락을 미루고 30분 뒤 다시 받을 수 있습니다. 바쁜 날을 학습 실패로 기록하지 않습니다.</p></div>
          <div class="feature-item"><b>EMOTIONAL RETENTION</b><h5>행동 신호에 따라 개입을 조절합니다.</h5><p>외근이 반복되면 하루 한 번 동료가 짧은 위로와 표현을 먼저 건넵니다. 고함항아리에서는 채점 없이 영어로 스트레스를 털어놓을 수 있습니다.</p></div>
          <div class="feature-item"><b>LONG-TERM GROWTH</b><h5>스트릭 대신 근태, 레벨 대신 직급.</h5><p>출근·연차·연속 출근·인사평가·승급을 회사생활의 언어로 연결해 “학습 점수”보다 “회사에서 성장하고 있다”는 감각을 남깁니다.</p></div>
        </div>
      `);
    }

    const steps=[...workmate.querySelectorAll('.flowbar .step span')];
    ['출근 · 업무 도착','Messenger · Email','힌트 확인 · 영어 답변','Solar 피드백 · 후속 대화','리포트 · 근태 · 성장 기록'].forEach((t,i)=>{if(steps[i])steps[i].textContent=t;});
    const foot=workmate.querySelector('.foot > span');
    if(foot)foot.textContent='“오늘도 공부해야지”보다 “업무 연락이 왔네, 답해야겠다”에서 시작하도록 학습 동기를 바꿨습니다.';
    const chips=workmate.querySelector('.chips');
    if(chips)chips.innerHTML='<span>React</span><span>TypeScript</span><span>Supabase</span><span>Solar LLM</span><span>Kakao</span><span>Web Push</span>';
  }

  const flow=works[1];
  if(flow){
    setHTML('.workq','“모든 마음을 꼭 이해하고 분석해야만,<br><strong>잘 다룰 수 있는 걸까?</strong>”',flow);
    setText('.flowcopy h4','지우는 것도, 다시 들여다보는 것도 아닌 ‘잘 흘려두기’.',flow);
    setText('.flowcopy > p','흘려보내요는 감정을 삭제하거나 회고하는 앱이 아닙니다. 어떤 마음은 이유를 찾고 오래 들여다볼수록 더 손에서 놓기 어려울 수 있다는 데서 시작했습니다. 그래서 마음을 잠시 나에게서 떼어놓고, 해파리라는 제3자의 모티브를 통해 조금 떨어진 곳에서 바라보는 경험을 만들었습니다.',flow);
    const copy=flow.querySelector('.flowcopy');
    if(copy && !copy.querySelector('.philosophy-callout')){
      copy.querySelector(':scope > p')?.insertAdjacentHTML('afterend','<div class="philosophy-callout">흘려보낸 마음은 없어지는 대신 <strong>나의 바다에서 다른 풍경과 경험을 만나며 계속 흘러갑니다.</strong></div>');
    }
    const notes=[...flow.querySelectorAll('.notes .note')];
    const noteCopy=[
      ['감정을 붙잡고 분석하는 방식만이 답은 아니라고 봤습니다.','감정 기록과 회고가 도움이 될 때도 있지만, 어떤 마음은 다시 꺼내 읽고 이유를 찾는 과정이 오히려 그 감정을 오래 붙들게 만들기도 합니다. 흘려보내요는 ‘이해해야 놓을 수 있다’는 전제를 한 번 의심했습니다.'],
      ['사라지게 하지 않고, 나에게서 잠시 거리를 둡니다.','모래에 마음을 적으면 파도가 글씨를 지우지만 그 감정 자체가 없어진다고 표현하지 않습니다. 해파리가 대신 마음을 가지고 떠나면서 사용자는 자신의 감정을 제3자의 움직임으로 바라보게 됩니다.'],
      ['한 번의 인터랙션을 시간축의 경험으로 확장했습니다.','며칠 뒤 ‘나의 바다’에 돌아오면 처음 적었던 문장을 그대로 복기하는 대신, 해파리가 다른 풍경과 존재를 만나며 여행 중인 소식을 봅니다. 내가 붙잡고 있지 않아도 마음은 계속 흘러갈 수 있다는 서사가 재방문 이유가 됩니다.']
    ];
    notes.forEach((note,i)=>{if(!noteCopy[i])return;setText('h5',noteCopy[i][0],note);setText('p',noteCopy[i][1],note);});
    const flowSteps=[...flow.querySelectorAll('.flowbar .step span')];
    ['마음을 모래에 적기','파도에 흘려보내기','해파리에게 맡겨두기','나의 바다에서 여행하기','소식을 만나고 새 마음 맞기'].forEach((t,i)=>{if(flowSteps[i])flowSteps[i].textContent=t;});
  }

  setText('#maker .title','그리고 이 질문들을 만드는 사람.');
  setHTML('#maker .makercopy','콘텐츠·사업 운영에서 출발해, 퍼포먼스 마케팅으로 반응을 숫자로 읽고, 지금은 AI와 웹 기술로 아이디어를 직접 제품으로 옮기고 있습니다. <strong>idealwhy는 사업 감각, 데이터, 구현을 한곳에 모아 질문과 결과물을 쌓는 브랜드입니다.</strong>');
  const traits=[...document.querySelectorAll('#maker .trait')];
  const traitCopy=[
    ['아이디어를 실제 사업으로 굴려본 경험','음악 사업에서 기획·계약·유통·프로모션·제휴를 직접 운영하며 아이디어가 매출과 사용자 반응으로 이어지는 과정을 경험했습니다.'],
    ['반응을 숫자로 확인하고 다시 고치기','디지털 퍼포먼스 마케팅에서 캠페인 반응과 전환 데이터를 보고 가설을 수정했습니다. 감각을 버리기보다 근거로 보완하는 방식을 익혔습니다.'],
    ['필요하면 직접 만들어 검증하기','React, TypeScript, Supabase, LLM을 활용해 기획안을 실제로 클릭하고 써볼 수 있는 MVP까지 구현합니다.']
  ];
  traits.forEach((trait,i)=>{if(!traitCopy[i])return;setText('h4',traitCopy[i][0],trait);setText('p',traitCopy[i][1],trait);});

  const rows=[...document.querySelectorAll('#maker .erow')];
  if(rows[0])setText('p','음악사업 기획·유통·프로모션·제휴 운영. 대표 프로젝트 ROI 230%, 회수율 310%.',rows[0]);
  if(rows[1])setText('p','K-pop 캠페인 Google·Meta 광고 운영, 성과 분석 및 리포팅.',rows[1]);
  if(rows[2])setText('p','WorkMate English와 흘려보내요 등 개인 제품을 기획하고 직접 구현.',rows[2]);

  setText('.contact p','질문을 던지고, 직접 만들고, 반응을 보고 다시 고칩니다. idealwhy는 그 과정을 계속 기록하는 공간입니다.');
})();
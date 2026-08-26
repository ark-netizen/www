(()=>{
  const setHTML=(selector,html,root=document)=>{const el=root.querySelector(selector);if(el)el.innerHTML=html;};
  const setText=(selector,text,root=document)=>{const el=root.querySelector(selector);if(el)el.textContent=text;};

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
    setText('.showcopy h4','학습 구조는 같고, 몰입하는 화면은 선택할 수 있게.',workmate);
    setText('.showcopy > p','게임 모드와 비즈니스 모드는 같은 업무 시뮬레이션을 서로 다른 인터페이스로 제공합니다. 기능을 나누기보다 사용자가 더 편하게 몰입할 수 있는 화면을 선택하도록 했습니다.',workmate);
    const mini=[...workmate.querySelectorAll('.mini div span')];
    if(mini[0])mini[0].textContent='픽셀 오피스와 캐릭터를 활용한 게임형 인터페이스';
    if(mini[1])mini[1].textContent='메신저·업무 도구에 가까운 정돈된 인터페이스';

    const cells=[...workmate.querySelectorAll('.workbody .cell')];
    const cellCopy=[
      ['배운 영어와 실제 업무 사이에 간극이 있었습니다.','교재에서는 문장을 익혀도 실제 회사에서는 동료·팀장·거래처에 따라 말투와 맥락이 달라집니다. 필요한 건 단순 회화 반복보다 상황 속에서 판단하고 답하는 연습이었습니다.'],
      ['왜 직장 영어도 ‘공부 시간’에만 연습해야 할까?','업무 중 영어를 쓰는 흐름 자체를 연습한다면 표현뿐 아니라 관계, 목적, 타이밍까지 함께 익힐 수 있다고 봤습니다.'],
      ['하루의 업무 흐름을 학습 구조로 만들었습니다.','출근하면 업무 연락이 오고, 힌트를 참고해 영어로 답하고, AI 피드백과 후속 대화를 거쳐 퇴근 리포트에서 다시 복습합니다.']
    ];
    cells.forEach((cell,i)=>{if(!cellCopy[i])return;setText('h4',cellCopy[i][0],cell);setText('p',cellCopy[i][1],cell);});

    const steps=[...workmate.querySelectorAll('.flowbar .step span')];
    ['출근 · 오늘의 업무','메시지·메일 수신','힌트 확인 · 영어 답변','Solar 피드백 · 후속 대화','퇴근 리포트 · 복습'].forEach((t,i)=>{if(steps[i])steps[i].textContent=t;});
    const foot=workmate.querySelector('.foot > span');
    if(foot)foot.textContent='직장 영어를 문장 단위가 아니라 ‘업무 맥락이 이어지는 하루’로 연습합니다.';
    const chips=workmate.querySelector('.chips');
    if(chips)chips.innerHTML='<span>React</span><span>TypeScript</span><span>Supabase</span><span>Solar LLM</span>';
  }

  const flow=works[1];
  if(flow){
    setHTML('.workq','“고민을 꼭 해결해야만,<br><strong>내려놓을 수 있을까?</strong>”',flow);
    setText('.flowcopy h4','답을 주기보다, 놓아보내는 행동을 만들었습니다.',flow);
    setText('.flowcopy > p','고민을 모래에 적으면 파도가 지우고, 해파리가 가져갑니다. 사용자가 생각을 입력하고 사라지는 과정을 직접 보는 짧은 루틴으로, 해결보다 ‘잠깐 내려놓기’에 집중했습니다.',flow);
    const notes=[...flow.querySelectorAll('.notes .note')];
    const noteCopy=[
      ['고민이 있다고 항상 해결책이 필요한 건 아니었습니다.','바로 답을 찾기 어려운 생각은 계속 머릿속에 남습니다. 그럴 때는 분석보다 잠깐 밖으로 꺼내놓는 행동 자체가 필요할 수 있다고 봤습니다.'],
      ['왜 위로는 늘 조언이나 문장이어야 할까?','말을 더하는 대신, 사용자가 스스로 적고 지워지는 과정을 보게 하면 ‘놓아준다’는 감각을 더 직접적으로 만들 수 있다고 생각했습니다.'],
      ['모래·파도·해파리를 하나의 인터랙션으로 연결했습니다.','고민을 입력하면 모래 위에 적히고, 파도가 글씨를 지운 뒤 해파리가 가져갑니다. 서비스의 메시지를 설명하지 않고 행동으로 경험하도록 설계했습니다.']
    ];
    notes.forEach((note,i)=>{if(!noteCopy[i])return;setText('h5',noteCopy[i][0],note);setText('p',noteCopy[i][1],note);});
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
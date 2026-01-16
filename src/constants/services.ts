export interface Service {
  id: number
  title: string
  badge: string
  badgeColor: string
  number: string
  heading: string
  description: string
  imgSrc: string
  backgroundColor: string
  layout: string
}

export const SERVICES: Service[] = [
  {
    id: 0,
    title: '1. LLM 기반 현장 데이터 맥락화 분석',
    badge: '현장 데이터 맥락화',
    badgeColor: 'bg-sky-500',
    number: '01',
    heading: '흩어진 현장 데이터를\n의사결정에 바로 쓰이는 정보로 바꿉니다',
    description:
      'LLM이 MES, 설비 로그, 작업일지, 현장 메모 등 비정형·분산 데이터를 공정 단위로 자동 정렬하고 표준 스키마로 변환합니다. 단순 수치 집계가 아니라 교대, 자재 변경, 작업 조건 같은 현장 맥락을 함께 분석해 숫자에 원인을 연결합니다. 주간 보고를 위해 반복되던 엑셀 수작업을 제거하고, 이상 패턴과 판단 포인트를 실시간 요약으로 제공합니다. 데이터는 보고용 기록에서 즉시 판단 가능한 정보로 전환됩니다.',
    imgSrc: '/assets/service1.jpg',
    backgroundColor: 'bg-sky-500/20',
    layout: 'left',
  },
  {
    id: 1,
    title: '2. LLM 기반 RCA 자동 생성 및 지식화',
    badge: 'RCA 자동화',
    badgeColor: 'bg-blue-600',
    number: '02',
    heading: '문제 분석을 사람의 기억이 아니라\n시스템의 자산으로 만듭니다',
    description:
      '이상 이벤트 발생 시 LLM이 설비 로그, 품질 데이터, 작업자 입력을 자동으로 수집해 표준 RCA 템플릿 초안을 생성합니다. 5Why 구조에 따라 원인 가설과 근거 데이터를 연결하고, 과거 유사 사례와 재발 가능성을 함께 제시합니다. 관리자는 초안을 검토·보완하는 역할만 수행해 RCA 작성 시간을 대폭 단축할 수 있습니다. 확정된 RCA는 지식 데이터로 축적되어 동일 문제가 반복되지 않도록 활용됩니다.',
    imgSrc: '/assets/service2.jpg',
    backgroundColor: 'bg-blue-600/20',
    layout: 'right',
  },
  {
    id: 2,
    title: '3. 데이터 부족 전제의 공정·설비 판단 AI',
    badge: '이상 판단',
    badgeColor: 'bg-emerald-500',
    number: '03',
    heading: '학습 데이터가 없어도\nAI 판단은 즉시 시작됩니다',
    description:
      '대량의 레이블 데이터 대신 설비 구조, 공정 규칙, 물리적 허용 범위를 선지식으로 활용해 이상 가능성을 판단합니다. 센서 값과 공정 조건이 물리적으로 타당한 범위를 벗어나는지를 먼저 검증해 실효성 없는 알람을 줄입니다. 판단 결과는 LLM이 자연어로 설명해 현장과 관리자가 즉시 이해할 수 있습니다. 외부 컨설팅이나 복잡한 모델 학습 없이 내부 운영이 가능한 현실적인 AI 설계입니다.',
    imgSrc: '/assets/service3.jpg',
    backgroundColor: 'bg-emerald-500/20',
    layout: 'left',
  },
  {
    id: 3,
    title: '4. LLM 기반 현장 대응 실행 에이전트',
    badge: '현장 대응 에이전트',
    badgeColor: 'bg-slate-700',
    number: '04',
    heading: '보고를 기다리지 않고\n현장에서 바로 움직입니다',
    description:
      '이상 발생 즉시 LLM이 무엇이 어디서 발생했는지와 위험도를 자동 요약합니다. 현장 단독으로 실행 가능한 조치와 관리자 승인 필요 조치를 구분해 즉시 안내합니다. 매뉴얼 검색 없이 상황에 맞는 실행 가이드를 제공하고, 조치 내용은 자동으로 기록·보고됩니다. 초기 대응 지연으로 발생하던 생산 손실을 실질적으로 줄일 수 있습니다.',
    imgSrc: '/assets/service4.jpg',
    backgroundColor: 'bg-slate-700/20',
    layout: 'right',
  },
]

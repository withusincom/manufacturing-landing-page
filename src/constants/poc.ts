import { COLORS } from '@/styles/Colors'

export const POC_CONTENT = {
  categoryLabel: 'PoC 프로그램',
  title: '3개월 안에 여기까지 보여드립니다',
  description: '실제 공정 데이터로 검증하는 단계별 PoC 프로그램',
  period: [
    {
      month: '1개월',
      text: '데이터 연결 및 파이프라인 구축',
      color: COLORS.blue400,
    },
    {
      month: '2개월',
      text: '데이터 증강 및 AI 모델 개발',
      color: COLORS.green500,
    },
    {
      month: '3개월',
      text: 'LLM 통합 및 성과 검증',
      color: COLORS.blue400,
    },
  ],
  deliverables: [
    { id: 1, text: '핵심 공정 1개를 선정해 end-to-end 데이터 파이프라인 구축' },
    { id: 2, text: '합성 데이터를 활용한 이상탐지/불량 위험도 분석 PoC' },
    { id: 3, text: 'LLM·RAG 기반 제조 지식 질의응답 데모' },
    { id: 4, text: '데이터 품질·모델 성능·업무 리드타임 개선 효과 리포트' },
  ],
}

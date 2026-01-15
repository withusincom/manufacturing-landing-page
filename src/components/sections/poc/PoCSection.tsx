import CategoryLabel from '@/components/ui/CategoryLabel'
import FlexCenter from '@/components/ui/FlexCenter'
import P from '@/components/ui/P'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import { cx } from '@/lib/utils'
import { COLORS } from '@/styles/Colors'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const POC_CONTENT = {
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

const MotionFlexCenter = motion.create(FlexCenter)

export const PoCSection = () => {
  return (
    <section
      id="poc"
      className="py-20 px-4"
      style={{ backgroundColor: COLORS.gray900 }}
    >
      <div className="max-w-4xl mx-auto">
        <MotionFlexCenter
          vertical
          center
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <CategoryLabel
            className={cx('inline-flex items-center gap-2 border-2 mb-4')}
            color={COLORS.green500}
            style={{
              backgroundColor: `${COLORS.green500}10`,
              borderColor: `${COLORS.green500}30`,
            }}
          >
            <Text sm semibold color={COLORS.green500}>
              {POC_CONTENT.categoryLabel}
            </Text>
          </CategoryLabel>
          <Title level={2} color="white" text5xl bold>
            {POC_CONTENT.title}
          </Title>
          <P lg bold color={COLORS.gray400}>
            {POC_CONTENT.description}
          </P>
        </MotionFlexCenter>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="p-8 md:p-10 rounded-lg border"
            style={{
              backgroundColor: COLORS.gray800,
              borderColor: COLORS.gray700,
            }}
          >
            <div
              className="grid md:grid-cols-3 gap-6 mb-8 pb-8"
              style={{ borderBottomColor: COLORS.gray700 }}
            >
              {POC_CONTENT.period.map((item, index) => (
                <MotionFlexCenter
                  vertical
                  center
                  key={item.month}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <Text
                    text4xl
                    bold
                    color={item.color}
                    className="mb-2"
                    style={{ color: item.color }}
                  >
                    {item.month}
                  </Text>
                  <div style={{ color: COLORS.gray400 }}>{item.text}</div>
                </MotionFlexCenter>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              {POC_CONTENT.deliverables.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg"
                  style={{ backgroundColor: COLORS.gray900 }}
                >
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: COLORS.green500 }}
                  />
                  <p className="text-white">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PoCSection

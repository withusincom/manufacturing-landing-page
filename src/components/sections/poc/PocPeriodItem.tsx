import { FlexCenter, Text } from '@/components/ui'
import { COLORS } from '@/styles/Colors'
import { motion, Variants, ViewportOptions } from 'motion/react'

const MotionFlexCenter = motion.create(FlexCenter)

const period: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3 + index * 0.1,
    },
  }),
}

const viewport: ViewportOptions = { once: true, margin: '-100px' }

interface PocPeriodItemProps {
  index: number
  item: {
    month: string
    text: string
    color: string
  }
}

const PocPeriodItem = ({ index, item }: PocPeriodItemProps) => {
  return (
    <MotionFlexCenter
      vertical
      center
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={period}
      custom={index}
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
  )
}

export default PocPeriodItem

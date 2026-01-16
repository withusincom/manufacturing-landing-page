import { COLORS } from '@/styles/Colors'
import { CheckCircle2 } from 'lucide-react'
import { motion, Variants, ViewportOptions } from 'motion/react'

const deliverable: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.6 + index * 0.1,
    },
  }),
}

const viewport: ViewportOptions = { once: true, margin: '-100px' }

interface PocDeliverableItemProps {
  index: number
  item: {
    id: number
    text: string
  }
}

const PocDeliverableItem = ({ index, item }: PocDeliverableItemProps) => {
  return (
    <motion.div
      className="flex items-start gap-3 p-4 rounded-lg"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={deliverable}
      custom={index}
      style={{ backgroundColor: COLORS.gray900 }}
    >
      <CheckCircle2
        className="w-5 h-5 shrink-0 mt-0.5"
        style={{ color: COLORS.green500 }}
      />
      <p className="text-white">{item.text}</p>
    </motion.div>
  )
}

export default PocDeliverableItem

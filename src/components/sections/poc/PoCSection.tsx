import { MotionGroup } from '@/components/ui'
import { COLORS } from '@/styles/Colors'
import { motion, stagger, Variants, ViewportOptions } from 'motion/react'
import PocContent from './PocContent'
import PocHeader from './PocHeader'

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.1, { startDelay: 0.2 }),
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 30,
    transition: { duration: 0.6 },
  },
}

const viewport: ViewportOptions = { once: true, margin: '-100px' }

export const PoCSection = () => {
  return (
    <motion.section
      id="poc"
      className="py-20 px-4"
      style={{ backgroundColor: COLORS.gray900 }}
      initial="hidden"
      whileInView="visible"
      variants={container}
    >
      <div className="max-w-4xl mx-auto">
        <MotionGroup variants={item} viewport={viewport}>
          <PocHeader />
          <PocContent />
        </MotionGroup>
      </div>
    </motion.section>
  )
}

export default PoCSection

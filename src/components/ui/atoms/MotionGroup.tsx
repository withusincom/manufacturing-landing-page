import { cx } from '@/lib/utils'
import { motion } from 'motion/react'
import { Children } from 'react'

export type MotionGroupProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof motion.div>

const MotionGroup = ({
  variants,
  transition,
  children,
  viewport,
  className,
  ...restProps
}: MotionGroupProps) => {
  return (
    <>
      {Children.map(children, (child) => {
        return (
          <motion.div
            variants={variants}
            transition={transition}
            viewport={viewport || { once: true }}
            className={cx(className)}
            {...restProps}
          >
            {child}
          </motion.div>
        )
      })}
    </>
  )
}

export default MotionGroup

import { FlexCenter, Image } from '@/components/ui'
import { cx } from '@/lib/utils'
import { Card, Flex } from 'antd'
import { motion, Variants } from 'motion/react'

const MotionCard = motion.create(Card)

export interface ServiceImageCardProps {
  src: string
  alt: string
  backgroundColor: string
  variants?: Variants
}

const ServiceImageCard = ({
  src,
  alt,
  backgroundColor,
  variants,
  ...restProps
}: ServiceImageCardProps) => {
  return (
    <MotionCard
      className="overflow-hidden rounded-3xl flex-1"
      variants={variants}
    >
      <FlexCenter
        center
        className={cx(
          'relative p-3 rounded-2xl',
          backgroundColor,
          'aspect-[391/244.38]',
        )}
      >
        <Flex
          vertical
          justify="center"
          align="flex-start"
          className="relative shrink-0 w-[94%] h-full rounded-xl bg-white/65 shadow-[0_0_0_1px_rgba(255,255,255,0.6)_inset] backdrop-blur-sm overflow-hidden"
        >
          <Image
            src={src}
            alt={alt}
            width={'100%'}
            height={'100%'}
            className="object-cover rounded-xl"
            {...restProps}
          />
        </Flex>
      </FlexCenter>

      {/* Decorative blur elements */}
      <div className="absolute w-40 h-40 -right-8 -top-8 rounded-full bg-white/40 blur-2xl pointer-events-none" />
      <div className="absolute w-40 h-40 -left-8 -bottom-10 rounded-full bg-white/40 blur-2xl pointer-events-none" />
    </MotionCard>
  )
}

export default ServiceImageCard

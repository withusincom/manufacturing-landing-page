import { Flex } from 'antd'
import { motion } from 'motion/react'
import CategoryLabel from '../../ui/CategoryLabel'
import Title from '@/components/ui/Title'
import P from '@/components/ui/P'
import Text from '@/components/ui/Text'
import FlexCenter from '@/components/ui/FlexCenter'

const MotionFlexCenter = motion.create(FlexCenter)
const MotionTitle = motion.create(Title)
const MotionParagraph = motion.create(P)

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

interface ServiceFeatureProps {
  color: string
  text: string
  number: string
  title: string
  description: string
}

const ServiceFeature = ({
  color,
  text,
  number,
  title,
  description,
}: ServiceFeatureProps) => {
  return (
    <Flex vertical gap={24} flex={1}>
      <MotionFlexCenter
        centerY
        gap={12}
        variants={fadeUpVariants}
        transition={{ duration: 0.5 }}
      >
        <CategoryLabel color={color}>
          <Text xs color="white" normal>
            {text}
          </Text>
        </CategoryLabel>
        <Text xs color="#a1a1a1" normal>
          {number}
        </Text>
      </MotionFlexCenter>

      <MotionTitle
        level={3}
        bold
        className="text-gray-900 text-[28px] leading-[41.25px] whitespace-pre-line"
        variants={fadeUpVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </MotionTitle>

      <MotionParagraph
        sm
        normal
        color="#525252"
        className="text-neutral-600 leading-[24.38px]"
        variants={fadeUpVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </MotionParagraph>
    </Flex>
  )
}

export default ServiceFeature

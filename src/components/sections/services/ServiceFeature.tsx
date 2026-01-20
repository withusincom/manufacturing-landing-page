import {
  CategoryLabel,
  FlexCenter,
  MotionGroup,
  P,
  Text,
  Title,
} from '@/components/ui'
import { Flex } from 'antd'
import { Variants } from 'motion/react'

interface ServiceFeatureProps {
  color: string
  text: string
  number: string
  title: string
  description: string
  variants?: Variants
}

const ServiceFeature = ({
  color,
  text,
  number,
  title,
  description,
  variants,
}: ServiceFeatureProps) => {
  return (
    <Flex vertical gap={24} flex={1}>
      <MotionGroup variants={variants} transition={{ duration: 0.5 }}>
        <FlexCenter centerY gap={12} className="mb-4">
          <CategoryLabel color={color}>
            <Text xs color="white">
              {text}
            </Text>
          </CategoryLabel>
          <Text xs color="#a1a1a1">
            {number}
          </Text>
        </FlexCenter>

        <Title
          level={3}
          bold
          className="text-gray-900 text-[28px] leading-[41.25px] whitespace-pre-line"
        >
          {title}
        </Title>

        <P sm color="#525252" className="text-neutral-600 leading-[24.38px]">
          {description}
        </P>
      </MotionGroup>
    </Flex>
  )
}

export default ServiceFeature

import { CategoryLabel, MotionGroup, P, Text, Title } from '@/components/ui'
import { COLORS } from '@/styles/Colors'
import { feature, TargetContentData } from './TargetSection'

type TargetHeaderProps = {
  data: TargetContentData
}

const TargetHeader = ({ data }: TargetHeaderProps) => {
  return (
    <MotionGroup variants={feature}>
      <CategoryLabel color={COLORS.white} className="mb-4">
        <Text sm medium>
          {data.categoryLabel}
        </Text>
      </CategoryLabel>

      <Title className="px-4">{data.title}</Title>

      <P className="px-4" strong color={COLORS.gray600}>
        {data.description}
      </P>
    </MotionGroup>
  )
}

export default TargetHeader

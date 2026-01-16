import { CategoryLabel, FlexCenter, P, Text, Title } from '@/components/ui'
import { POC_CONTENT } from '@/constants/poc'
import { cx } from '@/lib/utils'
import { COLORS } from '@/styles/Colors'

const PocHeader = () => {
  return (
    <FlexCenter vertical center className="mb-8">
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
    </FlexCenter>
  )
}

export default PocHeader

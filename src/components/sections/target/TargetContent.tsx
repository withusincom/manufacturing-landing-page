import { FlexCenter, Image, MotionGroup, P, Text, Title } from '@/components/ui'
import { cx } from '@/lib/utils'
import { Flex, Segmented } from 'antd'
import styled from 'styled-components'
import { feature, TargetContentItem } from './TargetSection'

type TargetContentProps = {
  options: { label: string; value: React.Key }[]
  item: TargetContentItem
  onChange: (value: string) => void
}

const TargetContents = ({ options, item, onChange }: TargetContentProps) => {
  return (
    <MotionGroup variants={feature}>
      <StyledSegmented
        size="small"
        options={options}
        className="mt-2 p-2"
        onChange={onChange}
      />

      <FlexCenter
        center
        gap={48}
        className={cx('lg:gap-16 my-12 max-lg:p-6 max-lg:flex-col h-full')}
      >
        <Image
          src={item.image.src}
          alt={item.image.alt}
          className="w-full max-w-md shadow-lg rounded-xl"
        />

        <Flex vertical gap={16} className="max-w-sm w-full h-full">
          <Title text3xl>{item.title}</Title>

          <P xl> {item.description}</P>

          <ul className="space-y-2">
            {item.points.map((point, index) => (
              <li key={`${item.id}${index}`}>
                <Text lg>{point}</Text>
              </li>
            ))}
          </ul>
        </Flex>
      </FlexCenter>
    </MotionGroup>
  )
}

export default TargetContents

const StyledSegmented = styled(Segmented)`
  .ant-segmented-group {
    margin: 0 auto;
    height: 48px;
  }

  .ant-segmented-item {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 32px;

    @media (max-width: 480px) {
      padding: 8px 16px;
    }
  }

  .ant-segmented-item-label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-weight: 600;
  }
`

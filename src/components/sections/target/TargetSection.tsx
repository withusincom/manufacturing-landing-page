import {
  CategoryLabel,
  FlexCenter,
  Image,
  ImageWrapper,
  MotionGroup,
  P,
  Text,
  Title,
} from '@/components/ui'
import { cx } from '@/lib/utils'
import { COLORS } from '@/styles/Colors'
import { Flex, Segmented } from 'antd'
import { motion } from 'motion/react'
import { useState } from 'react'
import styled from 'styled-components'

type TargetContent = {
  categoryLabel: string
  title: React.ReactNode
  description: React.ReactNode
  items: {
    id: React.Key
    label: string
    image: { src: string; alt: string }
    title: React.ReactNode
    description: React.ReactNode
    points: React.ReactNode[]
  }[]
}

const TARGET_CONTENT: TargetContent = {
  categoryLabel: '타겟 사용자',
  title: '아직 데이터가 없어도, 시작할 수 있습니다',
  description:
    '우리 솔루션은 데이터 인프라가 부족하거나 체계적인 데이터 관리 경험이 없는 중소·중견 제조기업을 위해 설계되었습니다',
  items: [
    {
      id: 'noData',
      label: '데이터 없음',
      image: { src: '/assets/target1.png', alt: 'target-1' },
      title: (
        <>
          현장은 바쁘지만, <br />
          남는 데이터가 없는 기업
        </>
      ),
      description: (
        <>
          일은 계속 돌아가지만
          <br />
          기록은 종이와 엑셀에 흩어져 사라집니다.
          <br />
          데이터를 쌓고 싶어도 어디서부터 시작해야 할지 막막한 상태입니다.
          <br />
          우리 솔루션은 <Text xl>없는 상태</Text>
          에서 시작하는 것을 전제로 설계되었습니다.
        </>
      ),
      points: [
        '수기·엑셀 중심으로 현장을 관리하는 기업',
        '설비·공정 데이터가 자동으로 쌓이지 않는 환경',
        '데이터의 필요성은 느끼지만, 도입 경험은 없는 조직',
      ],
    },
    {
      id: 'dataDistribution',
      label: '데이터 분산',
      image: { src: '/assets/target2.png', alt: 'target-2' },
      title: '데이터는 있지만, 연결되지 않은 기업',
      description: (
        <>
          엑셀, MES, 장비 로그 등
          <br />
          데이터는 이미 존재합니다.
          <br />
          하지만 시스템마다 흩어져 있어
          <br />
          분석과 의사결정으로 이어지지 않습니다.
          <br />
          문제는 데이터가 아니라 정리와 연결입니다.
        </>
      ),
      points: [
        '여러 시스템을 병행 사용 중인 제조기업',
        '데이터 취합과 보고에 많은 시간을 쓰는 조직',
        '경험과 감에 의존한 판단을 반복하는 팀',
      ],
    },
    {
      id: 'AXReady',
      label: 'AX 준비',
      image: { src: '/assets/target3.png', alt: 'AX 준비' },
      title: (
        <>
          데이터 기반 전환을
          <br />
          고민하기 시작한 기업
        </>
      ),
      description: (
        <>
          이제는 바꿔야 한다는 공감대는 형성됐습니다.
          <br />
          하지만 비용, 인력, 복잡도가 걱정됩니다.
          <br />
          우리 솔루션은 거창한 혁신이 아닌
          <br />
          현실적인 첫 단계의 AX를 돕습니다.
        </>
      ),
      points: [
        '데이터 기반 관리의 필요성을 인식한 기업',
        'AX·DX를 검토 중이지만 실행이 막막한 조직',
        'IT 인력 없이도 시작 가능한 방법을 찾는 팀',
      ],
    },
  ],
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const TargetSection = () => {
  const [selectedSegment, setSelectedSegment] = useState(
    TARGET_CONTENT.items[0].id,
  )
  const handleSegmentChange = (value: string) => {
    setSelectedSegment(value)
  }

  const targetOptions = TARGET_CONTENT.items.map((item) => ({
    label: item.label,
    value: item.id,
  }))

  const targetItems = TARGET_CONTENT.items.find(
    (item) => item.id === selectedSegment,
  )

  return (
    <motion.section
      className="max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <FlexCenter center vertical>
        <MotionGroup>
          <CategoryLabel color={COLORS.white} className="mb-4">
            <Text sm medium>
              {TARGET_CONTENT.categoryLabel}
            </Text>
          </CategoryLabel>
          <Title className="p-4">{TARGET_CONTENT.title}</Title>
          <P strong color={COLORS.gray600}>
            {TARGET_CONTENT.description}
          </P>
          <StyledSegmented
            size="small"
            options={targetOptions}
            className="p-2"
            onChange={handleSegmentChange}
          />
          <Flex className="bg-white rounded-2xl shadow-md-12">
            <FlexCenter
              center
              gap={48}
              className={cx('lg:gap-16 p-12 max-lg:flex-col')}
            >
              <ImageWrapper className="max-w-md" flex={1}>
                <Image
                  src={targetItems.image.src}
                  alt={targetItems.image.alt}
                />
              </ImageWrapper>

              <Flex vertical gap={16} flex={1}>
                <Title text3xl>{targetItems.title}</Title>

                <P xl> {targetItems.description}</P>

                <ul className="space-y-2">
                  {targetItems.points.map((point, index) => (
                    <li key={`${targetItems.id}${index}`}>
                      <Text lg>{point}</Text>
                    </li>
                  ))}
                </ul>
              </Flex>
            </FlexCenter>
          </Flex>
        </MotionGroup>
      </FlexCenter>
    </motion.section>
  )
}

export default TargetSection

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

    @media (max-width: 390px) {
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

import { Flex } from 'antd'
import { FlexCenter, Text } from '@/components/ui'

const UserCard = ({ avatar, name, position }) => {
  let NameComponent = typeof name === 'string' ? <Text>{name}</Text> : name
  let PositionComponent =
    typeof position === 'string' ? <Text>{position}</Text> : position

  return (
    <FlexCenter centerY gap={16} className={'w-fit px-2 border rounded-lg'}>
      {avatar}
      <Flex vertical>
        {NameComponent}
        {PositionComponent}
      </Flex>
    </FlexCenter>
  )
}

export default UserCard

import { Text } from '@/components/ui'
import { COPYRIGHT } from '@/constants/footer'
import { cx } from '@/lib/utils'
import { Flex, Space } from 'antd'
import { Copyright as CopyrightIcon } from 'lucide-react'

const Copyright = () => {
  return (
    <Flex justify="space-between" align="center">
      <Space size={4}>
        <CopyrightIcon size={16} className={cx('text-[#6b7280]')} />
        <Text type="secondary" sm color="#6b7280">
          {COPYRIGHT.text}
        </Text>
      </Space>
    </Flex>
  )
}

export default Copyright

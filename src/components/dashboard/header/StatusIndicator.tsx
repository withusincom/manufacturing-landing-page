import { Text } from '@/components/ui'
import { COLORS } from '@/styles/Colors'
import { Flex } from 'antd'
import { AlertCircle, CheckCircle2, TriangleAlert } from 'lucide-react'

type StatusIndicatorProps = {
  status: 'success' | 'warning' | 'error'
  text?: string
}

const StatusIndicator = ({ status, text = '' }: StatusIndicatorProps) => {
  if (status === 'success') {
    return (
      <Flex gap={4}>
        <CheckCircle2 color={COLORS.green500} />
        <Text color={COLORS.green500}>{text || 'Success'}</Text>
      </Flex>
    )
  }
  if (status === 'warning') {
    return (
      <Flex gap={4}>
        <TriangleAlert color={COLORS.yellow500} />
        <Text color={COLORS.yellow500}>{text || 'Warning'}</Text>
      </Flex>
    )
  }
  if (status === 'error') {
    return (
      <Flex gap={4}>
        <AlertCircle color={COLORS.red500} />
        <Text color={COLORS.red500}>{text || 'Error'}</Text>
      </Flex>
    )
  }
  return <Text color={COLORS.gray500}>Unknown</Text>
}

export default StatusIndicator

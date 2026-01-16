import { Text } from '@/components/ui'
import { cx } from '@/lib/utils'
import { Card, Flex } from 'antd'
import { PropsWithChildren } from 'react'

interface ContactCardProps {
  icon: React.ReactNode
  text: string
}

const ContactCard = ({
  icon,
  text,
  children,
}: PropsWithChildren<ContactCardProps>) => {
  return (
    <Card
      className={cx('border-none', 'bg-[#ECECEC]')}
      styles={{ body: { padding: '1rem' } }}
    >
      <Flex justify="space-between" align="center" wrap="wrap" gap="middle">
        <Flex align="center" gap="middle">
          {icon}
          <Text base color="black">
            {text}
          </Text>
        </Flex>
        {children}
      </Flex>
    </Card>
  )
}

export default ContactCard

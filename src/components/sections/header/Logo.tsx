import Text from '@/components/ui/Text'
import { cx } from '@/lib/utils'
import { Flex, Image } from 'antd'

const Logo = () => {
  return (
    <Flex align="center" gap={8} className={cx('h-12')}>
      <Image
        src="/assets/logo.png"
        alt="FabMind"
        preview={false}
        width={48}
        height={48}
      />
      <Text text2xl bold color="white">
        FabMind
      </Text>
    </Flex>
  )
}

export default Logo

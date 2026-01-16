import { Flex } from 'antd'
import { cx } from '@/lib/utils'

export type ImageWrapperProps = React.ComponentProps<typeof Flex>

const ImageWrapper = ({
  className,
  children,
  ...restProps
}: ImageWrapperProps) => {
  return (
    <Flex
      className={cx('rounded-xl overflow-hidden', className)}
      {...restProps}
    >
      {children}
    </Flex>
  )
}

export default ImageWrapper

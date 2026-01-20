import { Button, ButtonProps } from '@/components/ui'
import { cx } from '@/lib/utils.ts'

type HeaderButtonProps = ButtonProps

const HeaderButton = ({
  children,
  className = '',
  icon,
  ...restProps
}: HeaderButtonProps) => {
  return (
    <Button className={cx('w-9 h-9 p-0', className)} {...restProps}>
      {icon}
      {children}
    </Button>
  )
}

export default HeaderButton

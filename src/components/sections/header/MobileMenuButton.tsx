import { Button, ButtonProps } from '@/components/ui'
import { cx } from '@/lib/utils'
import { Menu } from 'lucide-react'

export interface MobileMenuButtonProps extends ButtonProps {
  toggle: () => void
}

const MobileMenuButton = ({
  toggle,
  className,
  ...restProps
}: MobileMenuButtonProps) => {
  return (
    <Button
      type="text"
      size="large"
      onClick={toggle}
      className={cx('lg:hidden p-0', className)}
      {...restProps}
    >
      <Menu color="white" size={40} />
    </Button>
  )
}

export default MobileMenuButton

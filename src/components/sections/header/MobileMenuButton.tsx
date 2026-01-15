import { cx } from '@/lib/utils'
import { Button } from 'antd'
import { Menu } from 'lucide-react'

export interface MobileMenuButtonProps {
  toggle: () => void
}

const MobileMenuButton = ({ toggle }: MobileMenuButtonProps) => {
  return (
    <Button
      type="text"
      size="large"
      icon={<Menu color="white" size={40} />}
      onClick={toggle}
      className={cx('lg:hidden')}
    />
  )
}

export default MobileMenuButton

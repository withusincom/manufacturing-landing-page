import { Link } from '@/components/ui'
import { MENU_LIST } from '@/constants/menuList'
import { cx, scrollToSection } from '@/lib/utils'
import { Flex } from 'antd'

const FooterMenu = () => {
  return (
    <Flex gap="large" flex={1} className="lg:justify-end">
      {MENU_LIST.map((menu) => (
        <Link
          base
          key={menu.id}
          href={menu.href}
          onClick={() => scrollToSection(menu.id)}
          className={cx('hover:opacity-70')}
          color="#ffffff"
        >
          {menu.label}
        </Link>
      ))}
    </Flex>
  )
}

export default FooterMenu

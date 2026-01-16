import { Link } from '@/components/ui'
import { LegalMenuList } from '@/constants/menuList'
import { cx } from '@/lib/utils'
import { Divider, Flex } from 'antd'

const LegalMenu = () => {
  return (
    <Flex align="center">
      {LegalMenuList.map((menu, index) => (
        <div key={menu.id}>
          <Link
            color="#9ca3af"
            href={menu.href}
            className={cx('hover:text-white')}
          >
            {menu.label}
          </Link>
          {index < LegalMenuList.length - 1 && (
            <Divider
              key={`divider-${menu.id}`}
              vertical
              className={cx('bg-[#9ca3af]')}
            />
          )}
        </div>
      ))}
    </Flex>
  )
}

export default LegalMenu

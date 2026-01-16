import { Link } from '@/components/ui'
import { MENU_LIST } from '@/constants/menuList'
import { cx, scrollToSection } from '@/lib/utils'

const NavBar = () => {
  return (
    <nav className="hidden lg:flex items-center h-full">
      {MENU_LIST.map((menu) => (
        <Link
          key={menu.id}
          href={menu.href}
          onClick={() => scrollToSection(menu.id)}
          color="white"
          lg
          medium
          className={cx(
            'px-10 h-full flex items-center font-inter tracking-tight transition-colors',
            'hover:bg-white/10',
          )}
        >
          {menu.label}
        </Link>
      ))}
    </nav>
  )
}

export default NavBar

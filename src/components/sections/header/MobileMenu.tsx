import { Link } from '@/components/ui'
import { MENU_LIST } from '@/constants/menuList'
import { cx, scrollToSection } from '@/lib/utils'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  return (
    open && (
      <div className="lg:hidden fixed inset-0 top-20 bg-black/80 backdrop-blur-sm z-40">
        <nav className="bg-black/90 p-8 flex flex-col gap-6">
          {MENU_LIST.map((menu) => (
            <Link
              color="white"
              xl
              semibold
              key={menu.id}
              href={menu.href}
              onClick={() => {
                onClose()
                scrollToSection(menu.id)
              }}
              className={cx(
                'font-inter tracking-tight border-b border-white pb-4',
              )}
            >
              {menu.label}
            </Link>
          ))}
        </nav>
      </div>
    )
  )
}

export default MobileMenu

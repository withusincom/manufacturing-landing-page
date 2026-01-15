import FlexCenter from '@/components/ui/FlexCenter'
import { cx } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import MobileMenuButton from './MobileMenuButton'
import NavBar from './NavBar'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cx(
        'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
        'bg-black',
        isScrolled ? '-translate-y-full' : 'translate-y-0',
      )}
      role="banner"
    >
      <FlexCenter centerY justify="space-between" className="h-[90px] px-11">
        <Link to="/">
          <Logo />
        </Link>

        <NavBar />

        <MobileMenuButton
          toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </FlexCenter>

      <MobileMenu
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  )
}

export default Header

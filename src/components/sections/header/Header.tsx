import { FlexCenter } from '@/components/ui'
import { cx } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import MobileMenuButton from './MobileMenuButton'
import NavBar from './NavBar'
import { Layout } from 'antd'

const { Header: AntdHeader } = Layout

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
    <AntdHeader
      className={cx(
        'flex justify-center items-center fixed left-0 right-0 z-50 transition-all duration-300 h-20',
        'bg-black',
        isScrolled ? '-translate-y-full' : 'translate-y-0',
      )}
    >
      <FlexCenter centerY justify="space-between" className="w-full">
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
    </AntdHeader>
  )
}

export default Header

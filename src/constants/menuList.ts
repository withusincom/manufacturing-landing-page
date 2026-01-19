export interface MenuList {
  id: string
  label: string
  href: string
}

export const MENU_LIST: MenuList[] = [
  {
    id: 'home',
    label: '홈',
    href: '/',
  },
  {
    id: 'solutions',
    label: '솔루션',
    href: '#solutions',
  },
  {
    id: 'contact',
    label: '문의하기',
    href: '#contact',
  },
]

export const LegalMenuList: MenuList[] = [
  {
    id: 'terms-of-service',
    label: '이용약관',
    href: '#',
  },
  {
    id: 'privacy-policy',
    label: '개인정보처리방침',
    href: '#',
  },
]

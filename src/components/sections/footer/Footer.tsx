import { cx } from '@/lib/utils'
import { Divider, Flex, FloatButton } from 'antd'
import { ChevronUp } from 'lucide-react'
import CompanyInfo from './CompanyInfo'
import Copyright from './Copyright'
import FooterMenu from './FooterMenu'
import LegalMenu from './LegalMenu'
import Title from '@/components/ui/Title'
import { COMPANY_INFO } from '@/constants/footer'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <FloatButton
        icon={<ChevronUp size={20} />}
        onClick={scrollToTop}
        type="primary"
        shape="circle"
        className={cx('right-8 bottom-8', 'border-white')}
      />
      <footer className="bg-black text-white px-8 md:px-16 py-16">
        {/* 최대 너비 컨테이너로 콘텐츠 너비 제한 */}
        <div className="max-w-7xl mx-auto">
          <Flex
            justify="space-between"
            gap={64}
            wrap
            className={cx('max-lg:flex-col')}
          >
            <Flex vertical flex={1}>
              <Title
                level={1}
                text5xl
                bold
                color="white"
                className={cx('max-md:text-4xl', 'mb-8')}
              >
                {COMPANY_INFO.name}
              </Title>
              <CompanyInfo />
              <LegalMenu />
            </Flex>
            <FooterMenu />
          </Flex>

          <Divider className={cx('bg-[#374151] mt-8 mb-8 md:mb-6')} />

          <Copyright />
        </div>
      </footer>
    </>
  )
}
export default Footer

import { Text } from '@/components/ui'
import { COMPANY_INFO } from '@/constants/footer'
import { cx } from '@/lib/utils'
import { Divider, Flex } from 'antd'

const CompanyInfo = () => {
  return (
    <Flex vertical flex={1}>
      <div className={cx('max-md:text-sm', 'mb-4')}>
        <Text sm color="#9ca3af">
          대표: {COMPANY_INFO.representative}
        </Text>
        <Divider vertical className={cx('bg-[#9ca3af]')} />
        <Text sm color="#9ca3af">
          이메일: {COMPANY_INFO.email}
        </Text>
        <br />
        <Text sm color="#9ca3af">
          주소: {COMPANY_INFO.address}
        </Text>
      </div>
    </Flex>
  )
}

export default CompanyInfo

import HeaderButton from '@/components/dashboard/header/HeaderButton.tsx'
import StatusIndicator from '@/components/dashboard/header/StatusIndicator'
import UpdateDate from '@/components/dashboard/header/UpdateDate'
import UserCard from '@/components/dashboard/header/UserCard.tsx'
import { FlexCenter, Select } from '@/components/ui'
import { Flex, Layout } from 'antd'
import { Bell, CircleUserRound, Sun } from 'lucide-react'

const { Header: AntdHeader } = Layout

const Header = () => {
  const factories = [
    { value: '울산1공장', label: '울산1공장' },
    { value: '울산2공장', label: '울산2공장' },
    { value: '천안공장', label: '천안공장' },
    { value: '평택공장', label: '평택공장' },
  ]
  const processes = [
    { value: '사출1공정', label: '사출1공정' },
    { value: '사출2공정', label: '사출2공정' },
    { value: '조합공정', label: '조합공정' },
    { value: '검사공정', label: '검사공정' },
    { value: '포장공정', label: '포장공정' },
  ]
  return (
    <AntdHeader className={'bg-amber-200 text-center px-12 h-24'}>
      <FlexCenter justify={'space-between'} centerY className={'h-full'}>
        <FlexCenter gap={8} centerY>
          <Flex vertical>
            <StatusIndicator status={'success'} />
            <UpdateDate date={new Date().toLocaleDateString()} />
          </Flex>
          <Select defaultValue={'울산1공장'} options={factories} />
          <Select defaultValue={'사출1공정'} options={processes} />
        </FlexCenter>
        <FlexCenter gap={8} centerY>
          <HeaderButton className={'w-9 h-9 p-0'} icon={<Bell size={20} />} />
          <HeaderButton className={'w-9 h-9 p-0'} icon={<Sun size={20} />} />
          <UserCard
            name={'허창원'}
            position={'관리자'}
            avatar={<CircleUserRound />}
          />
        </FlexCenter>
      </FlexCenter>
    </AntdHeader>
  )
}

export default Header

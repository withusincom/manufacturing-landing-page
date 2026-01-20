import SidebarMenu from '@/components/dashboard/SidebarMenu.tsx'
import Logo from '@/components/sections/header/Logo.tsx'
import Header from '@/pages/dashboard/Header.tsx'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const { Sider, Content } = Layout
const DashBoard = () => {
  return (
    <Layout className={'min-h-screen overflow-hidden'}>
      <Sider theme={'dark'} className={'text-amber-50'}>
        <Logo className={'accent-gray-500'} />
        <SidebarMenu />
      </Sider>
      <Layout>
        <Header />
        <Outlet />
        <Content className={'bg-gray-500 text-center'}>컨텐츠</Content>
      </Layout>
    </Layout>
  )
}

export default DashBoard

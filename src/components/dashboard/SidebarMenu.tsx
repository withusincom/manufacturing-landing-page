import { Menu, type MenuProps } from 'antd'
import {
  Brain,
  Database,
  HardDrive,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Workflow,
} from 'lucide-react'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: 'overview',
    label: 'Overview',
    icon: <LayoutDashboard />,
  },
  {
    key: 'data-sources',
    label: 'Data Sources',
    icon: <Database />,
  },
  {
    key: 'pipelines',
    label: 'Pipelines',
    icon: <Workflow />,
  },
  {
    key: 'datasets',
    label: 'Datasets & Synthetic',
    icon: <HardDrive />,
  },
  {
    key: 'llm-assistant',
    label: 'Overview',
    icon: <Brain />,
  },
  {
    key: 'monitoring',
    label: 'Monitoring & Logs',
    icon: <MessageSquare />,
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <Settings />,
  },
]

const SidebarMenu = () => {
  return <Menu defaultSelectedKeys={['overview']} items={items} />
}

export default SidebarMenu

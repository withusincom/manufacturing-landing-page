import './global.css'

import App from '@/App'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider, ThemeConfig } from 'antd'
import koKR from 'antd/es/locale/ko_KR'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ui/ScrollToTop'

const customTheme: ThemeConfig = {
  token: {
    colorPrimary: '#000000',
  },
}

const Main = () => (
  <StrictMode>
    <StyleProvider layer hashPriority="high">
      <ConfigProvider theme={customTheme} locale={koKR}>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </StyleProvider>
  </StrictMode>
)

createRoot(document.getElementById('root')).render(<Main />)

import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import DashBoard from '@/pages/dashboard/DashBoard.tsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dashboard" element={<DashBoard />}>
        <Route path="overview" />
        <Route path="dataSource" />
        <Route path="pipeline" />
        <Route path="datasets" />
        <Route path="llm-assistant" />
        <Route path="monitoring" />
        <Route path="settings" />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

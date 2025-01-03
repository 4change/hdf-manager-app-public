import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.compact.css'   // 紧凑主题
import zhCN from 'antd/es/locale/zh_CN';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Login from './pages/login.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admin/*' element={<App />} />
      </Routes>
    </ConfigProvider>,
  </Router>
)

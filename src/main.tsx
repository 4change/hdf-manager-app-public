import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.compact.css'   // 紧凑主题
import zhCN from 'antd/es/locale/zh_CN';
import { HashRouter as Router } from 'react-router-dom';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>,
  </Router>
)

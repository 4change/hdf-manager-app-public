import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import logo from '../assets/logo.jpeg'

const { Header, Sider, Content } = Layout;

const MyLayout = ({children}: any) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout
            style={{ width: "100vw", height: "100vh" }  /** style 属性用于撑开整个页面，可去掉该属性再对比查看页面 */}
            id='components-layout-demo-custom-trigger'
        >
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    {/* <img src={logo} alt='好大夫' /> */}
                </div>
                <Menu
                    theme="light"       /** 设置左侧菜单栏主题为 light，也可设置为 dark */
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default MyLayout;
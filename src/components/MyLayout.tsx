import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DashboardOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg'

const { Header, Sider, Content } = Layout;

const MyLayout = ({ children }: any) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    return (
        <Layout style={{ width: '100vw', height: '100vh' }} id='components-layout-demo-custom-trigger'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" >
                    <img src={logo} alt='好大夫' />
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={({ key }) => {
                        // alert(key)
                        navigate(key)
                    }}
                    items={[
                        {
                            key: '/admin/dashboard',
                            icon: <DashboardOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
                            label: '看板',
                        },
                        {
                            key: '/admin/medicine',
                            icon: <VideoCameraOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
                            label: '药品管理',
                            children: [
                                {
                                    label: '药品分类',
                                    key: '/admin/medicine/categories'
                                },
                                {
                                    label: '药品信息',
                                    key: '/admin/medicine/list'
                                }
                            ]
                        },
                        {
                            key: '/admin/articles',
                            icon: <UploadOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
                            label: '文章管理',
                            children: [
                                {
                                    label: '文章分类',
                                    key: '/admin/articles/categories'
                                },
                                {
                                    label: '文章信息',
                                    key: '/admin/articles/list'
                                }
                            ]
                        },
                        {
                            key: '/admin/users',
                            icon: <UserOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
                            label: '会员信息',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {
                        React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })
                    }
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
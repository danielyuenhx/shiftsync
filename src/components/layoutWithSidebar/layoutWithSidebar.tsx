import { ReactNode, useState } from 'react';
import {
  UserOutlined,
  CalendarOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import logoSingle from '../../assets/logo-single.png';
import { Header } from 'antd/es/layout/layout';

interface LayoutProps {
  children: ReactNode;
}

const { Sider, Content } = Layout;

const LayoutWithSidebar = ({ children }: LayoutProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        collapsible
        width={250}
        theme='dark'
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
         {/* className='tw-px-12 tw-pt-4 tw-pb-4' */}
        <div className='tw-h-24'>
          <img src={collapsed ? logoSingle : logo} className={`tw-px-5 tw-py-8 ${collapsed ? "tw-max-w-[80px]" : ""}`} />
        </div>
        <Menu
          mode='inline'
          defaultSelectedKeys={['1']}
          theme='dark'
          style={{ padding: '0.5em' }}
        >
          <Menu.Item key='1' icon={<CalendarOutlined />}>
            <Link to='/'>Schedule</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<UserOutlined />}>
            <Link to='/employees'>Employee</Link>
          </Menu.Item>
          <Menu.Item key='3' icon={<SettingOutlined />}>
            <Link to='/settings'>Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ height: '100%', minHeight: '100vh' }}>
        {/* <Header style={{ height: '4.5rem', background: colorBgContainer }}>
          <Button
            icon={<UserOutlined className="tw-text-black" style={{fontSize: "1em"}} />}
            style={{
              fontSize: "1.5rem",
              float: "right",
              width: "4.5rem",
              height: "100%",
            }}
          />
          </Header> */}
        <Content
          style={{
            margin: '24px 16px',
            padding: '12px',
            minHeight: '90%',
            // backgroundColor: "white",
            borderRadius: '4px',
            width: '97%',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWithSidebar;

import { ReactNode, useEffect, useState } from "react";
import {
  UserOutlined,
  CalendarOutlined,
  SettingOutlined,
  UpSquareOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Row, Typography, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import logoSingle from "../assets/logo-single.png";

interface LayoutProps {
  children: ReactNode;
}

const { Sider, Content } = Layout;

const LayoutWithSidebar = ({ children }: LayoutProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();

  const getSelectedKey = () => {
    switch (location.pathname) {
      case "/employees":
        return "2";
      case "/shifts":
        return "3";
      case "/settings":
        return "4";
      default:
        return "1";
    }
  };

  

  return (
    <Layout>
      <Sider
        collapsible
        width={250}
        theme="dark"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Row className="tw-h-24">
          <img
            src={collapsed ? logoSingle : logo}
            className={`tw-px-5 tw-py-8 ${collapsed ? "tw-max-w-[80px]" : ""}`}
          />
        </Row>
        <Menu
          mode="inline"
          defaultSelectedKeys={[getSelectedKey()]}
          theme="dark"
          className="tw-p-4 tw-text-[1rem]"
        >
          <Menu.Item key="1" icon={<CalendarOutlined />}>
            <Link to="/">Schedule</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/employees">Employee</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UpSquareOutlined />}>
            <Link to="/shifts">Shifts</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            <Link to="/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="tw-h-full tw-min-h-[100vh]">
        <Content className="tw-my-6 tw-mx-6 tw-p-3 tw-min-h-[90%] tw-rounded-4 tw-w-[97%]">
          <Typography.Title level={2} className="!tw-font-[700] tw-pb-2">
            {location.pathname === "/"
              ? "Schedule"
              : location.pathname.charAt(1).toUpperCase() +
                location.pathname.slice(2)}
          </Typography.Title>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWithSidebar;

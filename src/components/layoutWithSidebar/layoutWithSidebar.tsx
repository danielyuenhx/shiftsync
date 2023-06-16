import { ReactNode } from "react";
import {
  UserOutlined,
  CalendarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

interface LayoutProps {
  children: ReactNode;
}

const { Sider, Content } = Layout;

const LayoutWithSidebar = ({ children }: LayoutProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        style={{ background: colorBgContainer }}
      >
        <div />
        <img src={logo} className="tw-px-6 tw-py-8" />
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<CalendarOutlined />}>
            <Link to="/">Schedule</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/employees">Employee</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            <Link to="/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ height: "100%", minHeight: "100vh" }}>
        <Content
          style={{
            margin: "24px 16px",
            padding: "12px",
            minHeight: "90%",
            // backgroundColor: "white",
            borderRadius: "4px",
            width: "97%",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWithSidebar;

import React, { useState } from "react";
const { Header, Sider, Content } = Layout;
import { Layout, Menu, theme } from "antd";
import { Button } from "../../components/fields";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  UserOutlined,
  UploadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";


const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  console.log(location);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname.replace("/", "")]}
          defaultOpenKeys={[location.pathname.split("/")[1]]}
          onClick={(item) => navigate(`/${item.key}`)}
          items={[
            {
              key: "",
              icon: <UserOutlined />,
              label: "Get All News",
            },
            {
              key: "about",
              icon: <VideoCameraOutlined />,
              label: "Category News",
            },
            {
              key: "section",
              icon: <UploadOutlined />,
              label: "Get One News",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              width: 64,
              height: 64,
              fontSize: "16px",
            }}
          />
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            margin: "24px 16px",
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

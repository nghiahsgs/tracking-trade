import React, { PropsWithChildren } from "react";
import { Layout, Menu, theme } from "antd";
import { EMenu, items } from "./Menu";

const { Header, Content, Footer, Sider } = Layout;

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[EMenu.WAITING_ORDER]}
          items={items}
        />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: "calc(100vh - 200px)",
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Bot trade ©{new Date().getFullYear()} Created by Nate&Andie
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

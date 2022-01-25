import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
// import { Menu } from 'antd';
// import { PieChartOutlined } from '@ant-design/icons';
import Router from "../router/index";
import { Layout, Breadcrumb } from "antd";
import menuList from '../router/menu';
import WebMenu from "./menu";
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

export default class WebLayout extends Component {
  // 定义变量
  state = {
    collapsed: false,
  };

  onCollapse = (collapse) => {
    console.log(collapse);
    this.setState({ collapse });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="/menu1" icon={<PieChartOutlined />}>
                <Link to="/menu1">Option 1</Link>
              </Menu.Item>
              <Menu.Item key="/menu2" icon={<PieChartOutlined />}>
                <Link to="/menu2">Option 2</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<PieChartOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<PieChartOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<PieChartOutlined />}>
                Files
              </Menu.Item>
            </Menu> */}
            <WebMenu menus={menuList} mode="inline" defaultSelectedKeys={['/']} theme="dark"/>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <Router />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

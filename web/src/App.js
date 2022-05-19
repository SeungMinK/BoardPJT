import "./App.css";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/sign/Login";
import Home from "./pages/Home";
import Border from "./pages/border/Border";

import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
const { Header, Content, Sider, Footer } = Layout;

function App() {
    const items1 = ["1", "2", "3"].map((key) => ({
        key,
        label: `nav ${key}`,
    }));
    const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,

            label: `subnav ${key}`,
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} items={items1} />
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background-Sider">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["sub1"]}
                        style={{
                            height: "100%",
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>
                <Layout style={{ paddingTop: "1vh", paddingLeft: "1vh", paddingRight: "1vh" }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Routes>
                            <Route exact path="/" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/border" element={<Border />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
            <Footer className="footer">
                <center>
                    <span>CopyRight</span>
                </center>
            </Footer>
        </Layout>
    );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/sign/Login";
import Home from "./pages/Home";
import Border from "./pages/border/Border";

import { Layout, Menu, Breadcrumb } from "antd";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const { Header, Content, Sider, Footer } = Layout;

function App() {
    const navigate = useNavigate();
    const menuText = ["Home", "게시판"];
    const menuLink = ["/home", "/border"];
    const [lastView, setLastView] = useState(menuLink[0]);

    //SideBar Item 선언
    const sideBarItems = menuText.map((data, index) => {
        return {
            key: `${menuLink[index]}`,
            label: `${data}`,
        };
    });

    return (
        <Layout className="root-layout">
            <Header className="header-layout">
                <div className="logo" />
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background-Sider">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={lastView}
                        defaultOpenKeys={lastView}
                        style={{
                            height: "2560px",
                            borderRight: 0,
                        }}
                        items={sideBarItems}
                        onClick={(e) => {
                            setLastView(e.key);
                            navigate(e.key);
                            console.log(lastView);
                        }}
                    />
                </Sider>
                <Layout style={{ paddingTop: "1%", paddingLeft: "1%", paddingRight: "1%" }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: 0,
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
            <Footer className="footer-layout">
                <center>
                    <span>CopyRight</span>
                </center>
            </Footer>
        </Layout>
    );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/sign/Login";
import Home from "./pages/Home";
import Board from "./pages/board/board";

import { Layout, Menu, Breadcrumb } from "antd";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const { Header, Content, Sider, Footer } = Layout;

function App() {
  const navigate = useNavigate();
  const menuText = ["Home", "게시판"];
  const menuLink = ["/home", "/board"];
  const [lastView, setLastView] = useState(menuLink[0]);
  const webBrowserWidth = 1000;
  const clientMode = () => {
    //접속한 브라우저 크기로 Mode 체크
    let mode = window.innerWidth < webBrowserWidth ? "M" : "W";
    return mode;
  };

  const [userMode, setUserMode] = useState(clientMode());

  //SideBar Item 선언
  const sideBarItems = menuText.map((data, index) => {
    return {
      key: `${menuLink[index]}`,
      label: `${data}`,
    };
  });

  return (
    <Layout className="root-layout">
      {userMode === "M" ? (
        <>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={lastView}
            items={sideBarItems}
            onClick={(e) => {
              setLastView(e.key);
              navigate(e.key);
              console.log(lastView);
            }}
          />
        </>
      ) : (
        <Header className="header-layout">
          {" "}
          <UserOutlined
            style={{
              color: "#333",
              fontSize: "3vh",
              marginTop: "1vh",
              marginRight: "1vw",
              float: "right",
            }}
          />{" "}
        </Header>
      )}

      <Layout>
        {userMode === "W" ? (
          <>
            <Sider width={"12vw"} className="site-layout-background-Sider">
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
          </>
        ) : null}

        <Layout style={{ paddingTop: "1%", paddingLeft: "2%", paddingRight: "2%" }}>
          <Content
            className="site-layout-background"
            style={{
              margin: 0,
            }}
          >
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/board" element={<Board />} />
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

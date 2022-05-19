import React from "react";
import "../../css/border.css";
import { List, Typography, Divider } from "antd";
function Border() {
    const data = [
        {
            title: "Racing1 car sprays burning fuel into crowd.",
            createid: "SeungMin",
            createtm: "2022.05.19",
            count: "54",
        },
        {
            title: "Racing2 car sprays burning fuel into crowd.",
            createid: "SeungMin",
            createtm: "2022.05.19",
            count: "54",
        },
        {
            title: "Racing3 car sprays burning fuel into crowd.",
            createid: "SeungMin",
            createtm: "2022.05.19",
            count: "54",
        },
        {
            title: "Racing4 car sprays burning fuel into crowd.",
            createid: "SeungMin",
            createtm: "2022.05.19",
            count: "54",
        },
        {
            title: "Racing5 car sprays burning fuel into crowd.",
            createid: "SeungMin",
            createtm: "2022.05.19",
            count: "54",
        },
        {
            title: "Racing6 car sprays burning fuel into crowd.",
            createid: "SeungMin",
            createtm: "2022.05.19",
            count: "54",
        },
        {
            title: "Racing7 car sprays burning fuel into crowd.",
            createid: "SeungMin",
            createtm: "2022.05.19",
            count: "54",
        },
        {
            title: "Racing8 car sprays burning fuel into crowd.",
            createid: "SeungMin",
            createtm: "2022.05.19",
            count: "54",
        },
    ];
    return (
        <>
            <div className="border-wrap">
                <header className="border-wrap-top">
                    <div className="border-wrap-top-title">
                        <span className="border-content-top-title">[아이콘]</span>
                        <span className="border-content-top-title"> 게시판</span>
                    </div>
                    <div className="border-wrap-top-search">
                        <span className="border-content-top-title">[아이콘]</span>
                        <span className="border-content-top-title"> 조회</span>
                    </div>
                </header>
                <section className="border-wrap-middle">
                    <table className="border-wrap-middle-table">
                        <thead style={{ border: "1px solid #999" }}>
                            <th>순번</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </thead>
                        <tbody>
                            {data.map((data, index) => {
                                return (
                                    <>
                                        <tr style={{ border: "1px solid #222" }}>
                                            <td>{index + 1}</td>
                                            <td>{data.title}</td>
                                            <td>{data.createid}</td>
                                            <td>{data.createtm}</td>
                                            <td>{data.count}</td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                        <tfoot style={{ height: "10%" }}>
                            <div>
                                <td colSpan={5}>{"pageNation 자리 입니다."}</td>
                            </div>
                        </tfoot>
                    </table>
                </section>
                <footer className="border-wrap-bottom"></footer>
            </div>
        </>
    );
}

export default Border;

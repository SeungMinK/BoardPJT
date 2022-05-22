import React, { useState } from "react";
import "../../css/border.css";

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
    const [searchKeyword, setSearchKeyword] = useState("");
    return (
        <>
            <div className="border-wrap">
                <header className="border-wrap-top">
                    <div className="border-wrap-top-search">
                        <input
                            className="border-top-search-input"
                            type="text"
                            maxLength="25"
                            placeholder="제목 또는 내용을 검색해주세요."
                            onChange={(e) => {
                                setSearchKeyword(e.target.value);
                            }}
                        />
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
                            {data
                                .filter((data) => data.title.includes(searchKeyword))
                                .map((data, index) => {
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

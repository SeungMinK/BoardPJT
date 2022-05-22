import React, { useEffect, useState } from "react";
import "../../css/board.css";
import axios from "axios";

/*게시판 조회 화면 */
function BoardMain() {
  const API_HOST = process.env.REACT_APP_API_HOST;
  const [boardData, setBoardData] = useState();

  const [searchKeyword, setSearchKeyword] = useState("");
  const onContentClickHandelr = (BOARD_ID) => {
    console.log(BOARD_ID);
  };

  useEffect(() => {
    axios
      .post(`${API_HOST}/api/board/inquiry`, [])
      .then((response) => {
        /*데이터 저장 */
        setBoardData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="board-wrap">
        <header className="board-wrap-top">
          <div className="board-wrap-top-search">
            <input
              className="board-top-search-input"
              type="text"
              maxLength="25"
              placeholder="제목 또는 내용을 검색해주세요."
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
            />
          </div>
        </header>
        <section className="board-wrap-middle">
          <table className="board-wrap-middle-table">
            <thead style={{ border: "1px solid #999" }}>
              <th>순번</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </thead>
            <tbody>
              {boardData
                ? boardData
                    .filter((data) => data.TITLE.includes(searchKeyword))
                    .map((data, index) => {
                      return (
                        <>
                          <tr
                            style={{ border: "1px solid #222" }}
                            onClick={() => {
                              onContentClickHandelr(data.BOARD_ID);
                            }}
                          >
                            <td>{index + 1}</td>
                            <td>{data.TITLE}</td>
                            <td>{data.REG_USER_ID}</td>
                            <td>{data.REG_DT}</td>
                            <td>{data.BOARD_COUNT}</td>
                          </tr>
                        </>
                      );
                    })
                : null}
            </tbody>
            <tfoot style={{ height: "10%" }}>
              <div>
                <td colSpan={5}>{"pageNation 자리 입니다."}</td>
              </div>
            </tfoot>
          </table>
        </section>
        <footer className="board-wrap-bottom"></footer>
      </div>
    </>
  );
}

export default BoardMain;

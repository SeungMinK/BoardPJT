import React from "react";
import "../../css/border.css";
function Border() {
    return (
        <>
            <div className="border-wrap">
                <header className="border-wrap-top">
                    <span>상단 영역</span>
                </header>
                <section className="border-wrap-middle">
                    <span>중단 영역</span>
                </section>
                <footer className="border-wrap-bottom">
                    <span>하단 영역</span>
                </footer>
            </div>
        </>
    );
}

export default Border;

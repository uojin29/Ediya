import React from 'react';
import Weather from "./Weather";

function Header() {
    return (
        <div className="header" style={{ position: "relative" }}>
            <img className="logoImage" alt="logo" src="img/top_logo.gif" />
            <p>원두 메뉴 유통제품 이디야멤버스 상품권.제휴카드 브랜드 소식 고객지원~</p>
            <div style={{ position: "absolute", top: 0, right: 50 }}>
                <Weather />
            </div>
        </div>
    )
}

export default Header;

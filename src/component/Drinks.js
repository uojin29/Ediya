import React, {useEffect, useState} from 'react';
import '../styles/Detail.css';
import CardSection from "./CardSection";
import Button from "@mui/material/Button";
import Add from './Add';
import axios from "axios";

function Drinks() {
    const [cardData, setCardData] = React.useState([]);

    const loadData = async () => {
        const response = await axios.post(`http://localhost:8080/menu/list`);
        console.log(response);
        setCardData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    // const cardData = [
    //     {
    //         image: 'https://www.ediya.com/files/menu/IMG_1671587873712.png',
    //         title: '(L) ICED 넛츠 크림 라떼',
    //         giftLink: 'https://brand.naver.com/ediyagift/products/7801014621',
    //         detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
    //     },
    //     {
    //         image: 'https://www.ediya.com/files/menu/IMG_1647320234464.png',
    //         title: '아포가토 오리지널',
    //         giftLink: 'https://brand.naver.com/ediyagift/products/7814138817',
    //         detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
    //     },
    //     {
    //         image: 'https://www.ediya.com/files/menu/IMG_1647320805422.png',
    //         title: 'ICED 콜드브루 아메리카노',
    //         giftLink: 'https://brand.naver.com/ediyagift/products/7791285331',
    //         detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
    //     },
    //     {
    //         image: 'https://www.ediya.com/files/menu/IMG_1647320820317.png',
    //         title: '(EX) ICED 콜드브루 아메리카노',
    //         giftLink: 'https://brand.naver.com/ediyagift/products/7791284137',
    //         detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
    //     },
    //     {
    //         image: 'https://www.ediya.com/files/menu/IMG_1671587873712.png',
    //         title: '(L) ICED 넛츠 크림 라떼',
    //         giftLink: 'https://brand.naver.com/ediyagift/products/7801014621',
    //         detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
    //     },
    //     {
    //         image: 'https://www.ediya.com/files/menu/IMG_1647320234464.png',
    //         title: '아포가토 오리지널',
    //         giftLink: 'https://brand.naver.com/ediyagift/products/7814138817',
    //         detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
    //     },
    //     {
    //         image: 'https://www.ediya.com/files/menu/IMG_1647320805422.png',
    //         title: 'ICED 콜드브루 아메리카노',
    //         giftLink: 'https://brand.naver.com/ediyagift/products/7791285331',
    //         detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
    //     },
    //     {
    //         image: 'https://www.ediya.com/files/menu/IMG_1647320820317.png',
    //         title: '(EX) ICED 콜드브루 아메리카노',
    //         giftLink: 'https://brand.naver.com/ediyagift/products/7791284137',
    //         detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
    //     },
    //     {
    //         image: 'https://www.ediya.com/files/menu/IMG_1647320805422.png',
    //         title: 'ICED 콜드브루 아메리카노',
    //         giftLink: 'https://brand.naver.com/ediyagift/products/7791285331',
    //         detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
    //     }
    //sss
    // ];
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    };
    const [showCount, setShowCount] = useState(4);
    const handlePlusClick = () => {
        setShowCount((prev) =>  prev + 4);
    };
    return (
        <div style={{position: 'relative'}}>
            <CardSection cardData={cardData.slice(0, showCount)} visibleCards={cardData} />
            <div className="center-button">
                <Button variant="outlined" onClick={handlePlusClick} sx={{display: 'inline-block', width: '188px', height: '42px', lineHeight: '42px', textAlign: 'center',
                    border: '1px solid #555', borderRadius: '22px', color: '#000', fontSize: '16px'}}>
                    더보기 +
                </Button>
                <Button variant="outlined" onClick={showModal} sx={{display: 'inline-block', width: '188px', height: '42px', lineHeight: '42px', textAlign: 'center',
                    border: '1px solid #555', borderRadius: '22px', color: '#000', fontSize: '16px'}}>
                    추가
                </Button>
            </div>
            {modalOpen && <div className={"modal"}> <Add setModalOpen={setModalOpen} cardData={cardData}/></div>}

        </div>
    );
}
export default Drinks;
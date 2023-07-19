import React, {useState} from "react";
import CardSection from "./CardSection";
import Button from "@mui/material/Button";

function Foods() {
    const cardData = [
        {
            image: 'https://www.ediya.com/files/menu/IMG_1688351702650.png',
            title: '약과 크림치즈 쿠키',
            giftLink: 'https://brand.naver.com/ediyagift/products/8835075212',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1688351853635.png',
            title: '약과 버터바',
            giftLink: 'https://brand.naver.com/ediyagift/products/8835074845',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1688352074797.png',
            title: '버터 팬케이크',
            giftLink: 'https://brand.naver.com/ediyagift/products/8835074684',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1683870229182.png',
            title: '라이스치즈볼 핫 디트로이트 딥소스',
            giftLink: 'https://brand.naver.com/ediyagift/products/8315624047',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1688351702650.png',
            title: '약과 크림치즈 쿠키',
            giftLink: 'https://brand.naver.com/ediyagift/products/8835075212',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1688351853635.png',
            title: '약과 버터바',
            giftLink: 'https://brand.naver.com/ediyagift/products/8835074845',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1688352074797.png',
            title: '버터 팬케이크',
            giftLink: 'https://brand.naver.com/ediyagift/products/8835074684',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1683870229182.png',
            title: '라이스치즈볼 핫 디트로이트 딥소스',
            giftLink: 'https://brand.naver.com/ediyagift/products/8315624047',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
    ];
    const [showCount, setShowCount] = useState(4);

    const handlePlusClick = () => {
        setShowCount((prev) =>  prev + 4); // Set 'showMore' state to true when the button is clicked
    };
    return (
        <div>
            <CardSection cardData={cardData.slice(0, showCount)} visibleCards={cardData} />
            <div className="center-button">
                <Button variant="outlined" onClick={handlePlusClick} sx={{display: 'inline-block', width: '188px', height: '42px', lineHeight: '42px', textAlign: 'center',
                    border: '1px solid #555', borderRadius: '22px', color: '#000', fontSize: '16px'}}>
                    더보기 +
                </Button>
                <Button variant="outlined" sx={{display: 'inline-block', width: '188px', height: '42px', lineHeight: '42px', textAlign: 'center',
                    border: '1px solid #555', borderRadius: '22px', color: '#000', fontSize: '16px'}}>
                    추가
                </Button>
            </div>
        </div>
    );
}
export default Foods;
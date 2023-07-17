import React, {useState} from "react";
import CardSection from "./CardSection";

function Foods() {
    const cardData = [
        {
            image: 'https://www.ediya.com/files/menu/IMG_1688351702650.png',
            title: '약과 크림치즈 쿠키',
            giftLink: 'https://brand.naver.com/ediyagift/products/8835075212',
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1688351853635.png',
            title: '약과 버터바',
            giftLink: 'https://brand.naver.com/ediyagift/products/8835074845',
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1688352074797.png',
            title: '버터 팬케이크',
            giftLink: 'https://brand.naver.com/ediyagift/products/8835074684',
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1683870229182.png',
            title: '라이스치즈볼 핫 디트로이트 딥소스',
            giftLink: 'https://brand.naver.com/ediyagift/products/8315624047',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCards = cardData.slice(currentIndex, currentIndex + 3);

    return (
        <CardSection setCurrentIndex={setCurrentIndex} cardData={cardData} visibleCards={visibleCards} />
    );
}
export default Foods;
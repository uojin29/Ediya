import React, {useState} from "react";
import CardSection from "./CardSection";

function MDs() {
    const cardData = [
        {
            image: 'https://www.ediya.com/files/menu/IMG_1675180634704.png',
            title: '점보 그립 텀블러(미드나잇블루)',
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1675180662299.png',
            title: '점보 그립 텀블러(쿨그레이)',
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1675180735180.png',
            title: '점보 컴포트 텀블러(오로라블루)',
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1666053619328.png',
            title: '커피 드리퍼',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCards = cardData.slice(currentIndex, currentIndex + 3);

    return (
        <CardSection setCurrentIndex={setCurrentIndex} cardData={cardData} visibleCards={visibleCards} />
    );
}
export default MDs;
import React, {useState} from "react";
import CardSection from "./CardSection";
import Button from "@mui/material/Button";

function MDs() {
    const cardData = [
        {
            image: 'https://www.ediya.com/files/menu/IMG_1675180634704.png',
            title: '점보 그립 텀블러(미드나잇블루)',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1675180662299.png',
            title: '점보 그립 텀블러(쿨그레이)',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1675180735180.png',
            title: '점보 컴포트 텀블러(오로라블루)',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1666053619328.png',
            title: '커피 드리퍼',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1675180634704.png',
            title: '점보 그립 텀블러(미드나잇블루)',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1675180662299.png',
            title: '점보 그립 텀블러(쿨그레이)',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1675180735180.png',
            title: '점보 컴포트 텀블러(오로라블루)',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1666053619328.png',
            title: '커피 드리퍼',
            detail: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한 잔의 라떼'
        },
    ];
    const [showCount, setShowCount] = useState(4);
    const handlePlusClick = () => {
        setShowCount((prev) =>  prev + 4);
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
export default MDs;
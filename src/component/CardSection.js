import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

function CardSection({ setCurrentIndex, cardData, visibleCards}){
    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cardData.length - 3 : prevIndex - 1
        );
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cardData.length - 3 ? 0 : prevIndex + 1
        );
    };
    const handleCardClick = (index) => {
        // 제품의 상세 페이지로 이동하는 로직을 구현하세요
        // 예시: window.location.href = `/product/${index}`;
        console.log(`Go to product page: ${index}`);
    };
    return (
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="contained" onClick={handleLeftClick} sx={{background: 'none', boxShadow: 'none', maxHeight: '50px', '&:hover': { background: 'none', boxShadow: 'none' }}}>
                    <img src="https://www.ediya.com/images/common/new_btn_arrow01.gif" alt="left"/>
                </Button>
                {visibleCards.map((card, index) => (
                    <Card key={index} sx={{ maxWidth: 393, minWidth: 325, boxShadow: 'none', background: 'none', marginRight: '1rem'}} onClick={() => handleCardClick(index)}>
                        <CardMedia sx={{ height: 0, paddingTop: '100%', width: '100%'}} image={card.image} />
                        <CardContent sx={{ textAlign: 'center', color: '#464646' }} className={'menu_tt'}>
                            <Typography gutterBottom variant="p" component="div" className={'spans'}>
                                {card.title}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                <Button variant="contained" onClick={handleRightClick} sx={{background: 'none', boxShadow: 'none', maxHeight: '50px', '&:hover': { background: 'none', boxShadow: 'none'}}}>
                    <img src="https://www.ediya.com/images/common/new_btn_arrow02.gif" alt="right"/>
                </Button>
            </div>
            <br/>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {cardData.map((card, index) => (
                    <Card key={index} sx={{ maxWidth: 393, minWidth: 275, boxShadow: 'none', background: '#f5f5f5', margin: 0.5 }} onClick={() => handleCardClick(index)}>
                        <CardMedia sx={{ height: 0, paddingTop: '100%', width: '100%', ':hover': { transform: 'scale(1.05)' }}} image={card.image} />
                        <CardContent sx={{ textAlign: 'center', color: '#464646' }} className={'menu_tt'}>
                            <Typography gutterBottom variant="p" component="div" className={'spans'}>
                                {card.title}
                            </Typography>
                            {card.giftLink && (
                                <a href={card.giftLink} target="_blank" className="gift_btn" style={{ textDecoration: 'none' }}>
                                    선물하기
                                </a>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default CardSection;
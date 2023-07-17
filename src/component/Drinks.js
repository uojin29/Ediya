// import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/Detail.css';

function Drinks() {
    const cardData = [
        {
            image: 'https://www.ediya.com/files/menu/IMG_1671587873712.png',
            title: '(L) ICED 넛츠 크림 라떼',
            giftLink: 'https://brand.naver.com/ediyagift/products/7801014621',
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1647320234464.png',
            title: '아포가토 오리지널',
            giftLink: 'https://brand.naver.com/ediyagift/products/7814138817',
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1647320805422.png',
            title: 'ICED 콜드브루 아메리카노',
            giftLink: 'https://brand.naver.com/ediyagift/products/7791285331',
        },
        {
            image: 'https://www.ediya.com/files/menu/IMG_1647320820317.png',
            title: '(EX) ICED 콜드브루 아메리카노',
            giftLink: 'https://brand.naver.com/ediyagift/products/7791284137',
        },
    ];
    return (
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="contained" sx={{background: 'none', boxShadow: 'none', maxHeight: '50px', '&:hover': { background: 'none', boxShadow: 'none' }}}>
                    <img src="https://www.ediya.com/images/common/new_btn_arrow01.gif" alt="left"/>
                </Button>
                {cardData.slice(0,3).map((card, index) => (
                    <Card key={index} sx={{ maxWidth: 393, minWidth: 325, boxShadow: 'none', background: 'none', marginRight: '1rem'}}>
                        <CardMedia sx={{ height: 0, paddingTop: '100%', width: '100%'}} image={card.image} />
                        <CardContent sx={{ textAlign: 'center', color: '#464646' }} className={'menu_tt'}>
                            <Typography gutterBottom variant="p" component="div" className={'spans'}>
                                {card.title}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                <Button variant="contained" sx={{background: 'none', boxShadow: 'none', maxHeight: '50px', '&:hover': { background: 'none', boxShadow: 'none'}}}>
                    <img src="https://www.ediya.com/images/common/new_btn_arrow02.gif" alt="right"/>
                </Button>
            </div>
            <br/>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {cardData.map((card, index) => (
                    <Card key={index} sx={{ maxWidth: 393, minWidth: 275, boxShadow: 'none', background: '#f5f5f5', margin: 0.5 }}>
                        <CardMedia sx={{ height: 0, paddingTop: '100%', width: '100%', ':hover': { transform: 'scale(1.05)' }}} image={card.image} />
                        <CardContent sx={{ textAlign: 'center', color: '#464646' }} className={'menu_tt'}>
                            <Typography gutterBottom variant="p" component="div" className={'spans'}>
                                {card.title}
                            </Typography>
                            <a href={card.giftLink} target="_blank" className="gift_btn" style={{ textDecoration: 'none' }}>
                                선물하기
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default Drinks;
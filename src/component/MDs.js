// import React, { useState } from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    return (
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="contained" sx={{background: 'none', boxShadow: 'none', maxHeight: '50px', '&:hover': { background: 'none', boxShadow: 'none' }}}>
                    <img src="https://www.ediya.com/images/common/new_btn_arrow01.gif" alt="left"/>
                </Button>
                <Card sx={{ maxWidth: 393, marginRight: '1rem', minWidth: 325, boxShadow: 'none'}}>
                    <CardMedia
                        sx={{ height: 0, paddingTop: '100%', width: '100%' }}
                        image="https://www.ediya.com/files/menu/IMG_1675180634704.png"
                    />
                    <CardContent sx={{textAlign: 'center', color: '#464646'}}>
                        <Typography gutterBottom variant="p" component="div">
                            점보 그립 텀블러(미드나잇블루)
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 393, minWidth: 325, boxShadow: 'none'}}>
                    <CardMedia
                        sx={{ height: 0, paddingTop: '100%', width: '100%' }}
                        image="https://www.ediya.com/files/menu/IMG_1675180662299.png"
                    />
                    <CardContent sx={{textAlign: 'center', color: '#464646'}}>
                        <Typography gutterBottom variant="p" component="div">
                            점보 그립 텀블러(쿨그레이)
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 393, minWidth: 325, boxShadow: 'none'}}>
                    <CardMedia
                        sx={{ height: 0, paddingTop: '100%', width: '100%' }}
                        image="https://www.ediya.com/files/menu/IMG_1675180735180.png"
                    />
                    <CardContent sx={{textAlign: 'center', color: '#464646'}}>
                        <Typography gutterBottom variant="p" component="div">
                            점보 컴포트 텀블러(오로라블루)
                        </Typography>
                    </CardContent>
                </Card>
                <Button variant="contained" sx={{background: 'none', boxShadow: 'none', maxHeight: '50px', '&:hover': { background: 'none', boxShadow: 'none'}}}>
                    <img src="https://www.ediya.com/images/common/new_btn_arrow02.gif" alt="right"/>
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {cardData.map((card, index) => (
                    <Card key={index} sx={{ maxWidth: 393, minWidth: 275, boxShadow: 'none', background: '#f5f5f5', margin: 0.5 }}>
                        <CardMedia sx={{ height: 0, paddingTop: '100%', width: '100%', ':hover': { transform: 'scale(1.05)' }}} image={card.image} />
                        <CardContent sx={{ textAlign: 'center', color: '#464646' }} className={'menu_tt'}>
                            <Typography gutterBottom variant="p" component="div" className={'spans'}>
                                {card.title}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default MDs;
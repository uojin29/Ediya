// import React, { useState } from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Menu() {
    return (
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center'}}>
            <Button variant="contained">
                <img src='/img/new_btn_arrow01.gif' alt="my" width={"20px"} />
            </Button>
            <Card sx={{ maxWidth: 393, marginRight: '1rem', minWidth: 325}}>
                <CardMedia
                    sx={{ height: 0, paddingTop: '100%', width: '100%' }}
                    image="/img/IMG_1647319867876.png"
                />
                <CardContent sx={{textAlign: 'center', color: '#464646'}}>
                    <Typography gutterBottom variant="p" component="div">
                        HOT 토피넛 라떼
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 393, minWidth: 325}}>
                <CardMedia
                    sx={{ height: 0, paddingTop: '100%', width: '100%' }}
                    image="/img/IMG_1647319854660.png"
                />
                <CardContent sx={{textAlign: 'center', color: '#464646'}}>
                    <Typography gutterBottom variant="p" component="div">
                        ICED 토피넛 라떼
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 393, minWidth: 325}}>
                <CardMedia
                    sx={{ height: 0, paddingTop: '100%', width: '100%' }}
                    image="/img/IMG_1647322170791.png"
                />
                <CardContent sx={{textAlign: 'center', color: '#464646'}}>
                    <Typography gutterBottom variant="p" component="div">
                        꿀복숭아 플랫치노
                    </Typography>
                </CardContent>
            </Card>
            <Button variant="contained">
                <img src='/img/new_btn_arrow02.gif' alt="my" width={"20px"} />
            </Button>
        </div>

        // <div className="bx-wrapper" style={{ maxWidth: '1179px' }}>
        //     <div className="bx-viewport" aria-live="polite" style={{ width: '100%', overflow: 'hidden', position: 'relative', height: '358px' }}>
        //         <ul className="pro_n bxSlider" style={{ width: '31215%', position: 'relative', transitionDuration: '0.5s', transform: 'translate3d(-9456px, 0px, 0px)' }}>
        //             <li style={{ float: 'left', listStyle: 'none', position: 'relative', width: '393px' }} aria-hidden="true">
        //                 <a href="#c" onClick={() => showSlideDetail('135')}>
        //                     <span className="new_icon"><img src="/img/best_icon.png" alt="new" /></span>
        //                     <img src="/img/IMG_1647319867876.png" alt="HOT 토피넛 라떼" />
        //                 </a>
        //                 <p><a href="#c" onClick={() => showSlideDetail('135')}>HOT 토피넛 라떼</a></p>
        //             </li>
        //             <li style={{ float: 'left', listStyle: 'none', position: 'relative', width: '393px' }} aria-hidden="true">
        //                 <a href="#c" onClick={() => showSlideDetail('136')}>
        //                     <span className="new_icon"><img src="/img/best_icon.png" alt="new" /></span>
        //                     <img src="img/IMG_1647319854660.png" alt="ICED 토피넛 라떼" />
        //                 </a>
        //                 <p><a href="#c" onClick={() => showSlideDetail('136')}>ICED 토피넛 라떼</a></p>
        //             </li>
        //             <li style={{ float: 'left', listStyle: 'none', position: 'relative', width: '393px' }} aria-hidden="true">
        //                 <a href="#c" onClick={() => showSlideDetail('250')}>
        //                     <span className="new_icon"><img src="//img/best_icon.png" alt="new" /></span>
        //                     <img src="/img/IMG_1647322170791.png" alt="꿀복숭아 플랫치노" />
        //                 </a>
        //                 <p><a href="#c" onClick={() => showSlideDetail('250')}>꿀복숭아 플랫치노</a></p>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    );
}
export default Menu;
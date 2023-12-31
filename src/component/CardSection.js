import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Edit from "./Edit";
import axios from "axios";

function CardSection({ cardData, visibleCards, setCardData }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? visibleCards.length - 3 : prevIndex - 1
        );
        console.log(visibleCards.length)
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === visibleCards.length - 3 ? 0 : prevIndex + 1
        );
    };

    const [clickedCards, setClickedCards] = useState([]);

    const handleCardClick = (index) => {
        if (clickedCards.includes(index)) {
            setClickedCards(clickedCards.filter((clickedIndex) => clickedIndex !== index));
        } else {
            setClickedCards([...clickedCards, index]);
        }
    };
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    };
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handleEditClick = (index) => {
        setSelectedCardIndex(index); // 선택한 카드의 인덱스를 저장
        showModal();
    };

    const baseUrl = `http://3.35.253.47:8080`;

    async function deleteMenu(index) {
        await axios.delete(
            baseUrl + `/menu/${cardData[index].id}`
        );
        console.log("index : " + cardData[index].id);
        window.location.reload("/menu");
        alert("선택한 메뉴를 삭제하셨습니다!");
    }
    return (
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="contained" onClick={handleLeftClick} sx={{ background: 'none', boxShadow: 'none', maxHeight: '50px', '&:hover': { background: 'none', boxShadow: 'none' } }}>
                    <img src="https://www.ediya.com/images/common/new_btn_arrow01.gif" alt="left" />
                </Button>
                {visibleCards.slice(currentIndex, currentIndex + 3).map((card, index) => (
                    <Card key={index} sx={{ maxWidth: 393, minWidth: 325, boxShadow: 'none', background: 'none', marginRight: '1rem'}} >
                        <CardMedia sx={{ height: 0, paddingTop: '100%', width: '100%' }} image={card.imgLink} />
                        <CardContent sx={{ textAlign: 'center', color: '#464646' }} className={'menu_tt'}>
                            <Typography gutterBottom variant="p" component="div" className={'spans'}>
                                {card.title}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                <Button variant="contained" onClick={handleRightClick} sx={{ background: 'none', boxShadow: 'none', maxHeight: '50px', '&:hover': { background: 'none', boxShadow: 'none' } }}>
                    <img src="https://www.ediya.com/images/common/new_btn_arrow02.gif" alt="right" />
                </Button>
            </div>
            <br />
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: 1200}}>
                {cardData.map((card, index) => (
                    <Card key={index} sx={{ maxWidth: 393, minWidth: 275, boxShadow: 'none', background: '#f5f5f5', margin: 0.5}} onClick={() => handleCardClick(index)}>
                        <CardContent sx={{ width: 230,textAlign: 'center', height: 355,  margin: 0.5, color: '#464646', display: clickedCards.includes(index) ? 'block' : 'none', opacity: clickedCards.includes(index) ? 1 : 0.5 }} className={'menu_tt'}>
                            <Typography gutterBottom variant="p" component="div" >
                                {card.name}
                                <hr />
                                {card.detail}
                            </Typography>
                            <Button onClick={() => handleEditClick(index)}>
                                수정하기
                            </Button>
                            <Button onClick={() => deleteMenu(index)}>
                                삭제하기
                            </Button>
                        </CardContent>
                        {modalOpen && (
                            <div className={"modal"}>
                                <Edit
                                    setModalOpen={setModalOpen}
                                    cardData={
                                        selectedCardIndex !== null ? cardData[selectedCardIndex] : null
                                    }

                                />
                            </div>
                        )}
                        <div style={{ textAlign: 'center', display: clickedCards.includes(index) ? 'none' : 'block'}}>
                            <CardMedia sx={{ height: 0, paddingTop: '100%', width: '100%', ':hover': { transform: 'scale(1.05)' } }} image={card.imgLink} />
                            <CardContent sx={{ textAlign: 'center', color: '#464646' }} className={'menu_tt'}>
                                <Typography gutterBottom variant="p" component="div">
                                    {card.name}
                                </Typography>
                                {card.giftLink && (
                                    <a href={card.giftLink} target="blank" className="gift_btn" style={{ textDecoration: 'none' }}>
                                        선물하기
                                    </a>
                                )}
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default CardSection;

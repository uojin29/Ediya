import React, {useEffect, useState} from 'react';
import '../styles/Detail.css';
import CardSection from "./CardSection";
import Button from "@mui/material/Button";
import Add from './Add';
import axios from "axios";

function Drinks() {
    const [cardData, setCardData] = React.useState([]);

    const loadData = async () => {
        const response = await axios.post(`http://3.35.253.47:8080/menu/list`);
        console.log(response);
        setCardData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

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
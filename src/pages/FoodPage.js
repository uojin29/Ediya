import React, { useState } from "react";
import '../styles/FoodPage.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Foods from "../component/Foods";

const CustomButton = styled(Button)(({ theme }) => ({
  color: '#84847c;',
  borderColor: 'white',
  '&:hover': {
    color: '#84847c;',
    borderColor: 'white',
    backgroundColor: 'white',
  },
}));

const buttons = [
  <CustomButton key="drink">음료</CustomButton>,
  <CustomButton key="food">푸드</CustomButton>,
  <CustomButton key="md">MD</CustomButton>,
];

function FoodPage() {
  const [selectedButton, setSelectedButton] = useState(1);

  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    if (index === 0) {
        navigate("/"); // Navigate to FoodPage when "Food" button is clicked
    }
    else if (index === 1) {
        navigate("/FoodPage"); // Navigate to FoodPage when "Food" button is clicked
    }
    else if (index === 2) {
        navigate("/MDPage"); // Navigate to FoodPage when "Food" button is clicked
    }
  };


  return (
    <div>
      <Header/>
      <div className="container">
        <img className="foodImage" alt="drink" src="img/bakery_visual.jpg" />
        <h1 className="food">푸드</h1>
        <p className="menu"> ALWAYS BESIDE YOU,
          <strong>EDIYA BAKERY</strong>
        </p>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
              position: 'absolute',
              top: '75%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            },
          }}
        >
          <ButtonGroup size="large" aria-label="large button group">
            {buttons.map((button, index) => (
              React.cloneElement(button, {
                key: index,
                sx: {
                  ...button.props.sx,
                  backgroundColor: selectedButton === index ? 'white' : undefined,
                },
                onClick: () => handleButtonClick(index),
              })
            ))}
          </ButtonGroup>
        </Box>
      </div>
        <div className="block_new">
            <div className="location">
                HOME  메뉴  음료
            </div>
            <div>
                <div className="con_align">
                    <h3 className="nunito">추천상품</h3>
                </div>
            </div>
        </div>
        <div>
            <Foods/>
        </div>
        <Footer/>
    </div>
  );
}

export default FoodPage;

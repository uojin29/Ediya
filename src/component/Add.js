import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import axios from 'axios';
import {useState} from "react";
const baseUrl = `http://localhost:8080`;

function Add({setModalOpen}) {
    const closeModal = () => {
        setModalOpen(false);
    };
    const [name, setName] = useState("");
    const [imgLink, setImgLink] = useState("https://www.ediya.com/files/menu/IMG_1671587873712.png");
    const [detail, setDetail] = useState("");
    const [giftLink, setGiftLink] = useState("");

    async function save(event) {
        await axios.post(
            baseUrl + `/menu/create`, {
                name: name,

                imgLink: imgLink,

                detail: detail,

                giftLink: giftLink
            }
        );
        alert("새로운 상품을 추가했습니다!");
        window.location.reload("/menu");
        setModalOpen(false);
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'flex-end',}}>
                <Button size={"small"} sx={{ color: "black", fontSize: "12px", padding: "4px", width: "10px"}} onClick={closeModal}>X</Button>
            </div>
            <form onSubmit={(event) => save(event)}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <input type="file" label="이미지 링크" name="imgLink" onChange={(event)=>setImgLink(event.target.value)}/>
                    <TextField id="standard-basic" name="name" label="상품명" variant="standard" onChange={(event)=>setName(event.target.value)}/>
                    <TextField id="standard-basic" name="detail" label="상품 설명" variant="standard" onChange={(event)=>setDetail(event.target.value)}/>
                    <TextField id="standard-basic" name="giftLink" label="선물하기 링크" variant="standard" onChange={(event)=>setGiftLink((event.target.value))}/>
                </Box>
            </form>
            <div style={{display: 'flex', justifyContent: 'flex-end',}}>
                <Button size={"small"} type={"submit"} sx={{ color: "black", padding: "4px", width: "10px"}} onClick={save}>저장하기</Button>
            </div>
        </div>
    );
}
export default Add;
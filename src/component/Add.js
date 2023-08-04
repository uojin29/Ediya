import Box from "@mui/material/Box";
import Textarea from '@mui/joy/Textarea';
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";

const baseUrl = `http://localhost:8080`;
const AWS = require('aws-sdk');
const REGION = "ap-northeast-2";
const S3_BUCKET = "ediyaimg";

function Add({ setModalOpen }) {
    const closeModal = () => {
        setModalOpen(false);
    };
    const [name, setName] = useState("");
    const [imgLink, setImgLink] = useState(
        "https://www.ediya.com/files/menu/IMG_1671587873712.png"
    );
    const [detail, setDetail] = useState("");
    const [giftLink, setGiftLink] = useState("");

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        setImgLink(
            "https://" +
            S3_BUCKET +
            ".s3." +
            REGION +
            ".amazonaws.com/" +
            e.target.files[0].name
        );
    };

    AWS.config.update({
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
        region: 'ap-northeast-2'
    });

    const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: REGION,
    });

    const uploadFile = (file) => {
        const params = {
            ACL: "public-read",
            Bucket: S3_BUCKET,
            Key: `${file.name}`,
            Body: file,
        };
        myBucket
            .putObject(params)
            .on("httpUploadProgress", (evt) => {
                setTimeout(() => {
                    setSelectedFile(null);
                }, 3000);
            })
            .send((err) => {
                if (err) console.log(err);
            });

    };

    const handleSave = async () => {
        if (selectedFile) {
            await uploadFile(selectedFile);
        }

        await save();
        setModalOpen(false);
    };

    async function save() {
        await axios.post(baseUrl + `/menu/create`, {
                name: name,
                imgLink: imgLink,
                detail: detail,
                giftLink: giftLink,
            }
            // ,{
            //     withCredentials: true
            // }
        );
        alert("새로운 상품을 추가했습니다!");
        window.location.reload("/menu");
        setModalOpen(false);
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                    size={"small"}
                    sx={{
                        color: "black",
                        fontSize: "12px",
                        padding: "4px",
                        width: "10px",
                    }}
                    onClick={closeModal}
                >
                    X
                </Button>
            </div>
            <form onSubmit={(event) => save(event)}>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <input
                        label="이미지 링크"
                        id="ex_file"
                        color="primary"
                        type="file"
                        accept="image/*"
                        onChange={handleFileInput}
                    />
                    <Textarea id="standard-basic"
                              name="name"
                              placeholder="상품명"
                              onChange={(event) => setName(event.target.value)}
                              variant="outlined"
                    />
                    <Textarea id="standard-basic"
                              name="detail"
                              placeholder="상품 설명"
                              onChange={(event) => setDetail(event.target.value)}
                              variant="outlined"
                    />
                    <Textarea id="standard-basic"
                              name="giftLink"
                              placeholder="선물하기 링크"
                              onChange={(event) => setGiftLink(event.target.value)}
                              variant="outlined"
                    />
                </Box>
            </form>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                    size={"small"}
                    type={"submit"}
                    sx={{ color: "black", padding: "4px", width: "10px" }}
                    onClick={handleSave}
                >
                    저장하기
                </Button>
            </div>
        </div>
    );
}

export default Add;

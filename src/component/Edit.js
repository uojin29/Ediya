import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Textarea from "@mui/joy/Textarea";
import {useState} from "react";
import axios from "axios";

const baseUrl = `http://3.35.253.47:8080`;
const AWS = require('aws-sdk');
const REGION = "ap-northeast-2";
const S3_BUCKET = "ediyaimg";

function Edit({ setModalOpen, cardData }) {

    const [imgLink, setImgLink] = useState(cardData.imgLink);
    const [name, setName] = useState(cardData.name);
    const [detail, setDetail] = useState(cardData.detail);
    const [giftLink, setGiftLink] = useState(cardData.giftLink);

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

    const closeModal = () => {
        setModalOpen(false);
    };

    async function save() {
        await axios.patch(baseUrl + `/menu/${cardData.id}`, {
                name: name,
                imgLink: imgLink,
                detail: detail,
                giftLink: giftLink,
            }
            // ,{
            //     withCredentials: true
            // }
        );
        alert("수정이 완료되었습니다!");
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
                              defaultValue={name}
                              onChange={(event) => setName(event.target.value)}
                              variant="outlined"
                    />
                    <Textarea id="standard-basic"
                              name="detail"
                              defaultValue={detail}
                              onChange={(event) => setDetail(event.target.value)}
                              variant="outlined"
                    />
                    <Textarea id="standard-basic"
                              name="giftLink"
                              defaultValue={giftLink}
                              onChange={(event) => setGiftLink(event.target.value)}
                              variant="outlined"
                    />
                </Box>
            </form>
            <div style={{display: 'flex', justifyContent: 'flex-end',}}>
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
export default Edit;
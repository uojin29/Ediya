import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Textarea from "@mui/joy/Textarea";
import {useState} from "react";
import axios from "axios";

const AWS = require('aws-sdk');
const baseUrl = `http://localhost:8080`;
const REGION = "ap-northeast-2";
const S3_BUCKET = "ediyaimg";

function Edit({ setModalOpen, cardData }) {

    const [imgLink, setImgLink] = useState("");
    const [name, setName] = useState(cardData.name);
    const [detail, setDetail] = useState(cardData.detail);
    const [giftLink, setGiftLink] = useState(cardData.giftLink);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
            // .on("httpUploadProgress", (evt) => {
            //     setTimeout(() => {
            //         setSelectedFile(null);
            //     }, 3000);
            // })
            .send((err) => {
                if (err) console.log(err);
            });
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const save = async () => {
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
        window.location.reload();
        setModalOpen(false);
    };
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'flex-end',}}>
                <Button size={"small"} sx={{ color: "black", fontSize: "12px", padding: "4px", width: "10px"}} onClick={closeModal}>X</Button>
            </div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <label htmlFor="ex_file">
                    <img style={{ width: "50px", height: "30px" }} src={cardData.imgLink} alt="url" />
                    <br />
                </label>
                <input
                    style={{ display: "none" }}
                    label="이미지 링크"
                    id="ex_file"
                    color="primary"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                        setImgLink(
                            "https://" +
                            S3_BUCKET +
                            ".s3." +
                            REGION +
                            ".amazonaws.com/" +
                            event.target.files[0].name
                        );
                        handleFileInput(event);
                        // console.log("event: " + event.target.files[0].name);
                    }}
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
            <div style={{display: 'flex', justifyContent: 'flex-end',}}>
                <Button
                    size={"small"}
                    type={"submit"}
                    sx={{ color: "black", padding: "4px", width: "10px" }}
                    // onClick={(event) => {
                    //     uploadFile(selectedFile);
                    //     save(event);
                    // }}
                    onClick={(event) => {
                        if (selectedFile) {
                            uploadFile(selectedFile);
                        }
                        save(event);
                    }}
                >
                    저장하기
                </Button>
            </div>
        </div>
    );
}
export default Edit;
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
function Edit({ setModalOpen, cardData}) {
    console.log("cardData.title:", cardData);
    const closeModal = () => {
        setModalOpen(false);
    };
    const saveModal = () => {
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
                <TextField id="standard-basic" label={cardData.image} variant="standard" />
                <TextField id="standard-basic" label={cardData.title} variant="standard"/>
                <TextField id="standard-basic" label={cardData.detail} variant="standard" />
                <TextField id="standard-basic" label={cardData.giftLink} variant="standard" />
            </Box>
            <div style={{display: 'flex', justifyContent: 'flex-end',}}>
                <Button size={"small"} sx={{ color: "black", padding: "4px", width: "10px"}} onClick={saveModal}>저장하기</Button>
            </div>
        </div>
    );
}
export default Edit;
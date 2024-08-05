import { Box, Button, styled } from "@mui/material"
import { useNavigate } from "react-router-dom";

const BackButtonContainer = styled(Box)({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    height: "fit-content"
});

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <BackButtonContainer>
            <Button variant="contained"
                onClick={handleBack}
            >Back</Button>
        </BackButtonContainer>
    )
}

export default BackButton;
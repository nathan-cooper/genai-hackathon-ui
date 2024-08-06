import { Button } from "@mui/material";
import { CHATBOT_URL } from "../constants/evolve.constants";


const ChatButton = () => {
    const handleClick = () => {
        window.open(CHATBOT_URL, '_blank');
    }

    return (
        <Button variant="contained" onClick={handleClick}>Chat with us</Button>
    );
};

export default ChatButton;
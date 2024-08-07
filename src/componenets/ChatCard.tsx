import { Box, Card, Typography, styled } from "@mui/material";
import BackButton from "./BackButton";
import ChatButton from "./ChatButton";

const ChatText = styled(Typography)({
    fontSize: "24px",
    fontWeight: "bold"
})

const CardContainer = styled(Box)(({ theme }) => ({
    marginTop: "48px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        gap: "32px",
        alignItems: "center"
    }
}));

const StyledCard = styled(Card)({
    backgroundColor: "#f5f5f5",
    display: 'flex',
    flexDirection: "row",
    gap: "20px",
    width: "fit-content",
    padding: "16px"
});

const ChatCard = () => {
    return (
        <CardContainer>
            <BackButton />
            <StyledCard elevation={3}>
                <ChatText>Questions? We can help</ChatText>
                <ChatButton />
            </StyledCard>
        </CardContainer>
    )
};

export default ChatCard;
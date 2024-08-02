import { Box, Button, Card, Typography, styled } from "@mui/material";

const ChatText = styled(Typography)({
    fontSize: "24px",
    fontWeight: "bold"
})

const CardContainer = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "right"
})

const StyledCard = styled(Card)({
    marginTop: "48px",
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
            <StyledCard elevation={3}>
                <ChatText>Questions? We can help</ChatText>
                <Button variant="contained">Chat with us</Button>
            </StyledCard>
        </CardContainer>
    )
};

export default ChatCard;
import { Box, Button, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Option, Question } from "../types/evolve.types";
import { getQuestion } from "../helper/cardHelper";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../componenets/Header";
import { StyledPaper } from "../componenets/ListItem";
import ChatCard from "../componenets/ChatCard";

const UnsureContainer = styled(Box)({
    maxWidth: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
});

const ColContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center"
});

const QuestionContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center"
});

const Heading = styled(Typography)({
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "right"
});

const QuestionButton = styled(Button)({
    width: "100%"
});

const UnsurePage = () => {
    const [question, setQuestion] = useState<Question | undefined>();
    const [selection, setSelection] = useState<Option | undefined>();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const id = queryParams.get('id');
        setQuestion(getQuestion(id));
    }, [location]);

    const handleNext = () => {
        if (selection) {
            selection.onSelect(navigate);
        }
    }

    return (
        <UnsureContainer>
            <Header />
            {question && (
                <StyledPaper elevation={3}
                    sx={{marginTop: "36px", width: "fit-content"}}
                >
                    <ColContainer>
                        <Heading>{question.question}</Heading>
                        <QuestionContainer>
                            {question.options.map((option, index) => {
                                return (
                                    <QuestionButton key={index}
                                        variant={selection?.label === option.label ? "contained" : "outlined"}
                                        sx={{
                                            minWidth: "300px"
                                        }}
                                        onClick={() => setSelection(option)}
                                    >
                                        {option.label}
                                    </QuestionButton>
                                )
                            })}
                        </QuestionContainer>

                        <Button variant="contained" onClick={handleNext}>Next</Button>
                    </ColContainer>
                </StyledPaper>
            )}
            <ChatCard />
        </UnsureContainer>
    )
}

export default UnsurePage;
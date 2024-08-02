import { Button, Grid, Link, Paper, Typography, styled } from "@mui/material";
import { CreditCard } from "../types/evolve.types";
import { useNavigate } from "react-router-dom";

const RowContainer = styled(Grid)({
    width: "100%",
    boxSizing: "border-box"
});

const ColContainer = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    gap: "16px"
});

export const StyledPaper = styled(Paper)({
    backgroundColor: "#F6F6F6",
    width: "100%",
    padding: "24px"
});

const ColText = styled(Typography)({
    fontSize: "18px"
});

export interface ListItemProps {
    card: CreditCard
}

const ListItem = ({ card }: ListItemProps) => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate(`/productDetail?id=${card.id}`);
    }

    return (
        <StyledPaper elevation={3}>
            <RowContainer container direction={"row"}>
                <ColContainer item container direction={"column"} md={2}>
                    <Grid item className="flex flex-row justify-left">
                        <img src={card.image} />
                    </Grid>
                    <Grid item>
                        <ColText>
                            {card.productName}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2}>
                    <Grid item>
                        <ColText>
                            {card.annualFee ? card.annualFee.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }) : "$0"}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2}>
                    <Grid item>
                        <ColText>
                            {card.apr}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2}>
                    <Grid item>
                        <ColText>
                            {card.rewards}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2}>
                    <Grid item>
                        <ColText>
                            {card.introOffer}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2}
                    className="pr-12 pl-12"
                >
                    <Button variant="contained">Apply Now</Button>
                    <Link sx={{ textAlign: "center", ":hover": { cursor: "pointer" } }}
                        onClick={handleLearnMore}
                    >Learn more</Link>
                </ColContainer>
            </RowContainer>
        </StyledPaper>
    );
}

export default ListItem;
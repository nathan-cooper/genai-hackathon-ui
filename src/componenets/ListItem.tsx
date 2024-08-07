import { Button, Grid, Link, Paper, Typography, styled } from "@mui/material";
import { CreditCard } from "../types/evolve.types";
import { useNavigate } from "react-router-dom";

const RowContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
        gap: "16px"
    }
}))

const ColContainer = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    [theme.breakpoints.down("md")]: {
        alignItems: "center"
    }
}))

export const StyledPaper = styled(Paper)({
    backgroundColor: "#F6F6F6",
    width: "100%",
    padding: "24px"
});

const ColText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    }
}));

export const MobileLabel = styled(Typography)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        textAlign: "center",
        fontWeight: "bold",
        justifySelf: "center"
    }
}))

export interface ListItemProps {
    card: CreditCard
}

const ListItem = ({ card }: ListItemProps) => {
    const navigate = useNavigate();

    const handleApplyNow = () => {
        navigate('/form', { state: { isLoanAccount: false, productSelected: card.productName, from: "/listItem" } });
    };

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
                        <ColText sx={{ fontWeight: "bold" }}>
                            {card.productName}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2}>
                    <Grid item sx={{ display: "grid" }}>
                        <MobileLabel>Annual Fee</MobileLabel>
                        <ColText>
                            {card.annualFee ? card.annualFee.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }) : "$0"}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2}>
                    <Grid item sx={{ display: "grid" }}>
                        <MobileLabel>APR</MobileLabel>
                        <ColText>
                            {card.apr}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2}>
                    <Grid item sx={{ display: "grid" }}>
                        {card.rewards && <MobileLabel>Rewards</MobileLabel>}
                        <ColText>
                            {card.rewards}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2}>
                    <Grid item sx={{ display: "grid" }}>
                        {card.introOffer && <MobileLabel>Intro Offer</MobileLabel>}
                        <ColText>
                            {card.introOffer}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2}
                    className="pr-12 pl-12"
                >
                    <Button variant="contained" onClick={handleApplyNow}>Apply Now</Button>
                    <Link sx={{ textAlign: "center", ":hover": { cursor: "pointer" } }}
                        onClick={handleLearnMore}
                    >Learn more</Link>
                </ColContainer>
            </RowContainer>
        </StyledPaper>
    );
}

export default ListItem;
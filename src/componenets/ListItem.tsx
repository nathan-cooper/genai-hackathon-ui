import { Button, Grid, Link, Typography, styled } from "@mui/material";
import { CreditCard } from "../types/evolve.types";
import { useNavigate } from "react-router-dom";

const RowContainer = styled(Grid)({
    width: "100%",
    boxSizing: "border-box",
    borderBottom: "2px solid black"
});

const ColContainer = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "12px 12px"
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
        <RowContainer container direction={"row"}>
            <ColContainer item container direction={"column"} md={2}>
                <Grid item className="flex flex-row justify-center">
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
                        {card.annualFee}
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
                <Link sx={{textAlign: "center"}}
                    onClick={handleLearnMore}
                >Learn more</Link>
            </ColContainer>
        </RowContainer>
    );
}

export default ListItem;
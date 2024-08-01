import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { CreditCard } from "../types/evolve.types";
import data from "../__data__/detailData.json";
import { useLocation, useNavigate } from "react-router-dom";
import { getCreditCard } from "../helper/cardHelper";
import { useEffect, useState } from "react";

const DetailContainer = styled(Box)({
    maxWidth: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "12px"
});

const RowContainer = styled(Grid)({
    width: "100%",
    border: "2px solid black",
    boxSizing: "border-box"
});

const ColContainer = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "12px 12px"
});

const UnderlineTitleText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "underline",
    fontStyle: "italic",
    color: "blue",
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    }
}));

const ColText = styled(Typography)({
    fontSize: "18px"
});

export interface ProductDetailPageProps {
    creditCard: CreditCard
}

const ProductDetailPage = () => {
    const [card, setCard] = useState<CreditCard | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const id = queryParams.get('id');
        if (!id) {
            navigate("/");
            return;
        }
        const card = getCreditCard(id);
        if (!card) navigate('/');
        setCard(card);
    }, []);


    return (
        <DetailContainer>
            {card && (
                <RowContainer container direction={"row"}>
                    <ColContainer item container direction={"column"} md={2.4} xs={12}>
                        <Grid item>
                            <UnderlineTitleText>
                                {card.productName}
                            </UnderlineTitleText>
                        </Grid>
                        <Grid item className="flex flex-row justify-center">
                            <img src={card.image} />
                        </Grid>
                    </ColContainer>
                    <ColContainer item container direction={"column"} md={2.4} xs={12}>
                        <ColText>
                            {card.cardDetail.Column1}
                        </ColText>
                    </ColContainer>
                    <ColContainer item container direction={"column"} md={2.4} xs={12}>
                        <ColText>
                            {card.cardDetail.Column2}
                        </ColText>
                    </ColContainer>
                    <ColContainer item container direction={"column"} md={2.4} xs={12}>
                        <ColText>
                            {card.cardDetail.Column3}
                        </ColText>
                    </ColContainer>
                    <ColContainer item container direction={"column"} md={2.4} xs={12}
                        className="pr-12 pl-12"
                    >
                        <Button variant="contained">Apply Now</Button>
                    </ColContainer>
                </RowContainer>
            )}
        </DetailContainer>
    )
}

export default ProductDetailPage;
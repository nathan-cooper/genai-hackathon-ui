import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { CreditCard, Product } from "../types/evolve.types";
import { useLocation, useNavigate } from "react-router-dom";
import { getCreditCard, getLoan } from "../helper/cardHelper";
import { useEffect, useState } from "react";
import Header from "../componenets/Header";
import { StyledPaper } from "../componenets/ListItem";
import ChatCard from "../componenets/ChatCard";
import CreditTermsLink from "../componenets/CreditTermsLink";

const DetailContainer = styled(Box)({
    maxWidth: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "12px"
});

const RowContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
        gap: "24px"
    }
}))

const ColContainer = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "0 12px"
});

const ProductNameText = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "bold",
    fontStyle: "italic",
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    }
}));

const ColText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    }
}))

export interface ProductDetailPageProps {
    creditCard: CreditCard
}

const ProductDetailPage = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const id = queryParams.get('id');
        if (!id) {
            navigate("/");
            return;
        }
        let p: Product | null | undefined = getCreditCard(id);
        if (!p) {
            p = getLoan(id);
        }
        if (!p) {
            navigate("/");
            return;
        }
        setProduct(p);
    }, [location]);


    return (
        <DetailContainer>
            <Header />
            {product && (
                <StyledPaper elevation={3}>
                    <RowContainer container direction={"row"}>
                        <ColContainer item container direction={"column"} md={2.4} xs={12}>
                            <Grid item>
                                <ProductNameText>
                                    {product.productName}
                                </ProductNameText>
                            </Grid>
                            {product.image && (
                                <Grid item sx={{
                                    display: "flex",
                                    justifyContent: {xs: "center", md: "flex-start"}
                                }}>
                                    <img src={product.image} />
                                </Grid>
                            )}
                        </ColContainer>
                        <ColContainer item container direction={"column"} md={2.4} xs={12}>
                            <ColText>
                                {product.productDetail.Column1}
                            </ColText>
                        </ColContainer>
                        <ColContainer item container direction={"column"} md={2.4} xs={12}>
                            <ColText>
                                {product.productDetail.Column2}
                            </ColText>
                        </ColContainer>
                        <ColContainer item container direction={"column"} md={2.4} xs={12}>
                            <ColText>
                                {product.productDetail.Column3}
                            </ColText>
                        </ColContainer>
                        <ColContainer item container direction={"column"} md={2.4} xs={12}
                            className="pr-12 pl-12"
                        >
                            <Button variant="contained">Apply Now</Button>
                            <CreditTermsLink />
                        </ColContainer>
                    </RowContainer>
                </StyledPaper>
            )}
            <ChatCard />
        </DetailContainer>
    )
}

export default ProductDetailPage;
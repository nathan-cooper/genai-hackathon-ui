import { Box, Grid, Typography, styled } from "@mui/material";
import ListItem from "../componenets/ListItem";
import { getProductList } from "../helper/cardHelper";
import { useEffect, useState } from "react";
import { CreditCard } from "../types/evolve.types";
import Header from "../componenets/Header";
import ChatCard from "../componenets/ChatCard";
import { useLocation } from "react-router-dom";
import BackButton from "../componenets/BackButton";

export const ListContainer = styled(Box)({
    maxWidth: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "12px"
});

export const TableContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "24px"
});

export const RowContainer = styled(Grid)({
    width: "100%",
    boxSizing: "border-box",
    padding: "0 24px"
});

export const HeaderText = styled(Typography)({
    fontSize: "16px",
    fontWeight: "bold"
});

const ProductListPage = () => {
    const [prodList, setProdList] = useState<CreditCard[]>([]);

    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const queryList = queryParams.get('list');
        setProdList(getProductList(queryList));
    }, [location]);

    return (
        <ListContainer>
            <Header />
            <BackButton />
            <TableContainer>
                <RowContainer container direction={"row"} sx={{borderBottom: "4px solid #1976d2"}}>
                    <Grid item md={2}>
                        <HeaderText>Credit Card</HeaderText>
                    </Grid>
                    <Grid item md={2}>
                        <HeaderText>Annual Fee</HeaderText>
                    </Grid>
                    <Grid item md={2}>
                        <HeaderText>APR</HeaderText>
                    </Grid>
                    <Grid item md={2}>
                        <HeaderText>Rewards</HeaderText>
                    </Grid>
                    <Grid item md={2}>
                        <HeaderText>Intro Offer</HeaderText>
                    </Grid>
                    <Grid item md={2}>
                        <HeaderText sx={{textAlign: "center"}}>Apply Now</HeaderText>
                    </Grid>
                </RowContainer>
                
                {prodList.map((card, index) => {
                    return (
                        <ListItem key={index} card={card} />
                    )
                })}
            </TableContainer>
            <ChatCard />
        </ListContainer>
    )
};

export default ProductListPage;
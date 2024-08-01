import { Box, Grid, Typography, styled } from "@mui/material";
import ListItem from "../componenets/ListItem";
import { getCreditCard, getProductList } from "../helper/cardHelper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard } from "../types/evolve.types";

const ListContainer = styled(Box)({
    maxWidth: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "12px"
});

const TableContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "100%"
});

const RowContainer = styled(Grid)({
    width: "100%",
    boxSizing: "border-box"
});

const HeaderText = styled(Typography)({
    fontSize: "16px",
    fontWeight: "bold"
});

const ProductListPage = () => {
    const [prodList, setProdList] = useState<CreditCard[]>([]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const queryList = queryParams.get('list');
        setProdList(getProductList(queryList));
    }, []);

    return (
        <ListContainer>
            <TableContainer>
                <RowContainer container direction={"row"} sx={{borderBottom: "4px solid black"}}>
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
                        <HeaderText>Apply Now</HeaderText>
                    </Grid>
                </RowContainer>
                
                {prodList.map((card, index) => {
                    return (
                        <ListItem key={index} card={card} />
                    )
                })}
            </TableContainer>
        </ListContainer>
    )
};

export default ProductListPage;
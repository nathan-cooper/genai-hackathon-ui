import { Grid } from "@mui/material";
import { getLoanList } from "../helper/cardHelper";
import { useEffect, useState } from "react";
import { Loan } from "../types/evolve.types";
import LoanListItem from "../componenets/LoanListItem";
import Header from "../componenets/Header";
import { HeaderText, ListContainer, RowContainer, TableContainer } from "./ProductListPage";
import ChatCard from "../componenets/ChatCard";
import { useLocation } from "react-router-dom";

const LoanListPage = () => {
    const [prodList, setProdList] = useState<Loan[]>([]);

    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const queryList = queryParams.get('list');
        setProdList(getLoanList(queryList));
    }, [location]);

    return (
        <ListContainer>
            <Header />
            <TableContainer>
                <RowContainer container direction={"row"} sx={{borderBottom: "4px solid #1976d2"}}>
                    <Grid item md={2.4}>
                        <HeaderText>Loan</HeaderText>
                    </Grid>
                    <Grid item md={2.4}>
                        <HeaderText>APR</HeaderText>
                    </Grid>
                    <Grid item md={2.4}>
                        <HeaderText>Loan Amount</HeaderText>
                    </Grid>
                    <Grid item md={2.4}>
                        <HeaderText>Loan Term</HeaderText>
                    </Grid>
                    <Grid item md={2.4}>
                        <HeaderText sx={{textAlign: "center"}}>Apply Now</HeaderText>
                    </Grid>
                </RowContainer>
                
                {prodList.map((loan, index) => {
                    return (
                        <LoanListItem key={index} loan={loan} />
                    )
                })}
            </TableContainer>
            <ChatCard />
        </ListContainer>
    )
};

export default LoanListPage;
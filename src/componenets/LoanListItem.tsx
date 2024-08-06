import { Button, Grid, Link, Typography, styled } from "@mui/material";
import { Loan } from "../types/evolve.types";
import { useNavigate } from "react-router-dom";
import { MobileLabel, StyledPaper } from "./ListItem";
import CreditTermsLink from "./CreditTermsLink";

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
    paddingRight: "16px",
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
        paddingRight: "0px"
    }
}))

const ColText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    }
}));

export interface LoanListItemProps {
    loan: Loan
}

const LoanListItem = ({ loan }: LoanListItemProps) => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate(`/productDetail?id=${loan.id}`);
    }

    return (
        <StyledPaper elevation={3}>
            <RowContainer container direction={"row"}>
                <ColContainer item container direction={"column"} md={2.4}>
                    <Grid item>
                        <ColText fontWeight={"bold"}>
                            {loan.productName}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2.4}>
                    <Grid item sx={{ display: "grid" }}>
                        <MobileLabel>APR</MobileLabel>
                        <ColText>
                            {loan.apr}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2.4}>
                    <Grid item sx={{ display: "grid" }}>
                        <MobileLabel>Loan Amount</MobileLabel>
                        <ColText>
                            {loan.loanAmount}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2.4}>
                    <Grid item sx={{ display: "grid" }}>
                        <MobileLabel>Loan Term</MobileLabel>
                        <ColText>
                            {loan.loanTerm}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2.4}>
                    <Button variant="contained">Apply Now</Button>
                    <Link sx={{ textAlign: "center", ":hover": { cursor: "pointer" } }}
                        onClick={handleLearnMore}
                    >Learn more</Link>
                    <CreditTermsLink />
                </ColContainer>
            </RowContainer>
        </StyledPaper>
    );
}

export default LoanListItem;
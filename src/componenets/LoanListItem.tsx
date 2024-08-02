import { Button, Grid, Link, Typography, styled } from "@mui/material";
import { Loan } from "../types/evolve.types";
import { useNavigate } from "react-router-dom";
import { StyledPaper } from "./ListItem";

const RowContainer = styled(Grid)({
    width: "100%",
    boxSizing: "border-box"
});

const ColContainer = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    gap: "16px"
});

const ColText = styled(Typography)({
    fontSize: "18px"
});

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
                        <ColText>
                            {loan.productName}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2.4}>
                    <Grid item>
                        <ColText>
                            {loan.apr}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2.4}>
                    <Grid item>
                        <ColText>
                            {loan.loanAmount}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2.4}>
                    <Grid item>
                        <ColText>
                            {loan.loanTerm}
                        </ColText>
                    </Grid>
                </ColContainer>
                <ColContainer item container direction={"column"} md={2.4}
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

export default LoanListItem;
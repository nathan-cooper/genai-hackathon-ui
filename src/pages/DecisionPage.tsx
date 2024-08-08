import { Box, Typography, keyframes, styled } from '@mui/material';
import { getMessageContent } from "../helper/decisionHelper";
import DecisionMessage from '../componenets/DecisionMessage';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../componenets/Header';

const DecisionContainer = styled(Box)({
    maxWidth: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "0px 12px 12px 12px"
});

const DecisionBox = styled(Box)({
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const shimmerAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const ShimmerText = styled(Typography)(({ theme }) => ({
    backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 40%, ${theme.palette.primary.light} 60%, ${theme.palette.primary.light} 100%)`,
    backgroundSize: '400% 400%',
    animation: `${shimmerAnimation} 2s ease infinite`,
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
}));

const DecisionPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const status = location.state?.status || "refer";
    const isLoanAccount = location.state?.isLoanAccount || false;
    const messageContent = getMessageContent(status, isLoanAccount);
    const productSelected = location.state?.productSelected || '';

    useEffect(() => {
        // Check if the user is navigating to the /form route from an allowed path
        const isAllowedPath = location.state?.from && location.state?.from.startsWith('/form')
        // If the user is not navigating from an allowed path, redirect to the root path
        if (!isAllowedPath) {
            navigate('/', { replace: true, state: {} });
        }
    }, [navigate, location.state]);

    return (
        <DecisionContainer maxWidth="md">
            <Header />
            <DecisionBox mt={4} mb={4}>
                <Box display="flex" alignItems="center"> {/* Add this line */}
                    <Typography variant="h4" gutterBottom>
                        {"Application Status"}&nbsp;
                    </Typography>
                    <ShimmerText variant="h6" >{productSelected}</ShimmerText>
                </Box>
                {messageContent && (
                    <DecisionMessage
                        heading={messageContent.heading}
                        body={messageContent.body}
                    />
                )}
            </DecisionBox>
        </DecisionContainer>
    );
};

export default DecisionPage;

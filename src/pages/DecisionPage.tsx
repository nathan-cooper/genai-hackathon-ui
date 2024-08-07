import { Box, Typography, styled } from '@mui/material';
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

const DecisionPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const status = location.state?.status || "refer";
    const messageContent = getMessageContent(status);
    const productSelected = location.state?.productSelected || '';

    useEffect(() => {
        // Check if the user is navigating to the /form route from an allowed path
        const isAllowedPath = location.state?.from && location.state?.from.startsWith('/form')

        console.log(location.state?.from);

        // If the user is not navigating from an allowed path, redirect to the root path
        if (!isAllowedPath) {
            navigate('/', { replace: true });
        }
    }, [navigate, location.state]);

    return (
        <DecisionContainer maxWidth="md">
            <Header/>
            <Box mt={4} mb={4}>
                <Typography variant="h4" gutterBottom>
                    Application Status - {productSelected}
                </Typography>
                {messageContent && (
                    <DecisionMessage
                        heading={messageContent.heading}
                        body={messageContent.body}
                    />
                )}
            </Box>
        </DecisionContainer>
    );
};

export default DecisionPage;
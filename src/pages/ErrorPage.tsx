import { Box, Typography, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../componenets/Header';

const ErrorContainer = styled(Box)({
    maxWidth: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "0px 12px 12px 12px"
});

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/', { replace: true });
    };

    return (
        <ErrorContainer maxWidth="md">
            <Header />
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="10vh"
                textAlign="center"
            >
                <Typography variant="h4" gutterBottom>
                    Oops! Something went wrong.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    An error occurred while processing your request.
                </Typography>

                <Box display="flex" justifyContent="center" mt={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleGoHome}
                        sx={{ mr: 2 }}
                    >
                        Home
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Chat with us
                    </Button>
                </Box>
            </Box>
        </ErrorContainer>
    );
};

export default ErrorPage;

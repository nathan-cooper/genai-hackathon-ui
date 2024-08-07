import { useLocation, useNavigate } from "react-router-dom";
import FormComponent from "../componenets/FormComponent";
import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import Header from "../componenets/Header";

const FormContainer = styled(Box)({
    maxWidth: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "0px 12px 12px 12px"
});

const FormPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Check if the user is navigating to the /form route from an allowed path
        const isAllowedPath = location.state?.from &&
            (location.state?.from.startsWith('/listItem') ||
                location.state?.from.startsWith('/loanListItem') ||
                location.state?.from.startsWith('/productDetail')
            );

        console.log(location.state?.from);

        // If the user is not navigating from an allowed path, redirect to the root path
        if (!isAllowedPath) {
            navigate('/', { replace: true });
        }
    }, [navigate, location.state]);

    return (
        <FormContainer>
            <Header />
            <FormComponent />
        </FormContainer>
    );
};

export default FormPage;
import { Box, styled } from "@mui/material";

const UnsureContainer = styled(Box)({
    maxWidth: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "12px"
  });

const UnsurePage = () => {
    return (
        <div>
            <h1>UnsurePage</h1>
        </div>
    )
}

export default UnsurePage;
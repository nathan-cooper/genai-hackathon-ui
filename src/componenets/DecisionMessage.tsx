import { Typography } from "@mui/material";
import { Key } from "react";

interface DecisionMessageProps {
    heading: string;
    body: string[];
}

const DecisionMessage = ({ heading, body }: DecisionMessageProps) => (
    <>
        <Typography variant="h5" gutterBottom style={{ color: "navy" }}>
            {heading}
        </Typography>
        {body.map((paragraph: string, index: Key | null | undefined) => (
            <Typography key={index} variant="body1" gutterBottom>
                {paragraph}
            </Typography>
        ))}
    </>
);

export default DecisionMessage;
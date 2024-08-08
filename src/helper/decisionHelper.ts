import decisionMessge from "../__data__/decisionMessage.json";

export const getMessageContent = (status: string, isLoanAccount: boolean) => {
    const isLoan = isLoanAccount ? "loan" : "card";
    const decision = decisionMessge.find((item) => item.id === isLoan && item.decision === status);

    return decision?.message || "";
};

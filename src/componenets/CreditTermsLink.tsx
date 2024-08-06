import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Button, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CreditTermsDialog = () => {
    // const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        // setOpen(true);
    };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        // <div>
            <Link color="primary" onClick={handleClickOpen}
                sx={{
                    textAlign: "center",
                    width: "100%",
                    ":hover": {
                        cursor: "pointer"
                    }
                }}
            >
                Important Credit Terms
            </Link>
            /* <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                onClose={handleClose}
                aria-labelledby="credit-terms-dialog-title"
                sx={{
                    "& .MuiPaper-root": {
                        overflowX: "hidden"
                    }
                }}
            >
                <DialogTitle id="credit-terms-dialog-title">
                    <span>Important Credit Terms</span>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent
                    dividers
                    sx={{
                        maxHeight: '400px', // Set max height for scrollable content
                        overflowY: 'auto', // Enable vertical scrolling
                        overflowX: "hidden",
                        // Custom scrollbar styles
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: '#f1f1f1',
                            borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#888',
                            borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: '#555',
                        },
                        scrollbarWidth: 'thin', // For Firefox
                        scrollbarColor: '#888 #f1f1f1', // For Firefox
                    }}
                >
                    <div>
                        <h3><b>1. Annual Percentage Rate (APR)</b></h3>
                        <ul>
                            <li><b>Purchase APR</b>: The APR for purchases is <b>18.24% - 26.99%</b>. This is the interest rate applied to any balance carried on your card from month to month.</li>
                            <li><b>Balance Transfer APR</b>: The APR for balance transfers is <b>19.00% - 29.99%</b>. This rate applies to balances transferred from other credit cards or loans.</li>
                            <li><b>Cash Advance APR</b>: The APR for cash advances is <b>21.00% - 30.00%</b>. This rate applies to any cash withdrawals or cash equivalent transactions.</li>
                            <li><b>Penalty APR</b>: If you make a late payment or exceed your credit limit, a penalty APR of up to <b>29.99%</b> may apply.</li>
                        </ul>

                        <h3><b>2. Fees</b></h3>
                        <ul>
                            <li><b>Annual Fee</b>: <b>$99.00</b> per year. This fee is charged annually for having the credit card.</li>
                            <li><b>Late Payment Fee</b>: Up to <b>$39.00</b>. Charged if a payment is made after the due date.</li>
                            <li><b>Over-the-Limit Fee</b>: Up to <b>$35.00</b>. Charged if you exceed your credit limit.</li>
                            <li><b>Foreign Transaction Fee</b>: <b>3.00%</b> of the transaction amount. Applied to purchases made outside of the United States.</li>
                            <li><b>Cash Advance Fee</b>: <b>5.00%</b> of the amount of each cash advance or a minimum of <b>$10.00</b>, whichever is greater.</li>
                            <li><b>Balance Transfer Fee</b>: <b>3.00%</b> of each balance transferred or a minimum of <b>$5.00</b>, whichever is greater.</li>
                        </ul>

                        <h3><b>3. Grace Period</b></h3>
                        <p><b>Grace Period</b>: You have up to <b>25</b> days from the end of each billing cycle to pay your balance in full before interest is charged on new purchases. If you do not pay your balance in full, interest will be charged from the date of the transaction.</p>

                        <h3><b>4. Minimum Payment</b></h3>
                        <p><b>Minimum Payment</b>: Your minimum payment will be the greater of <b>3%</b> of your balance or <b>$25.00</b>, plus any past due amounts and fees. The minimum payment amount is subject to change based on your balance and fees.</p>

                        <h3><b>5. Credit Limit</b></h3>
                        <p><b>Credit Limit</b>: Your credit limit is the maximum amount you can charge to your account. Exceeding this limit may result in over-limit fees or declined transactions.</p>

                        <h3><b>6. Introductory Offers</b></h3>
                        <ul>
                            <li><b>Introductory APR</b>: An introductory APR of <b>0% APR</b> applies to purchases and balance transfers for the first <b>12 months</b>. After the introductory period, the standard APR applies.</li>
                            <li><b>Introductory Fee Waivers</b>: <b>No balance transfer fees for the first 6 months.</b></li>
                        </ul>

                        <h3><b>7. Rewards Program</b></h3>
                        <p><b>Rewards</b>: Earn <b>1.5%</b> cash back on all purchases. <b>Cash back rewards are credited to your account on a quarterly basis.</b></p>

                        <h3><b>8. Terms and Conditions</b></h3>
                        <ul>
                            <li><b>Changes to Terms</b>: We may change the terms of your credit card agreement at any time. You will be notified of any significant changes in accordance with applicable laws.</li>
                            <li><b>Dispute Resolution</b>: Disputes regarding transactions should be reported promptly. The process for dispute resolution is outlined in your cardholder agreement.</li>
                            <li><b>Account Closure</b>: You may close your account at any time. Outstanding balances must be paid in full upon account closure.</li>
                        </ul>

                        <h3><b>9. Contact Information</b></h3>
                        <ul>
                            <li><b>Customer Service</b>: For questions about your account or these terms, please contact our customer service department at <b>(800) 123-4567</b> or <b>support@bankexample.com</b>.</li>
                            <li><b>Website</b>: Visit <b>www.bankexample.com</b> for additional information and access to your account online.</li>
                        </ul>
                    </div>
                </DialogContent>
            </Dialog> */
        // </div>
    );
};

export default CreditTermsDialog;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Container,
    Grid,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    Typography,
} from '@mui/material';
import { API_URL, LOAN_DURATION } from '../constants/evolve.constants';
import { populateStateList } from '../helper/formHelper';

interface FormData {
    firstName: string;
    middleName?: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipCode: string;
    ssn: string;
    dob: string;
    email: string;
    phone: string;
    mobile: string;
    annualIncome: string;
    home: string;
    employmentStatus: string;
    employmentType: string;
    duration: string;
    loanAmount: string;
}


const FormComponent = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();
    const [_, setFormData] = useState<FormData>({} as FormData);
    const navigate = useNavigate();
    const location = useLocation();
    const isLoanAccount = location.state?.isLoanAccount || false;
    const productSelected = location.state?.productSelected || '';

    const getAge = (dob: string) => {
        if (dob) {
            const birthDate = new Date(dob);
            const currentDate = new Date();
            const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
            const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
            return ageInYears
        }
    }

    const onSubmit: SubmitHandler<FormData> = (data) => {
        setFormData(data);

        // Send data to API
        fetch(API_URL + '/lending/api/v1/creditrisk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                "dob": formatDOBtoString(data.dob),
                "productSelected": productSelected,
                "age": getAge(data.dob),
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log('Success:', data))
            .catch(() => navigate('/status', { state: { from: "/form", status: "approved", productSelected: productSelected } }));
        console.log({
            ...data,
            "dob": formatDOBtoString(data.dob),
            "productSelected": productSelected,
            "age": getAge(data.dob),
        });
    };

    const formatDOB = (event: React.ChangeEvent<HTMLInputElement>) => {
        const dob = event.target.value;
        if (dob) {
            let formattedDOB = dob.replace(/\//g, '');
            if (formattedDOB.length > 2 && formattedDOB.length < 5) {
                formattedDOB = `${formattedDOB.slice(0, 2)}/${formattedDOB.slice(2)}`;
            } else if (formattedDOB.length >= 5) {
                formattedDOB = `${formattedDOB.slice(0, 2)}/${formattedDOB.slice(2, 4)}/${formattedDOB.slice(4, 8)}`;
            }
            setValue('dob', formattedDOB, { shouldValidate: true });
        }
    };

    const formatDOBOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const dob = event.target.value;
        if (dob) {
            const [day, month, year] = dob.split('/');
            const formattedDOB = `${month}/${day}/${year}`;
            setValue('dob', formattedDOB, { shouldValidate: true });
        }
    };

    const formatDOBtoString = (dob: string) => {
        if (dob) {
            const [day, month, year] = dob.split('/');
            const formattedDOB = `${year}-${month}-${day}`;
            return formattedDOB;
        }
    }

    const handleNumericInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/\D/g, '');
        setValue(event.target.name as keyof FormData, value, { shouldValidate: true });
    };

    const handleAlphabeticInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/[^A-Za-z]/g, '');
        setValue(event.target.name as keyof FormData, value, { shouldValidate: true });
    };

    const handleGoBack = () => {
        navigate(-1);
    };



    return (
        <Container maxWidth="md">
            <Typography variant="h5" component="h1" gutterBottom style={{ color: 'navy' }}>
                {isLoanAccount ? 'Open a Loan Account' : 'Open a Credit Card'}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Enter Details for your new <span style={{ color: 'navy' }}>{productSelected}</span>
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="First Name"
                            {...register('firstName', { required: true })}
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Middle Name"
                            {...register('middleName')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            {...register('lastName', { required: true })}
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                        />
                    </Grid>
                    {/* ... rest of the form fields ... */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Address Line 1"
                            {...register('addressLine1', { required: true })}
                            error={!!errors.addressLine1}
                            helperText={errors.addressLine1?.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Address Line 2"
                            {...register('addressLine2')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="City"
                            {...register('city', {
                                required: true,
                                pattern: /^[A-Za-z]+$/i,
                            })}
                            error={!!errors.city}
                            helperText={errors.city?.message}
                            onChange={handleAlphabeticInput}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel id="state-label">State</InputLabel>
                            <Select
                                labelId="state-label"
                                id="state"
                                label="State"
                                {...register('state', { required: true })}
                                error={!!errors.state}
                            >
                                {populateStateList().map((state) => (
                                    <MenuItem key={state.code} value={state.code}>
                                        {state.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Zip"
                            {...register('zipCode', {
                                required: true,
                                pattern: /^\d{5}$/,
                            })}
                            error={!!errors.zipCode}
                            helperText={errors.zipCode?.message}
                            onChange={handleNumericInput}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="SSN"
                            {...register('ssn', {
                                required: true,
                                pattern: /^\d{9}$/,
                            })}
                            error={!!errors.ssn}
                            helperText={errors.ssn?.message}
                            onChange={handleNumericInput}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Date of Birth"
                            placeholder="DD/MM/YYYY"
                            {...register('dob', {
                                required: true,
                                pattern: /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/,
                                validate: (value: string | number | Date) => new Date(value) < new Date(),
                            })}
                            error={!!errors.dob}
                            helperText={errors.dob?.message}
                            onInput={formatDOB}
                            onBlur={formatDOBOnBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Email ID"
                            {...register('email', {
                                required: true,
                                pattern: /^\S+@\S+\.\S+$/,
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Phone No"
                            {...register('phone', {
                                required: true,
                                pattern: /^\d{10}$/,
                            })}
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            onChange={handleNumericInput}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Mobile No"
                            {...register('mobile', {
                                required: true,
                                pattern: /^\d{10}$/,
                            })}
                            error={!!errors.mobile}
                            helperText={errors.mobile?.message}
                            onChange={handleNumericInput}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Annual Income"
                            {...register('annualIncome', {
                                required: true,
                                pattern: /^\d+$/,
                                validate: (value) => {
                                    const numericValue = parseInt(value, 10);
                                    return numericValue >= 0 && numericValue <= 1000000;
                                },
                            })}
                            error={!!errors.annualIncome}
                            helperText={
                                errors.annualIncome?.message ||
                                'Annual income should be between $0 and $1,000,000'
                            }
                            onChange={handleNumericInput}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth error={!!errors.home}>
                            <InputLabel>Home</InputLabel>
                            <Select
                                {...register('home', { required: true })}
                                defaultValue=""
                            >
                                <MenuItem value="">Select Home</MenuItem>
                                <MenuItem value="Own">Own</MenuItem>
                                <MenuItem value="Rent">Rent</MenuItem>
                            </Select>
                            {errors.home?.message && (
                                <span>{errors.home.message}</span>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth error={!!errors.employmentStatus}>
                            <InputLabel>Employment Status</InputLabel>
                            <Select
                                {...register('employmentStatus', { required: true })}
                                defaultValue=""
                            >
                                <MenuItem value="">Select Employment Status</MenuItem>
                                <MenuItem value="Employed">Employed</MenuItem>
                                <MenuItem value="Self Employed">Self Employed</MenuItem>
                                <MenuItem value="Not Employed">Not Employed</MenuItem>
                            </Select>
                            {errors.employmentStatus?.message && (
                                <span>{errors.employmentStatus.message}</span>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth error={!!errors.employmentType}>
                            <InputLabel>Part time/Full Time</InputLabel>
                            <Select
                                {...register('employmentType', { required: true })}
                                defaultValue=""
                            >
                                <MenuItem value="">Select Work Type</MenuItem>
                                <MenuItem value="Part Time">Part Time</MenuItem>
                                <MenuItem value="Full Time">Full Time</MenuItem>
                            </Select>
                            {errors.employmentType?.message && (
                                <span>{errors.employmentType.message}</span>
                            )}
                        </FormControl>
                    </Grid>
                    {isLoanAccount && (
                        <>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Loan Amount"
                                    {...register('loanAmount', {
                                        required: true,
                                        pattern: /^\d+$/,
                                    })}
                                    error={!!errors.loanAmount}
                                    helperText={errors.loanAmount?.message}
                                    onChange={handleNumericInput}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="loan-duration-label">Loan Duration (in months)</InputLabel>
                                    <Select
                                        labelId="loan-duration-label"
                                        id="loan-duration"
                                        label="Loan Duration (in months)"
                                        {...register('duration', { required: true })}
                                        error={!!errors.duration}
                                    >
                                        {LOAN_DURATION.map((duration) => (
                                            <MenuItem key={duration} value={duration}>
                                                {duration} months
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </>
                    )}
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleGoBack}
                            fullWidth
                        >
                            Go Back
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        >
                            Submit
                        </Button>
                    </Grid>

                </Grid>
            </form>
        </Container>
    );
};

export default FormComponent;

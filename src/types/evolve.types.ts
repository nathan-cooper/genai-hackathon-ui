import { NavigateFunction } from "react-router-dom";

export interface ProductDetail {
    id: string;
    Product?: string;
    Column1: string;
    Column2: string;
    Column3: string;
}

export interface Product {
    id: string;
    productName: string;
    image?: string;
    productDetail: ProductDetail;
}

export interface CreditCard extends Product {
    annualFee?: number | null;
    apr: string;
    rewards?: string | null;
    introOffer?: string | null;
}

export interface Loan extends Product {
    apr: string;
    loanAmount: string;
    loanTerm: string;
}

export interface Option {
    label: string;
    onSelect: (nav: NavigateFunction) => void;
}

export interface Question {
    id: string;
    question: string;
    options: Option[];
}
import { NavigateFunction } from "react-router-dom";

export interface CardDetail {
    id: string;
    Product: string;
    Column1: string;
    Column2: string;
    Column3: string;
}

export interface CreditCard {
    id: string;
    productName: string;
    image?: string;
    cardDetail: CardDetail;
    annualFee?: number | null;
    apr: string;
    rewards?: string | null;
    introOffer?: string | null;
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
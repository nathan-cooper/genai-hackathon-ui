import { Question } from "../types/evolve.types";

export const DINING_CARDS = ["CR001", "CR003", "CR004"];
export const FUEL_CARDS = ["CR001", "CR003", "CR004"];
export const TRAVEL_CARDS = ["CR002", "CR003", "CR004"];
export const GROCERY_CARDS = ["CR001", "CR004", "CR005"];
export const RENOVATION_CARDS = ["CR006", "CR001", "CR004"];
export const EVERYDAY_CARDS = ["CR004", "CR001", "CR003"];
export const MAX_REWARD_CARDS = ["CR005", "CR002", "CR001"];

export const Q1: Question = {
    id: "Q1",
    question: "What is the reason for your credit application today?",
    options: [
        {
            label: "Substantial one-time expenses or charges", 
            onSelect: (nav) => nav("/unsure?id=Q2")
        },
        {
            label: "Regular shopping and perks", 
            onSelect: (nav) => nav("/unsure?id=Q4")
        }
    ]
}

export const Q2: Question = {
    id: "Q2",
    question: "How do you intend to manage your repayments?",
    options: [
        {
            label: "Regular monthly installments over a fixed period ranging from 12 to 84 months.", 
            onSelect: (nav) => nav("/unsure?id=Q3")
        },
        {
            label: "Make a full payment or at least the minimum required amount by the monthly due date.", 
            onSelect: (nav) => nav("/unsure?id=Q4")
        }
    ]
}

export const Q3: Question = {
    id: "Q3",
    question: "Are you a full-time student in need of a student loan to support your education?",
    options: [
        {
            label: "Yes", 
            onSelect: (nav) => nav("/loanList?list=student")
        },
        {
            label: "No", 
            onSelect: (nav) => nav("/loanList?list=personal")
        }
    ]
}

export const Q4: Question = {
    id: "Q4",
    question: "Where do you anticipate using the credit most frequently in terms of spending categories?",
    options: [
        {
            label: "Dining", 
            onSelect: (nav) => nav("/productList?list=dining")
        },
        {
            label: "Fuel", 
            onSelect: (nav) => nav("/productList?list=fuel")
        },
        {
            label: "Travel", 
            onSelect: (nav) => nav("/productList?list=travel")
        },
        {
            label: "Grocery", 
            onSelect: (nav) => nav("/productList?list=grocery")
        },
        {
            label: "Renovation", 
            onSelect: (nav) => nav("/productList?list=renovation")
        },
        {
            label: "Unsure", 
            onSelect: (nav) => nav("/unsure?id=Q5")
        }
    ]
}

export const Q5: Question = {
    id: "Q5",
    question: "Do you prioritize a card designed for everyday spending or a premium card that offers maximum rewards?",
    options: [
        {
            label: "Everyday Purchase", 
            onSelect: (nav) => nav("/productList?list=everyday")
        },
        {
            label: "Max Rewards", 
            onSelect: (nav) => nav("/productList?list=reward")
        }
    ]
}
import { Question, StatesMap } from "../types/evolve.types";

export const API_URL = "https://credit-lending-api-0-sirishram222-dev.apps.sandbox-m3.1530.p1.openshiftapps.com"
export const CHATBOT_URL = "http://98.81.163.34:8080/";

export const DINING_CARDS = ["CR001", "CR004", "CR003"];
export const FUEL_CARDS = ["CR003", "CR004", "CR001"];
export const TRAVEL_CARDS = ["CR002", "CR004", "CR003"];
export const GROCERY_CARDS = ["CR005", "CR004", "CR001"];
export const RENOVATION_CARDS = ["CR006", "CR001", "CR004"];
export const EVERYDAY_CARDS = ["CR004", "CR001", "CR003"];
export const MAX_REWARD_CARDS = ["CR005", "CR002", "CR001"];
export const US_STATES_MAP: StatesMap = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'FL': 'Florida',
    'GA': 'Georgia',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming',
};
export const LOAN_DURATION = [12, 18, 24, 30, 36, 42, 48];

export const Q1: Question = {
    id: "Q1",
    question: "What is the reason for your credit application today?",
    options: [
        {
            label: "One-time expenses or charges",
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

import { CreditCard } from "../types/evolve.types"
import detailData from "../__data__/detailData.json";
import abstractData from "../__data__/abstractData.json";
import loanData from "../__data__/loanData.json";
import CR001 from "../assets/CR001.png";
import CR002 from "../assets/CR002.png";
import CR003 from "../assets/CR003.png";
import CR004 from "../assets/CR004.png";
import CR005 from "../assets/CR005.png";
import CR006 from "../assets/CR006.png";
import { DINING_CARDS, EVERYDAY_CARDS, FUEL_CARDS, GROCERY_CARDS, MAX_REWARD_CARDS, Q1, Q2, Q3, Q4, Q5, RENOVATION_CARDS, TRAVEL_CARDS } from "../constants/evolve.constants";

export const getLoanList = (query: string | null) => {
    switch (query) {
        case "personal":
            return [loanData[0]];
        case "student":
            return [loanData[1]];
        default:
            return loanData;
    }
}

export const getProductList = (query: string | null) => {
    switch (query) {
        case "travel":
            return populateList(TRAVEL_CARDS);
        case "fuel":
            return populateList(FUEL_CARDS);
        case "grocery":
            return populateList(GROCERY_CARDS);
        case "renovation":
            return populateList(RENOVATION_CARDS);
        case "everyday":
            return populateList(EVERYDAY_CARDS);
        case "reward":
            return populateList(MAX_REWARD_CARDS);
        case "dining": 
            return populateList(DINING_CARDS);
        case "all":
            return populateList(undefined);
        default:
            return populateList(undefined);
    }
}

export const populateList = (idList: string[] | undefined) => {
    if (idList) {
        const newList: CreditCard[] = [];
        idList.forEach((id) => {
            const card = getCreditCard(id);
            if (card) newList.push(card);
        });
        return newList;
    } else {
        const newList: CreditCard[] = [];
        abstractData.forEach((c) => {
            const card = getCreditCard(c.id);
            if (card) newList.push(card);
        });
        return newList;
    }
}

export const getCreditCard = (id: string) => {

    const cardDetail = detailData.find((c) => c.id === id)
    if (!cardDetail) return null;

    const cardData = abstractData.find((c) => c.id === id);
    if (!cardData) return null;

    const card: CreditCard = {
        ...cardData,
        productDetail: cardDetail,
        image: getLogo(id)
    }
    return card;
}

export const getLoan = (id: string) => {
    return loanData.find((l) => l.id === id);
}

export const getQuestion = (id: string | null) => {
    switch (id) {
        case "Q1":
            return Q1;
        case "Q2":
            return Q2;
        case "Q3":
            return Q3;
        case "Q4":
            return Q4;
        case "Q5": 
            return Q5;
        default:
            return Q1;
    }
}

export const getLogo = (id: string) => {
    switch (id) {
        case "CR001":
            return CR001;
        case "CR002":
            return CR002;
        case "CR003":
            return CR003;
        case "CR004":
            return CR004;
        case "CR005":
            return CR005;
        case "CR006":
            return CR006;
        default:
            return undefined;
    }
}
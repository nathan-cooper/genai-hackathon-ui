import { CreditCard } from "../types/evolve.types"
import detailData from "../__data__/detailData.json";
import abstractData from "../__data__/abstractData.json";
import CR001 from "../assets/CR001.png";
import CR002 from "../assets/CR002.png";
import CR003 from "../assets/CR003.png";
import CR004 from "../assets/CR004.png";
import CR005 from "../assets/CR005.png";
import CR006 from "../assets/CR006.png";
import { DINING_CARDS, EVERYDAY_CARDS, FUEL_CARDS, GROCERY_CARDS, MAX_REWARD_CARDS, RENOVATION_CARDS, TRAVEL_CARDS } from "../constants/evolve.constants";

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

const populateList = (idList: string[] | undefined) => {
    if (idList) {
        const newList: CreditCard[] = [];
        idList.forEach((id) => {
            const cardDetail = detailData.find((c) => c.id === id)
            if (!cardDetail) return;
            const cardData = abstractData.find((c) => c.id === id);
            if (!cardData) return;
            newList.push({
                ...cardData,
                cardDetail: cardDetail,
                image: getLogo(cardData.id)
            })
        });
        return newList;
    } else {
        const newList: CreditCard[] = [];
        abstractData.forEach((card) => {
            const cardDetail = detailData.find((c) => c.id === card.id)
            if (!cardDetail) return;
            newList.push({
                ...card,
                cardDetail: cardDetail,
                image: getLogo(card.id)
            })
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
        cardDetail: cardDetail,
        image: getLogo(id)
    }
    console.log(card);
    return card;
}

const getLogo = (id: string) => {
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
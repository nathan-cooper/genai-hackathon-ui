// getLoan.test.ts
import { getCreditCard, getLoan, getLoanList, getLogo, getProductList, getQuestion, populateList } from './cardHelper';
import { describe, test, expect } from "vitest";
import loanData from "../__data__/loanData.json";
import detailData from "../__data__/detailData.json";
import abstractData from "../__data__/abstractData.json";
import { DINING_CARDS, EVERYDAY_CARDS, FUEL_CARDS, GROCERY_CARDS, MAX_REWARD_CARDS, Q1, Q2, Q3, Q4, Q5, RENOVATION_CARDS, TRAVEL_CARDS } from '../constants/evolve.constants';

describe("getCreditCard", () => {
    test("should return the correct credit card object for an existing id", () => {
        const c = getCreditCard("CR001");
        expect(c).toEqual({
            ...abstractData[0],
            productDetail: {
                ...detailData[0]
            },
            image: getLogo("CR001")
        });
    });

    test("should return null for a non-existing id", () => {
        const c = getCreditCard("CR999");
        expect(c).toBeNull();
    });
});

describe("populateList", () => {
    test("should return the correct list for a valid category", () => {
        const list = populateList(TRAVEL_CARDS);
        expect(list).toEqual([
            getCreditCard("CR002"),
            getCreditCard("CR003"),
            getCreditCard("CR004")
        ]);
    });

    test("should return the full list if no category is provided", () => {
        const list = populateList(undefined);
        expect(list).toEqual([getCreditCard("CR001"), getCreditCard("CR002"), getCreditCard("CR003"), getCreditCard("CR004"), getCreditCard("CR005"), getCreditCard("CR006")]);
    })
})

describe('getLoan', () => {
    test('returns the correct loan object when a valid id is provided', () => {
        const loan = getLoan('LN001');
        expect(loan).toEqual(loanData[0]);
    });

    test('returns undefined when an invalid id is provided', () => {
        const loan = getLoan('4');
        expect(loan).toBeUndefined();
    });

    test('returns undefined when an empty id is provided', () => {
        const loan = getLoan('');
        expect(loan).toBeUndefined();
    });
});

describe('getLoanList', () => {
    const testCases = [
        { query: 'personal', expected: [loanData[0]] },
        { query: 'student', expected: [loanData[1]] },
        { query: null, expected: loanData },
        { query: 'invalid', expected: loanData },
    ];

    test.each(testCases)(
        'returns the correct loan list when query is "$query"',
        ({ query, expected }) => {
            const result = getLoanList(query);
            expect(result).toEqual(expected);
        }
    );
});

describe('getProductList', () => {
    const testCases = [
        { query: 'travel', expected: populateList(TRAVEL_CARDS) },
        { query: 'fuel', expected: populateList(FUEL_CARDS) },
        { query: 'grocery', expected: populateList(GROCERY_CARDS) },
        { query: 'renovation', expected: populateList(RENOVATION_CARDS) },
        { query: 'everyday', expected: populateList(EVERYDAY_CARDS) },
        { query: 'reward', expected: populateList(MAX_REWARD_CARDS) },
        { query: 'dining', expected: populateList(DINING_CARDS) },
        { query: 'all', expected: populateList(undefined) },
        { query: null, expected: populateList(undefined) },
        { query: 'invalid', expected: populateList(undefined) },
    ];

    test.each(testCases)(
        'returns $expected when query is "$query"',
        ({ query, expected }) => {
            const result = getProductList(query);
            expect(result).toEqual(expected);
        }
    );
});

describe('getQuestion', () => {
    const testCases = [
        { id: 'Q1', expected: Q1 },
        { id: 'Q2', expected: Q2 },
        { id: 'Q3', expected: Q3 },
        { id: 'Q4', expected: Q4 },
        { id: 'Q5', expected: Q5 },
        { id: null, expected: Q1 },
        { id: 'INVALID', expected: Q1 },
    ];

    test.each(testCases)(
        'returns $expected when id is "$id"',
        ({ id, expected }) => {
            const result = getQuestion(id);
            expect(result).toEqual(expected);
        }
    );
});

describe('getLogo', () => {
    const testCases = [
        { id: 'CR001', expected: '/src/assets/CR001.png' },
        { id: 'CR002', expected: '/src/assets/CR002.png' },
        { id: 'CR003', expected: '/src/assets/CR003.png' },
        { id: 'CR004', expected: '/src/assets/CR004.png' },
        { id: 'INVALID', expected: undefined },
        { id: '', expected: undefined },
    ];

    test.each(testCases)(
        'returns $expected when id is "$id"',
        ({ id, expected }) => {
            const result = getLogo(id);
            expect(result).toBe(expected);
        }
    );
});
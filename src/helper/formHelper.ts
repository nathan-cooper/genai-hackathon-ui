import { US_STATES_MAP } from "../constants/evolve.constants";
import { StatesMap } from "../types/evolve.types";

export const populateStateList = () => {
    const states = [] as StatesMap[];
    const stateKeys = Object.keys(US_STATES_MAP);

    for (const key of stateKeys) {
        states.push({ code: key, name: US_STATES_MAP[key] });
    }

    return states;
};
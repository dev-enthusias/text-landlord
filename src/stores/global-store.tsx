import { create } from "zustand";

interface State {
  countryId: number | string;
  stateId: number | string;
}

interface Action {
  updateCountryId: (firstName: State["countryId"]) => void;
  updateStateId: (firstName: State["stateId"]) => void;
}

export const useGlobalStore = create<State & Action>((set) => ({
  countryId: "",
  stateId: "",
  updateCountryId: (countryId) => set(() => ({ countryId: countryId })),
  updateStateId: (stateId) => set(() => ({ stateId: stateId })),
}));

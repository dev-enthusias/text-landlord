import { create } from "zustand";

interface RegistrationStore {
  registrationDetails: any;
  updateRegistrationDetails: (updatedDetails: any) => void;
  asyncUpdateRegistrationDetails: (details: Partial<any>) => Promise<void>;
}

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  registrationDetails: {},
  updateRegistrationDetails: (updatedDetails: any) =>
    set((state) => ({
      registrationDetails: { ...state.registrationDetails, ...updatedDetails },
    })),
  asyncUpdateRegistrationDetails: (updatedDetails: any) =>
    new Promise<void>((resolve) => {
      set((state) => ({
        registrationDetails: {
          ...state.registrationDetails,
          ...updatedDetails,
        },
      }));
      resolve();
    }),
}));

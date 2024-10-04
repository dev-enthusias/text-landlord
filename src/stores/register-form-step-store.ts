import { createStore } from "zustand/vanilla";

export type FormStepState = {
  step: number;
};

export type FormStepActions = {
  prevStep: () => void;
  nextStep: () => void;
  updateStep: (currentStep: number) => void;
};

export type FormStepStore = FormStepState & FormStepActions;

export const defaultInitState: FormStepState = {
  step: 0,
};

export const createFormStepStore = (
  initState: FormStepState = defaultInitState,
) => {
  return createStore<FormStepStore>()((set) => ({
    ...initState,
    prevStep: () => set((state) => ({ step: state.step - 1 })),
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    updateStep: (currentStep: number) => set(() => ({ step: currentStep })),
  }));
};

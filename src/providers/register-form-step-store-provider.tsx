"use client";

import {
  createFormStepStore,
  FormStepStore,
} from "@/stores/register-form-step-store";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

export type FormStepStoreApi = ReturnType<typeof createFormStepStore>;

export const FormStepStoreContext = createContext<FormStepStoreApi | undefined>(
  undefined,
);

export interface CounterStoreProviderProps {
  children: ReactNode;
}

export const FormStepStoreProvider = ({
  children,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<FormStepStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createFormStepStore();
  }

  return (
    <FormStepStoreContext.Provider value={storeRef.current}>
      {children}
    </FormStepStoreContext.Provider>
  );
};

export const useFormStepStore = <T,>(
  selector: (store: FormStepStore) => T,
): T => {
  const formStepStoreContext = useContext(FormStepStoreContext);

  if (!formStepStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(formStepStoreContext, selector);
};

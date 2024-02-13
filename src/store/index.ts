import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { GlobalStore, GlobalStoreActions } from "@/types/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useGLobalStore = create<GlobalStore & GlobalStoreActions>()(
    persist(
        (set, get) => ({ 
            userToken: "",
            isLoading: false,

            // Actions
            signOut: () => set({ userToken: "" }),
            signIn: (userToken: string) => set({ userToken }),
            restoreToken: (userToken: string) => set({ userToken }),
            setIsLoading: (isLoading: boolean) => set({ isLoading }),
        }),
        {
            name: "global-store",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);

export default useGLobalStore;
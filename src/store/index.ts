import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { GlobalStore, GlobalStoreActions } from "@/types/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useGLobalStore = create<GlobalStore & GlobalStoreActions>()(
    persist(
        (set, get) => ({ 
            userToken: "",
            isLoading: false,

            //user info
            firstname: "",
            lastname: "",
            wallet: 0,

            // Actions
            signOut: () => {
                set({ userToken: "" });
                AsyncStorage.removeItem("userToken");
            },
            signIn: (userToken: string, firstname:string, lastname:string, wallet:number) => {
                set({ userToken, firstname, lastname, wallet})
                AsyncStorage.setItem("userToken", userToken);
            },
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
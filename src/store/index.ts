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
            user: null,
            createNourrains: [],
            joinedNourrains: [],

            // Actions
            signIn: (userToken: string) => {
                set({ userToken})
                AsyncStorage.setItem("userToken", userToken);
            },
            signOut: () => {
                set({ userToken: "" });
                AsyncStorage.removeItem("userToken");
            },
            restoreToken: (userToken: string) => set({ userToken }),
            setIsLoading: (isLoading: boolean) => set({ isLoading }),
            // setUser: (user) => set({ user }),
            // setCreateNourrains: (createNourrains) => set({ createNourrains }),
            // setJoinedNourrains: (joinedNourrains) => set({ joinedNourrains }),
            setUserData: (user, createNourrains, joinedNourrains) => {
                set({ user, createNourrains, joinedNourrains });
            }
        }),
        {
            name: "global-store",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);

export default useGLobalStore;
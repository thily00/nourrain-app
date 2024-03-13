import { User, Nourrain } from './app';
export type GlobalStore = {
    userToken : string;
    isLoading : boolean;
    user: User | null;
    createNourrains: Nourrain[] | [];
    joinedNourrains: Nourrain[] | [];
};

export type GlobalStoreActions = {
    signOut: () => void;
    restoreToken: (userToken: string) => void;
    setIsLoading: (isLoading: boolean) => void;
    signIn: (userToken: string) => void;
    setUserData: (user: User, createNourrains: Nourrain[], joinedNourrains: Nourrain[]) => void;
}
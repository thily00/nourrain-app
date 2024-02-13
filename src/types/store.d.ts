export type GlobalStore = {
    userToken : string;
    isLoading : boolean;
};

export type GlobalStoreActions = {
    signOut: () => void;
    restoreToken: (userToken: string) => void;
    setIsLoading: (isLoading: boolean) => void;
    signIn: (userToken: string, accountType: string) => void;
}
export type GlobalStore = {
    userToken : string;
    isLoading : boolean;
    firstname: string;
    lastname: string;
    wallet: number;
};

export type GlobalStoreActions = {
    signOut: () => void;
    restoreToken: (userToken: string) => void;
    setIsLoading: (isLoading: boolean) => void;
    signIn: (userToken: string, firstname:string, lastname:string, wallet: number) => void;
}
import { createContext, ReactNode } from "react";

interface AuthProviderProps {
    children: ReactNode
}

interface UserProps {
    name: string
    avatarUrl: string
}

export interface AuthContextDataProps {
    user: UserProps
    signIn: () => Promise<void>
}

export const AuthContext = createContext({

} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
    async function signIn() {

    }

    return (
        <AuthContext.Provider value={{
            signIn: signIn,
            user: {
                name: 'Zé da Ema',
                avatarUrl: 'https://avatars.githubusercontent.com/u/1813125?s=96&v=4'
            }
        }}>
            { children }
        </AuthContext.Provider>
    )
}
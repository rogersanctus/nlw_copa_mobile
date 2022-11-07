import { createContext, ReactNode, useEffect, useState } from "react";
import { makeRedirectUri } from "expo-auth-session";
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'

interface AuthProviderProps {
    children: ReactNode
}

interface UserProps {
    name: string
    avatarUrl: string
}

export interface AuthContextDataProps {
    user: UserProps
    isUserLoading: boolean
    signIn: () => Promise<void>
}

export const AuthContext = createContext({

} as AuthContextDataProps)

WebBrowser.maybeCompleteAuthSession()

export function AuthContextProvider({ children }: AuthProviderProps) {
    const [ isUserLoading, setIsUserLoading ] = useState(false)
    const [ user, setUser ] = useState({} as UserProps)
    const redirectUri = makeRedirectUri({ useProxy: true })

    const [ request, response, promptAsync ] = Google.useAuthRequest({
        clientId: '323853255012-ifnpe5r2l4k0ljphakoiul3re61gttr6.apps.googleusercontent.com',
        clientSecret: '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',
        redirectUri,
        scopes: ['profile', 'email']
    })

    function signInWithGoogle(token: string) {
        console.log('TOKEN: ', token)
    }

    useEffect(() => {
        if(response?.type === 'success' && response.authentication?.accessToken) {
            signInWithGoogle(response.authentication.accessToken)
        }
    }, [response])

    async function signIn() {
        try {
            setIsUserLoading(true)
            await promptAsync()
        } catch(error) {
            console.error(error)
            throw error
        } finally {
            setIsUserLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{
            signIn: signIn,
            isUserLoading,
            user
        }}>
            { children }
        </AuthContext.Provider>
    )
}
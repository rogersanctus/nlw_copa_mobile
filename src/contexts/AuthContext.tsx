import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import { makeRedirectUri } from "expo-auth-session"
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { api } from "../services/api"

interface AuthProviderProps {
    children: ReactNode
}

interface UserProps {
    name: string
    avatarUrl: string
}

export interface AuthContextDataProps {
    user: UserProps | null
    isUserLoggedIn: boolean
    setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>
    isUserLoading: boolean
    signIn: () => Promise<void>
}

export const authContext = createContext({} as AuthContextDataProps)

WebBrowser.maybeCompleteAuthSession()

export function AuthContextProvider({ children }: AuthProviderProps) {
    const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false)
    const [ isUserLoading, setIsUserLoading ] = useState(false)
    const [ user, setUser ] = useState({} as UserProps)
    const redirectUri = makeRedirectUri({ useProxy: true })

    const [ request, response, promptAsync ] = Google.useAuthRequest({
        clientId: '323853255012-ifnpe5r2l4k0ljphakoiul3re61gttr6.apps.googleusercontent.com',
        clientSecret: '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',
        redirectUri,
        scopes: ['profile', 'email']
    })

    async function signInWithGoogle(access_token: string) {
        console.log('TOKEN: ', access_token)

        try {
            setIsUserLoading(true)
            
            const { data: tokenData } = await api.post('/auth', { access_token })
            api.defaults.headers.common['Authorization'] = 'Bearer ' + tokenData.token

            const { data: userData } = await api.get('/whoami')
            setIsUserLoggedIn(true)
            console.log('User: ', userData)
            setUser(userData)

        } catch(error) {
            console.error(error)
            throw error
        } finally {
            setIsUserLoading(false)
        }
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
        <authContext.Provider value={{
            isUserLoggedIn,
            setIsUserLoggedIn,
            signIn: signIn,
            isUserLoading,
            user
        }}>
            { children }
        </authContext.Provider>
    )
}
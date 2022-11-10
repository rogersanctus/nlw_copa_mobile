import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import {api} from '../lib/api';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

interface AuthProviderProps {
  children: ReactNode;
}

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps | null;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
  isUserLoading: boolean;
  signIn: () => Promise<void>;
}

export const authContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({children}: AuthProviderProps) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [user, setUser] = useState({} as UserProps);

  GoogleSignin.configure({
    scopes: ['profile', 'email'],
  });

  async function signInWithGoogle(access_token: string) {
    console.log('TOKEN: ', access_token);

    try {
      const {data: tokenData} = await api.post('/auth', {access_token});
      api.defaults.headers.common.Authorization = 'Bearer ' + tokenData.token;

      const {data: userData} = await api.get('/whoami');
      setIsUserLoggedIn(true);
      console.log('User: ', userData);
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  }

  async function signIn() {
    try {
      setIsUserLoading(true);
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const {accessToken} = await GoogleSignin.getTokens();

      await signInWithGoogle(accessToken);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUserLoading(false);
    }
  }

  return (
    <authContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        signIn: signIn,
        isUserLoading,
        user,
      }}>
      {children}
    </authContext.Provider>
  );
}

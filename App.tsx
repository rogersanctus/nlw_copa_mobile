import { NativeBaseProvider, StatusBar } from 'native-base'

import { THEME } from './src/styles/theme'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading'
import React from 'react'
import { Routes } from './src/routes'
import { AuthContextProvider } from './src/contexts/AuthContext'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })
  
  return (
    <AuthContextProvider>
      <NativeBaseProvider theme={THEME}>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
          {
            fontsLoaded ? <Routes /> : <Loading />
          }
      </NativeBaseProvider>
    </AuthContextProvider>
  );
}

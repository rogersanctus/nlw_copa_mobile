import { Center, NativeBaseProvider, StatusBar } from 'native-base'

import { THEME } from './src/styles/theme'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading'
import React from 'react'
import { SignIn } from './src/screens/SignIn'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })
  
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
      <Center flex={1} bgColor="gray.900">
        {
          fontsLoaded ? <SignIn /> : <Loading />
        }
      </Center>
    </NativeBaseProvider>
  );
}

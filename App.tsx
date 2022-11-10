import {NativeBaseProvider, StatusBar} from 'native-base';

import {THEME} from './src/styles/theme';
import {Routes} from './src/routes';
import {AuthContextProvider} from './src/contexts/AuthContext';
import {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthContextProvider>
      <NativeBaseProvider theme={THEME}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </NativeBaseProvider>
    </AuthContextProvider>
  );
}

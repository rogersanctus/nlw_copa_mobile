import {NavigationContainer} from '@react-navigation/native';
import {SignIn} from '../screens/SignIn';
import {AppRoutes} from './app.routes';

import {useAuth} from '../hooks/useAuth';
import {Box} from 'native-base';

function UserScreen() {
  const {isUserLoggedIn} = useAuth();

  if (isUserLoggedIn) {
    return <AppRoutes />;
  }

  return <SignIn />;
}

export function Routes() {
  console.log('Rendering Routes...');
  return (
    <Box flex={1} bg="gray.900">
      <NavigationContainer>
        <UserScreen />
      </NavigationContainer>
    </Box>
  );
}

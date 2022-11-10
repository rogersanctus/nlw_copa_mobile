import {NavigationContainer} from '@react-navigation/native';
import {SignIn} from '../screens/SignIn';
import {AppRoutes} from './app.routes';

import {useAuth} from '../hooks/useAuth';
import {Box} from 'native-base';

function UserScreen() {
  const {isUserLoggedIn} = useAuth();
  console.log('User logged in: ', isUserLoggedIn);

  if (isUserLoggedIn) {
    console.log('Rendering AppRoutes...');
    return <AppRoutes />;
  }

  console.log('Rendering SignIn...');
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

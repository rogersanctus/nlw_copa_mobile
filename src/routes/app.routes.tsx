import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'native-base';
import {IconProps, PlusCircle, SoccerBall} from 'phosphor-react-native';
import {Platform} from 'react-native';
import {NewPool} from '../screens/NewPool';
import {Pools} from '../screens/Pools';
import {FindPool} from '../screens/FindPool';
import {useCallback} from 'react';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
  const {colors, sizes} = useTheme();

  const iconSize = sizes[6];

  const MyPollsIcon = useCallback(
    ({color}: IconProps) => <SoccerBall color={color} size={iconSize} />,
    [iconSize],
  );

  const NewPollIcon = useCallback(
    ({color}: IconProps) => <PlusCircle color={color} size={iconSize} />,
    [iconSize],
  );

  return (
    <Navigator
      initialRouteName="new"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: colors.yellow[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          position: 'absolute',
          height: sizes[16],
          borderTopWidth: 0,
          backgroundColor: colors.gray[800],
        },
        tabBarItemStyle: {
          position: 'relative',
          top: Platform.OS === 'android' ? -3 : 0,
        },
      }}>
      <Screen
        name="new"
        component={NewPool}
        options={{
          tabBarLabel: 'Novo Bolão',
          tabBarIcon: NewPollIcon,
        }}
      />
      <Screen
        name="polls"
        component={Pools}
        options={{
          tabBarLabel: 'Bolões',
          tabBarIcon: MyPollsIcon,
        }}
      />
      <Screen
        name="find"
        component={FindPool}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}

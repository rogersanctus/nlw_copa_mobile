import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'
import { PlusCircle, SoccerBall } from 'phosphor-react-native'
import { Platform } from 'react-native'
import { NewPool } from '../screens/NewPool'
import { Pools } from '../screens/Pools'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    const { colors, sizes } = useTheme()

    const iconSize = sizes[6]

    return (
        <Navigator
            initialRouteName='new'
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'beside-icon',
                tabBarActiveTintColor: colors.yellow[500],
                tabBarInactiveTintColor: colors.gray[300],
                tabBarStyle: {
                    position: 'absolute',
                    height: sizes[14],
                    borderTopWidth: 0,
                    backgroundColor: colors.gray[800]
                },
                tabBarItemStyle: {
                    position: 'relative',
                    top: Platform.OS === 'android' ? -3 : 0
                }
            }}>
            <Screen
                name="new"
                component={NewPool}
                options={{
                    tabBarLabel: 'Novo Bolão',
                    tabBarIcon: ({ color }) => <PlusCircle color={color} size={iconSize} />
                }} />
            <Screen
                name="polls"
                component={Pools}
                options={{
                    tabBarLabel: 'Bolões',
                    tabBarIcon: ({ color }) => <SoccerBall color={color} size={iconSize} />
                }} />
        </Navigator>
    )
}
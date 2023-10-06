import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons";

const {Screen, Navigator} = createBottomTabNavigator();

import { ScreenA } from '../screens/Home';
import { ScreenB } from '../screens/Cadastro';

export function TabRoutes(){
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'purple'
            }}
        >
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    tabBarLabel: 'Tela A',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name='home'
                            color={color}
                            size={size}
                        
                        />
                    )
                }}
                
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    tabBarLabel: 'Tela B',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name='star'
                            color={color}
                            size={size}
                    
                        />
                    )
                }}
            />
        </Navigator>
    )
}
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

const {Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/Home';
import { screenB } from '../screens/Cadastro';
import { ScreenC } from '../screens/Lista';

export function DrawerRoutes(){
    return(
        <Navigator>
            <Screen
                name='Home'
                component={ScreenA}
                
            />
            <Screen
                name='Cadastro'
                component={screenB}
            />
             <Screen
                name='Lista'
                component={ScreenC}
            />
        </Navigator>
    )
}
import React from 'react'
import { Pressable } from 'react-native'


import { createDrawerNavigator } from '@react-navigation/drawer';
import { windowWidth, blue } from '../theme/globals';

import HomeScreen from '../screens/home/HomeScreen';
import { Icon } from '../components/icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import CustomDrawerContent from '../components/CustomDrawerContent';
import OrdenScreen from '../screens/OrdenesScreen';
import ProfileScreen from '../screens/profileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigattor = () => {

    const navigation = useNavigation()

    const onMenuPress = () => navigation.dispatch(DrawerActions.openDrawer())

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: 'white',
                    width: windowWidth * 0.83,
                },
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    headerStyle: {
                        backgroundColor: blue,
                        elevation: 0,
                    },
                    headerTintColor: 'white',
                    headerLeft: false,
                    headerRight: () => (
                        <Pressable onPress={onMenuPress}>
                            <Icon name="menu" color="white" />
                        </Pressable>
                    ),
                    headerTitle: ""
                }}
            />
            <Drawer.Screen
                name="OrdenScreen"
                component={OrdenScreen}
                options={{
                    headerShown: false,
                }}

            />
            <Drawer.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                 options={{
                     headerShown: false,
                 }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigattor

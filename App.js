import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigattor from './src/navigators/Drawer';
import AuthStack from './src/navigators/AuthStack';
import { PermissionsProvider } from './src/context/PermissionsContext';

const Stack = createStackNavigator();

const AppState = ({ children }) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )

}

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    storageUserToken()
  }, [])

  const storageUserToken = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken')
      if (value !== null) {
        // value previously stored
        setIsSignedIn(true)
      }
    } catch (e) {
      // error reading value
      console.log("TOKEN NO ALMACENANDO:", e)
      setIsSignedIn(false)
    }
  }



  return (
    <NavigationContainer>
      <AppState>
        {
          isSignedIn ? (
            <DrawerNavigattor />
          ) : (
            <AuthStack />
          )
        }
      </AppState>
    </NavigationContainer>
  )
}

export default App
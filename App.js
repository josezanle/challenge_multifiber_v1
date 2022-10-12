import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const url = 'https://webhooks.multifiber.cl/api/v1/auth/obtain_token/'
const config = {
  "username": "prueba_user",
  "password": "V5LEh7v7G5y8sByz"
}

const App = () => {

  const [userToken, setUserToken] = useState(null)


  const getUserToken = async () => {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(config)
    })
    const json = await response.json()
    setUserToken(json.token)

  }

  useEffect(() => {
    getUserToken()
  }, [])
  console.log(userToken)

  const Home = () => { 
    return (
      <View>
        <Text>{userToken !== null | userToken !== undefined ? userToken : "No hay Token"}</Text>
      </View>
    )
   }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
      

    </NavigationContainer>
  )
}

export default App
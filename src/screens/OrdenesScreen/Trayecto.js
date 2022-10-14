import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import PermissionsScreen from '../permissionsScreen';

import { PermissionsContext } from '../../context/PermissionsContext';

const Trayecto = () => {
  const { permissions } = useContext(PermissionsContext);
  const initialPosition = {
    latitude: - 33.417356902070914,
    longitude: -70.60418962859488,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,

  }

  return (
    <View style={styles.container}>
      {
        (permissions.locationStatus === 'granted')
          ? (
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.container}
              initialRegion={initialPosition}
            >
              <Marker
                coordinate={{ latitude: initialPosition.latitude, longitude: initialPosition.longitude }}
              />
            </MapView>
          )
          : <PermissionsScreen />
      }

    </View>
  )
}

export default Trayecto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%"
  }
})
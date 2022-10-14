import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '../../components/Box'
import { PADDING, windowWidth } from '../../theme/globals'

const Cliente = () => {
  return (
    <View style={styles.container}>
      <Box
        color="white"
        width={windowWidth - PADDING * 2}
        borderColor="white"
      >
        <Text>Cliente</Text>
      </Box>
    </View>
  )
}

export default Cliente

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f2f2",
    width: "100%",
    padding: PADDING
  }
})
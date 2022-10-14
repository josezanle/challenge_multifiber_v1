import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { H5, H6, lightBlue, lightBlueBackground, PADDING, windowWidth } from '../../theme/globals'
import Box from '../../components/Box'

const Preguntas = () => {
  return (
    <View style={styles.container}>
      <Box
        width={windowWidth - PADDING * 2}
        color={lightBlueBackground}
        borderColor={lightBlue}
      >
        <Text style={styles.title} >Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        <Text style={styles.desc} >Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      </Box>
    </View>
  )
}

export default Preguntas

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f2f2",
    width: "100%",
    padding: PADDING
  },
  title: {
    fontSize: H6,
    fontWeight: "700"
  },
  desc: {
    marginTop: 5
  },
})
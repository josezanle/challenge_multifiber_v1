import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Circle = ({ size, color, borderWidth, borderColor, children }) => {
  let circle = {
    width: size || 25,
    height: size || 25,
    backgroundColor: color || "silver",
    borderRadius: size || 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: borderWidth || 1,
    borderColor: borderColor || "silver",
  }

  return (
    <View style={circle}>
      {children}
    </View>
  )
}

export default Circle


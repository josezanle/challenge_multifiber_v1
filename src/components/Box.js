import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = ({ width, color, borderWidth, borderColor, borderRadius, children }) => {
    let box = {
        width: width || 25,
        backgroundColor: color || "silver",
        borderRadius: borderRadius || 5,
        borderWidth: borderWidth || 1,
        borderColor: borderColor || "silver",
        paddingHorizontal: 20,
        paddingVertical: 25
    }

    return (
        <View style={box}>
            {children}
        </View>
    )
}

export default Box


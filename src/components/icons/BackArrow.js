import React from 'react'
import {View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const BackArrow = ({ color, size }) => {
    let icon = {
        width: size || 25,
        height: size || 25,
        fill: color || "silver",
    }


    return (
        <View>
            <Svg viewBox="0 0 320 512" style={icon}>
                <Path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </Svg>
        </View>
    )
}
export default BackArrow

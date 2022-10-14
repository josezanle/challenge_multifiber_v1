import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { PADDING } from '../../theme/globals'

const Menu = ({ color, size }) => {

    let icon = {
        width: size || 25,
        height: size || 25,
        fill: color || "silver",
    }
    return (
        <View style={styles.arrowBackMargin}>
            <Svg viewBox="0 0 448 412" style={icon}>
                <Path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </Svg>
        </View>
    )
}

export default Menu
const styles = StyleSheet.create({
    arrowBackMargin: {
        marginRight: PADDING,
    },
})
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blue, fontColor, H6, PADDING, windowWidth, yellow } from '../../theme/globals'
import Box from '../../components/Box'
import Circle from '../../components/Circle'
import Br from '../../components/Br'


const Datos = () => {
    return (
        <View style={styles.container}>
            <Box
                color="white"
                width={windowWidth - PADDING * 2}
                borderColor="white"
            >
                <View style={styles.row}>
                    <Text style={styles.userId}>Agendamiento</Text>
                    <View style={styles.userDate}>
                        <Text style={{ color: blue }}>22/08/22</Text>
                        <Text style={{ color: fontColor }}>4:00pm</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={{ color: fontColor }}>Plan Familiar Full 5G   </Text>
                    <Text style={styles.userId}>FTTH</Text>
                </View>
                <View style={styles.row}>
                    <Circle color={yellow} borderColor={yellow} size={10} ></Circle>
                    <Text style={styles.type}>Visita Tecnica con servicio</Text>
                </View>
                <Text style={styles.linkText}>Corte de fibra en la roseta</Text>
                <Br />
                <Pressable style={[styles.button,{width:100}]}>
                    <Text style={styles.buttonText}>Agendada</Text>
                </Pressable>
            </Box>
            <Br />
            <Pressable style={[styles.button, { height: 40 }]}>
                <Text style={styles.buttonText}>Siguiente</Text>
            </Pressable>
        </View>
    )
}

export default Datos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f2f2",
        width: "100%",
        padding: PADDING,
        justifyContent:"space-between"
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    userId: {
        flex: 1,
        fontWeight: "600",
        fontSize: H6,
        color: fontColor
    },
    type: {
        fontWeight: "600",
        fontSize: 14,
        paddingLeft: 10,
        color: fontColor
    },
    linkText: {
        fontWeight: "600",
        fontSize: 14,
        color: blue
    },
    userDate: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        color: fontColor
    },
    button: {
        backgroundColor: "#2a80fe",
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 3,
        justifyContent:"center",
        alignItems:"center",
    },
    buttonText: {
        color: "white",
        fontWeight: "300",
        textAlign: "center"
    },
})
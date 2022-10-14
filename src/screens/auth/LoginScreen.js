import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, Button, ToastAndroid } from 'react-native'
import { Svg, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { apiLogin } from '../../api/auth';
import { blue, colorWhite, fontColor, globalStyles, H1, H2, H4, H5, H6, lightGrey, lightGreyBackground, PADDING } from '../../theme/globals'
import { useNavigation } from '@react-navigation/native';

const { center } = globalStyles;

const darkBlue = "#00388b"
const Blue = "#0a56f9"

const GradientBg = () => {
    return (
        <Svg style={styles.gradientBox}>
            <Defs>
                <LinearGradient id="defaultUnits" x1="0%" y1="0%" x2="0%" y2="100%">
                    <Stop offset="100%" stopColor={Blue} stopOpacity="1" />
                    <Stop offset="0%" stopColor={darkBlue} stopOpacity="1" />
                </LinearGradient>
            </Defs>
            <Rect
                fill="url(#defaultUnits)"
                width="100%"
                height="100%"
            >
            </Rect>
        </Svg>
    )
}

const comingSoon = () => {
    ToastAndroid.show("Muy Pronto Disponible", ToastAndroid.CENTER);
};
const LoginScreen = () => {
    const [username, setUsername] = useState("prueba_user")
    const [password, setPassword] = useState("V5LEh7v7G5y8sByz")
    const navigation = useNavigation()

    const user = { username, password }

    const handleLogin = () => {
        apiLogin(user)
            .then(res => {
                AsyncStorage.setItem('userToken', res)
                navigation.navigate("HomeStack")
            })
    }

    return (
        <View style={styles.container}>
            <GradientBg />
            <View style={styles.top}>
                <Text style={styles.title}>Inicio de sesión</Text>
                <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur</Text>

            </View>
            <View style={styles.bottom}>
                <View style={{ padding: 10 }}>
                    <Text style={styles.inputLabel}>Correo electronico*</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setUsername(text)}
                        keyboardType="email-address"
                        value={username}
                    />

                    <Text style={styles.inputLabel}>Contraseña*</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        keyboardType="password"
                    />
                    <Pressable onPress={comingSoon}>
                        <Text style={styles.recuperar}>Recuperar Contraseña?</Text>
                    </Pressable>

                    <Pressable onPress={handleLogin} style={[styles.button, center]}>
                        <Text style={colorWhite}>Ingresar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Blue,
        position: "relative"
    },
    gradientBox: {
        width: "100%",
        height: 290,
        position: "absolute",
        top: 0,
        left: 0
    },
    top: {
        height: 290,
        padding: PADDING,
        justifyContent: "flex-end",
        paddingBottom: 40,
    },
    title: {
        color: "white",
        fontWeight: "500",
        fontSize: H1
    },
    desc: {
        color: "white",
        fontWeight: "300",
        fontSize: H5,
        width: "70%"
    },
    bottom: {
        height: "100%",
        padding: PADDING,
        backgroundColor: lightGreyBackground,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    inputLabel: {
        color: fontColor,
        fontSize: H6,
        fontWeight: "700",
        marginBottom: 10,
        paddingLeft: 1
    },
    input: {
        width: "100%",
        height: 45,
        paddingLeft: 15,
        backgroundColor: "white",
        color: "grey",
        borderRadius: 5,
        borderColor: lightGrey,
        borderWidth: 2,
        marginBottom: 15
    },
    recuperar: {
        width: "100%",
        height: 40,
        textAlign: "right",
        color: Blue,
        fontWeight: "500",
        marginBottom: 10
    },
    button: {
        width: "100%",
        height: 40,
        backgroundColor: "#2a80fe",
        borderRadius: 4,
    },

})
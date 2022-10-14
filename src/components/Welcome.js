import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileAvatar from './ProfileAvatar'

const profileAvatarExample = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const Welcome = () => {
    return (
        <View style={styles.welcomeBox}>
            <View style={styles.textContent}>
                <Text style={styles.title}>Bienvenido a Brújula</Text>
                <Text style={styles.desc}>Visualiza tus órdenes de</Text>
                <Text style={styles.desc}>servicio del día</Text>
            </View>
            <ProfileAvatar size={67} source={profileAvatarExample} />
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    welcomeBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 20

    },
    textContent: {
        justifyContent: "center",
    },
    title: {
        color: "white",
        fontSize: 17,
        marginBottom: 5,
        fontWeight:"400"
    },
    desc: {
        color: "white",
        fontSize: 18,
        fontWeight: "400"
    },
})
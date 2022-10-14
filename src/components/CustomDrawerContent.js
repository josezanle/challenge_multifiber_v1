import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileAvatar from './ProfileAvatar'
import { Icon } from './icons'
import { blue, globalStyles, PADDING } from '../theme/globals'
import Br from './Br'
import SearchComponent from './SearchComponent'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import Circle from './Circle'


const profileAvatarExample = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const { row, center } = globalStyles;
const paddingLeft = { "paddingLeft": 15 };


const CustomDrawerContent = () => {
    const navigate = useNavigation();

    const goToProfile = () => {
        // console.log("profile go..")
        navigate.navigate("ProfileScreen")
    };

    const handleShare = () => {
        console.log("handleShare..")
    };

    const handleLogOut = () => {
        console.log("LogOut..")
        AsyncStorage.clear()
        // navigate.navigate("LoginScreen", {
        //     screen: "LoginScreen"
        // })
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileSection}>
                <ProfileAvatar source={profileAvatarExample} />

                <View style={styles.usernameBox}>
                    <Text style={styles.user}>Julio Garza</Text>
                    <Pressable onPress={goToProfile}>
                        <Text style={styles.userLink}>Ver perfil</Text>
                    </Pressable>
                </View>

                <View style={styles.shareIcon}>
                    <Pressable onPress={handleShare}>
                        <Icon name="share" color="#2a80fe" />
                    </Pressable>
                </View>
            </View>

            <Br />

            <SearchComponent />

            <Br />
            <Br />

            <Pressable style={[row, { alignItems: "center" }]}>
                <Circle color="#2a80fe" size={14} borderColor="#2a80fe" />
                <Text style={paddingLeft}>Inicio</Text>
            </Pressable>
            <Br />
            <Br />

            <Pressable style={[row, { alignItems: "center" }]}>
                <Circle color="white" size={14} borderColor="black" />
                <Text style={paddingLeft}>Mis ausencias</Text>
            </Pressable>
            <Br />
            <Br />

            <Pressable style={[row, { alignItems: "center" }]}>
                <Circle color="white" size={14} borderColor="black" />
                <Text style={paddingLeft}>Jornada laboral</Text>
            </Pressable>
            <Br />
            <Br />

            <Pressable style={[row, { alignItems: "center" }]}>
                <Circle color="white" size={14} borderColor="black" />
                <Text style={paddingLeft}>ordenes de servicio</Text>
            </Pressable>
            <Br />
            <Br />

            <Pressable style={[row, { alignItems: "center" }]}>
                <Circle color="white" size={14} borderColor="black" />
                <Text style={paddingLeft}>Trayectos</Text>
            </Pressable>
            <Br />

            <Br />
            <Br />
            <Br />
            <Br />
            <Br />
            <Br />
            <Pressable onPress={handleLogOut} style={[row, { alignItems: "center" }]}>
                <Icon name="logout" color="grey" />
                <Text style={paddingLeft}>Cerrar sesión</Text>
            </Pressable>





        </View>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        overflow: "hidden",
        padding: PADDING
    },
    profileSection: {
        flexDirection: "row",
    },
    usernameBox: {
        flex: 1,
        paddingLeft: 16
    },
    user: {
        color: "grey",
        fontWeight: "500",
        fontSize: 18
    },
    userLink: {
        color: "#2a80fe",
        fontWeight: "500",
        paddingLeft: 3,
    },
    shareIcon: {
        justifyContent: "center",
        paddingRight: 10
    },
})
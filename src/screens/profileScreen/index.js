import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Icon } from '../../components/icons'
import { fontColor, globalStyles, H5, H6, PADDING } from '../../theme/globals'
import Circle from '../../components/Circle'
import Br from '../../components/Br'
import ProfileAvatar from '../../components/ProfileAvatar'
import { useNavigation } from '@react-navigation/native'

const profileAvatarExample = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const { center } = globalStyles;


const ProfileScreen = () => {
    const navigation = useNavigation()
    
    const goBack = () => { 
        navigation.goBack()
     }
    return (
        <View style={styles.container}>
            <View style={styles.topCard}>
                <Pressable style={styles.row} onPress={goBack} >
                    <Icon name="back-arrow" color="#2a80fe" size={18} />
                    <Text style={styles.inicioText}>Inicio</Text>
                </Pressable>

                <Br />

                <View style={[styles.userBox, { paddingLeft: 10 }]}>
                    <Text style={styles.user}>Julian Garza</Text>
                    <Circle size={12} color="#2dce98" borderColor="#2dce98" />
                    <Text style={styles.activoText}>Activo</Text>
                </View>
                <Text style={styles.tecnicoText}>Técnico Banda Ancha</Text>
            </View>

            <Br />

            <View style={center}>
                <View style={{ position: "relative" }}>
                    <ProfileAvatar size={150} source={profileAvatarExample} />
                    <View style={styles.editIcon}>
                        <Circle color="white" size={35} borderColor="white">
                            <Icon name="edit" color="#2a80fe" size={16} />
                        </Circle>
                    </View>
                </View>
            </View>

            <Br />
            <Br />
            <Br />

            <View style={[styles.userBox, { paddingHorizontal: PADDING }]}>
                <Text style={styles.categori}>Identificación</Text>
                <Text style={styles.content}>RUT 0.585.957-8</Text>
            </View>

            <Br />

            <View style={[styles.userBox, { paddingHorizontal: PADDING }]}>
                <Text style={styles.categori}>Teléfono</Text>
                <Text style={styles.content}>+095 1232 4545 0206</Text>
            </View>

            <Br />

            <View style={[styles.userBox, { paddingHorizontal: PADDING }]}>
                <Text style={styles.categori}>Genero</Text>
                <Text style={styles.content}>Masculino</Text>
            </View>

            <Br />

            <View style={[styles.userBox, { paddingHorizontal: PADDING }]}>
                <Text style={styles.categori}>Fecha de Nacimiento</Text>
                <Text style={styles.content}>16.06.1955</Text>
            </View>

            <Br />

            <Text style={[styles.categori, { paddingHorizontal: PADDING }]}>Tipos de ordenes de servicio</Text>

            <Br />

            <View style={[styles.userBox, { paddingHorizontal: PADDING }]}>
                <Text style={styles.content}><Circle size={10} color="#8ed04f" borderColor="#8ed04f" />  Instalación</Text>
                <Text style={styles.content}>UTP / Fibra</Text>
            </View>

            <Br />

            <View style={[styles.userBox, { paddingHorizontal: PADDING }]}>
                <Text style={styles.content}><Circle size={10} color="#013cb8" borderColor="#013cb8" />  Migración</Text>
                <Text style={styles.content}>UTP / Fibra</Text>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f2f2",
    },
    topCard: {
        borderBottomLeftRadius: PADDING,
        borderBottomRightRadius: PADDING,
        padding: 20,
        backgroundColor: "white",
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    inicioText: {
        color: "#2a80fe",
        fontWeight: "400",
        marginLeft: 5
    },
    userBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    user: {
        flex: 1,
        fontSize: H5,
        color: fontColor
    },
    editIcon: {
        position: "absolute",
        bottom: -5,
        right:5,
        width:40
    },
    activoText: {
        marginLeft: 10,
        fontWeight: "500",
        color: fontColor
    },
    tecnicoText: {
        fontSize: H6,
        fontWeight: "500",
        marginTop: 5,
        paddingLeft: 15,
        color: fontColor
    },
    categori: {
        fontSize: H6,
        fontWeight: "400",
        color: fontColor
    },
    content: {
        fontSize: H6,
        fontWeight: "bold",
        color: fontColor
    },
})
import 'react-native-gesture-handler';

import React from 'react'

import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { CLIENTS } from '../../data';
import { blue, btnCalendar, fontColor, globalStyles, H6, lightBlue, lightGreyBackground, PADDING } from '../../theme/globals';
import { useNavigation } from '@react-navigation/native';
import SearchComponent from '../../components/SearchComponent';
import Welcome from '../../components/Welcome';
import Br from '../../components/Br';
import CalendarHorizontal from '../../components/CalendarHorizontal';
import Circle from '../../components/Circle';

const { row } = globalStyles;

const renderItem = ({ item, navigation }) => {

    const goToOrdenScreen = () => {
        navigation.navigate("OrdenScreen",{
            item
        })
    }

    return (
        <Pressable style={styles.card} onPress={goToOrdenScreen}>
            <View style={styles.row}>
                <Text style={styles.userId}>{item.id}</Text>
                <View style={styles.userDate}>
                    <Text style={{ color: blue }}>{item.fecha}</Text>
                    <Text style={{ color: fontColor }}>{item.hora}</Text>
                </View>
            </View>
            <Text style={{ color: fontColor }}>Id del cliente - {item.nombre} {item.hora} </Text>
            <Text style={{ color: fontColor }}>{item.direccion} {item.piso}, </Text>
            <Text style={{ color: fontColor }}>{item.oficina} {item.ciudad} </Text>
            <View style={styles.row}>
                <Circle size={10} color={item.color} borderColor={item.color} />
                <Text style={styles.tipoServicio}>{item.tipoServicio}</Text>
            </View>
        </Pressable>
    )
}

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Welcome />
                <Br />
                <SearchComponent />
                <Br />
            </View>

            <Br />
            <CalendarHorizontal />
            <Br />

            <View style={styles.tabs}>
                <Pressable>
                    <Text style={styles.activeTab}>Abiertas</Text>
                </Pressable>

                <Pressable>
                    <Text style={styles.inactiveTab}>Cerradas</Text>
                </Pressable>
            </View>

            <FlatList
                data={CLIENTS}
                style={styles.flatlist}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => renderItem({ item, navigation })}
                keyExtractor={(item, index) => index}
            />

        </View>
    )


}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightGreyBackground
    },
    header: {
        width: "100%",
        backgroundColor: blue,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 15,
        paddingHorizontal: PADDING
    },
    // ------------------------------
    tabs: {
        width: "100%",
        height: 40,
        paddingHorizontal: PADDING,
        flexDirection: "row",
        alignItems: "center"
    },
    activeTab: {
        color: btnCalendar,
        marginRight: 15,
        fontWeight: "600",
    },
    inactiveTab: {
        color: "cornflowerblue"
    },
    // ------------------------------
    flatlist: {
        backgroundColor: lightGreyBackground,
        paddingVertical: 15,
        paddingHorizontal: PADDING
    },
    card: {
        width: "100%",
        height: 160,
        marginVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 4,
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
    userDate: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        color: fontColor
    },
    tipoServicio: {
        flex: 1,
        fontWeight: "500",
        fontSize: 14,
        paddingLeft: 5,
        color: fontColor
    },
})
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { PermissionsContext } from '../../context/PermissionsContext';

const PermissionsScreen = () => {
    const { askLocationPermission } = useContext(PermissionsContext);
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.circle}></View>
            </View>

            <View style={styles.mid}>
                <Text style={styles.text}>Por Favor, habilita los permisos</Text>
            </View>

            <View style={styles.bottom}>
                <CustomButton
                    text="Activar"
                    textColor="black"
                    backgroundButton="transparent"
                    onPress={askLocationPermission}
                    width="100%"
                />
            </View>
        </View>
    );
};

export default PermissionsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: "white"
    },
    top: {
        flex: 1,
        alignItems: 'center',
    },
    circle: {
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "silver",
        borderRadius: 100,
    },
    mid: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    text: {
        color: '#1c1c1c',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
});
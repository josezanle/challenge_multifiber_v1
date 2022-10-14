import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { PermissionsContext } from '../../context/PermissionsContext';
import { fontColor } from '../../theme/globals';

const PermissionsScreen = () => {
    const { askLocationPermission } = useContext(PermissionsContext);
    return (
        <View style={styles.container}>
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
    
    mid: {
        flex: 1,
    },
    
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    text: {
        color: fontColor,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
});
import { Button, Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'

import ImagePicker from 'react-native-image-crop-picker';
import { fontColor, H6, lightBlue, lightBlueBackground, PADDING, windowWidth } from '../../theme/globals';
import Box from '../../components/Box';

const Imagenes = () => {
    const [imageState, setTempUri] = useState('');

    const openGallery = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(JSON.stringify(image, null, 3));
            setTempUri(image.path);
        }).catch(error => console.log(error))
    };
    return (
        <View style={styles.container}>
            <Pressable onPress={openGallery}>
                <Box
                    width={windowWidth - PADDING * 2}
                    color={lightBlueBackground}
                    borderColor={lightBlue}
                >
                    <Text style={styles.title}>Toma una foto o sube los archivos desde la galeria de tu dispositivo.</Text>
                    <Text style={styles.desc} >Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                </Box>
            </Pressable>
        </View>
    )
}

export default Imagenes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f2f2",
        width: "100%",
        padding: PADDING
    },
    fondo: {
        backgroundColor: 'coral',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: H6,
        fontWeight: "700",
        color: fontColor
    },
    desc: {
        marginTop: 10,
        color: fontColor
    },
})
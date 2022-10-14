import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileAvatar = ({ size, source = "" }) => {
    let sizes = {
        width: size || 43,
        height: size || 43,
        backgroundColor: source === "" ? "silver" : "transparent" 
    }

    // Nota: si no hay source, podriamos setear una imagen perfil default, solo hay que renderizar condicionalmente, el componente Image con otro estatico
    
    return (
        <View style={[sizes, styles.static]}>
            {source && (
                <Image
                    source={{ uri: source }}
                    style={[sizes, styles.static]}
                />
            )}
        </View>
    )
}

export default ProfileAvatar

const styles = StyleSheet.create({
    static: {
        borderRadius: 300,
    }
})
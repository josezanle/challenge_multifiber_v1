import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import { lightGrey } from '../theme/globals';
import { Icon } from './icons'

const SearchComponent = ({ url = "" }) => {

    const [text, onChangeText] = useState("");

    const handleSearch = () => {
        // send request to dinamic url
    }

    // Nota: TextInput posee, inlineImageLeft='search_icon', pero solo disponible Android, por eso use un Pressable + TextInput.


    return (
        <View style={styles.row}>
            <Pressable onPress={handleSearch} style={styles.iconBox}>
                <Icon name="search" size={15} color="grey" />
            </Pressable>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Realizar búsqueda"
            />
        </View>
    )
}

export default SearchComponent

const styles = StyleSheet.create({
    row: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 1,
        height: 40,
        paddingLeft: 18,
        borderColor: lightGrey,
    },
    iconBox: {
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        backgroundColor: "white",
        flex: 1,
    },
})
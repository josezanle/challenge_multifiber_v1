import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CALENDAR } from '../data'
import { blue, btnCalendar } from '../theme/globals'

const CalendarHorizontal = () => {
    const [currentIndex, setCurrentIndex] = useState(3)

    // useEffect(() => {

    // }, [])


    const handleDateSelect = (i) => {
        setCurrentIndex(i)

        // send post request to api
    }

    return (
        <View style={styles.calendarBox}>
            <FlatList
                data={CALENDAR}
                // style={styles.flatlist}
                horizontal={true}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) => {
                    return (
                        <Pressable
                            style={[styles.card, { backgroundColor: index === currentIndex ? btnCalendar : "transparent" }]}
                            onPress={() => handleDateSelect(index)}
                        >
                            <Text style={[styles.number, { color: index === currentIndex ? "white" : "#1c1c1c" }]}>{item.number}</Text>
                            <Text style={[styles.day, { color: index === currentIndex ? "white" : "#1c1c1c" }]}>{item.day}</Text>
                        </Pressable>
                    )
                }}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

export default CalendarHorizontal

const styles = StyleSheet.create({
    calendarBox: {
        // height: 40,
        flexDirection: "row",
        alignItems: "center"
    },
    card: {
        width: 45,
        height: 52,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 7,
        borderRadius: 4
    },
    number: {
    },
    day: {
    },

})
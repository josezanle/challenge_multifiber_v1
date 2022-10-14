import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, LayoutAnimation, StyleSheet, Text, Pressable, View, Button } from 'react-native';
import Br from '../../components/Br';
import { Icon } from '../../components/icons';
import { colorWhite, H5, H6, PADDING } from '../../theme/globals';
import { tabs } from './tabs';

const { width } = Dimensions.get('window');

let animationActive = true;
let animationActiveRef;


const OrdenScreen = ({ route }) => {
    const { item } = route?.params;

    const [headerWidths, setWidths] = useState([])
    const [active, setActive] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;
    const barTranslate = Animated.multiply(scrollX, -1)
    const barTranslate1 = useRef(new Animated.Value(0)).current;
    const headerScrollView = useRef();
    const itemScrollView = useRef();

    useEffect(() => {
        let leftOffset = 0
        for (let i = 0; i < active; i += 1) {
            leftOffset += headerWidths[i]
        }
        headerScrollView.current.scrollToIndex({ index: active, viewPosition: 0.5 });
        Animated.spring(barTranslate1, { toValue: leftOffset, useNativeDriver: true, bounciness: 0 }).start()
    }, [active])

    const onPressHeader = (index) => {
        if (animationActiveRef) { clearTimeout(animationActiveRef) }
        if (active != index) {
            animationActive = false
            animationActiveRef = setTimeout(() => {
                animationActive = true
            }, 400);
            itemScrollView.current.scrollToIndex({ index })
            LayoutAnimation.easeInEaseOut()
            setActive(index);
        }
    }

    const onScroll = (e) => {
        const x = e.nativeEvent.contentOffset.x;
        let newIndex = Math.floor((x / width) + 0.5)
        if (active != newIndex && animationActive) {
            LayoutAnimation.easeInEaseOut()
            setActive(newIndex)
        }
    }

    const onHeaderLayout = (width, index) => {
        let newWidths = [...headerWidths];
        newWidths[index] = width
        setWidths(newWidths)
    }
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }


    return (
        <View style={styles.container}>
            <View style={styles.topCard}>
                <Pressable style={styles.row} onPress={goBack} >
                    <Icon name="back-arrow" color="#2a80fe" size={18} />
                    <Text style={styles.regresarText}>Regresar</Text>
                </Pressable>

                <Br />

                <View style={[styles.userBox, { paddingLeft: 10 }]}>
                    <Text style={styles.title}>Orden de servicio</Text>
                    <Text style={{ fontWeight: "bold" }}>{item.id} </Text>
                </View>

                <View style={[styles.userBox, { paddingLeft: 10 }]}>
                    <Text style={styles.user}>{item.nombre} </Text>

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Servicio #58</Text>
                    </Pressable>
                </View>

                {/* TABS */}
            </View>
            <View style={styles.tabs}>
                <FlatList
                    data={tabs}
                    ref={headerScrollView}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    style={styles.headerScroll}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false },
                    )}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <View style={{ overflow: 'hidden' }}>
                            <Pressable
                                onLayout={(e) => onHeaderLayout(e.nativeEvent.layout.width, index)}
                                onPress={() => onPressHeader(index)}
                                key={index}
                                style={styles.headerItem}
                            >
                                <Text>{item.tab}</Text>
                            </Pressable>
                        </View>
                    )}
                />
                <Animated.View style={[styles.headerBar, { width: headerWidths[active], transform: [{ translateX: barTranslate }, { translateX: barTranslate1 }] }]} />
            </View>


            <FlatList
                data={tabs}
                ref={itemScrollView}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                decelerationRate='fast'
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
                renderItem={({ item, index }) => {
                    return (
                        <View key={index} style={styles.mainItem}>
                            {item.component}
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default OrdenScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f2f2"
    },
    tabs: {
        height: 40,
    },
    headerScroll: {
        backgroundColor: "white",
        height: 40,
        borderBottomLeftRadius: PADDING,
        borderBottomRightRadius: PADDING,
    },
    headerItem: {
        padding: 10,
        flex: 1,
        backgroundColor: "white",
    },
    mainItem: {
        width: width,
    },
    headerBar: {
        height: 3,
        backgroundColor: 'cornflowerblue',
        position: 'absolute',
        bottom: 1,
    },
    // ------------
    topCard: {
        padding: 20,
        backgroundColor: "white",
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    regresarText: {
        color: "#2a80fe",
        fontWeight: "400",
        marginLeft: 5
    },
    userBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        flex: 1,
        fontSize: H5,
    },
    user: {
        flex: 1,
        fontSize: H6,
    },
    button: {
        backgroundColor: "#2a80fe",
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 3,
    },
    buttonText: {
        color: "white",
        fontWeight: "300"
    },
})
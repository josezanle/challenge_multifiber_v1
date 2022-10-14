import { StyleSheet, Dimensions } from 'react-native'

// device size
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

// colors
export const blue = "#014ac2";
export const btnCalendar = "#0057da";
export const yellow = "#f4c43d";
export const orange = "#fc7d49";
export const grey = "#bfbebe";
export const purple = "#870194";

export const lightGreyBackground = "#f3f2f2";
export const lightBlueBackground = "#f6faff";
export const lightBlue = "#d6ebff";
export const lightGrey = "#e2e2e2";

// font color
export const boldColor = "#162b4c";
export const fontColor = "#1c1c1c";
export const colorWhite = {color:"white"};

// font sizes
export const H1 = windowWidth * 0.097;
export const H2 = windowWidth * 0.08;
export const H3 = windowWidth * 0.07;
export const H4 = windowWidth * 0.06;
export const H5 = windowWidth * 0.05;
export const H6 = windowWidth * 0.04;

// padding
export const PADDING = 30;



export const globalStyles = StyleSheet.create({
    center:{
        justifyContent:"center",
        alignItems:"center"
    },
    row:{
        flexDirection:"row"
    },
})
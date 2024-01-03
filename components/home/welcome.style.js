import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
    container: {
        width: "100%",
       
    },
    welcomeTxt:(color, top)=>( {
        fontFamily: 'bold', // Ensure this font is loaded if it's a custom font
        fontSize: SIZES.xxLarge - 6,
        marginTop: top, // Example value
        color: color, // Example color
        marginHorizontal: 12,
        
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center", // Corrected property name
        alignContent: "center",
        marginHorizontal: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50
    },
    searchIcon:{
        marginHorizontal: 10,
        color:COLORS.gray,
        marginTop: SIZES.small
    },
    searchWrapper:{
        flex:1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput:{
        fontFamily: "regular",
        width:"100%",
        height:"100%",
        paddingHorizontal: SIZES.small
    },
    searchBtn:{
        width:50,
        height:"100%",
        borderRadius: SIZES.medium,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:COLORS.primary
    }
});

export default styles;
/*
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: '#fff', // Temporary background color for testing
    },
    welcomeTxt: {
        fontFamily: 'bold', // Ensure this font is loaded if it's a custom font
        fontSize: SIZES.xxLarge - 5,
        marginTop: 20, // Example value
        color: 'black', // Example color
        marginHorizontal: 12
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center", // Corrected property name
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium
    },
});

export default styles;*/
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal:20,
    },

    image:{
        width:'100%',
        aspectRatio:16/9,
        resizeMode:'cover',
        borderRadius:10,
    },
    bedrooms:{
        marginVertical:10,
        color:'#5b5b5b'
    },
    description:{
        fontSize:18,
        lineHeight:26,
    },
    prices:{
        fontSize:18,
        paddingTop:10,
    },
    oldPrice:{
        color:'#5b5b5b',
        textDecorationLine:'line-through',
        marginRight:5,
    },
    newPrice:{
        fontWeight:'bold',
    },
    totalPrice:{
        color:'#5b5b5b',
        textDecorationLine:'underline',
        fontSize:16,
        padding:8,
    },
});

export default styles;
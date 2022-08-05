import reactDom from "react-dom";
import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal:20,
    },

    image:{
        width:'100%',
        aspectRatio:4/2,
        resizeMode:'cover',
        borderRadius:10,
    },
    // bedrooms:{
    //     marginVertical:10,
    //     color:'#5b5b5b'
    // },
    row: {
        marginTop:10,
        flexDirection: "row",
    },
    manufacturer:{
       marginLeft:3,
        color:'black',
        fontSize:15,
        fontWeight:'bold',
    },
    model:{
        marginLeft:20,
        fontSize:15,
        fontWeight:'bold',
    },
    // description:{
    //     fontSize:18,
    //     lineHeight:26,
    // },
    prices:{
       
        fontSize:15,
        paddingTop:10,
    },
    price:{
        marginLeft:3,
        marginTop:1,
        fontWeight:'bold',
        fontSize:15,
    },
    location:{
        marginTop:5,
        marginLeft:50,
        fontSize:18,
    },
    seller:{
        marginTop:5,
        marginLeft:8,
        fontSize:18,
    },
    uploaded_at:{
        marginTop:1,
        marginLeft:60,
        fontSize:15,
        fontWeight:'bold',
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
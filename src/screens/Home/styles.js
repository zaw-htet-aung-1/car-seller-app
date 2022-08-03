import { cloneElement } from "react";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    view:{
        paddingTop:50

    },
    image:{
        width:'100%',
        height:700,
        resizeMode:'cover',
        justifyContent:"center",
        
    },
    title:{
        fontSize:60,
        fontWeight:'bold',
        color:'white',
        width:'70%',
        marginLeft:25,
    },
    button:{
        backgroundColor:'#fff',
        width:140,
        marginLeft:25,
        marginTop:10,
        height:30,
        borderRadius:10,
        justifyContent:"center",
        alignItems:'center',

    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold'

    },
    searchButton:{
        backgroundColor:'#fff',
        width:300,
        marginBottom:150,
        marginHorizontal:10,
        height:50,
        width:Dimensions.get('screen').width - 20,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
        position:'absolute',
        top:60,
        zIndex:100,

    },
    searchButtonText:{
        fontSize:16,
        fontWeight:'bold'
    },

});


export default styles;
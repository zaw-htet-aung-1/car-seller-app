import { cloneElement } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:850,
        resizeMode:'cover',
        justifyContent:"center",
        
    },
    searchButton:{
        backgroundColor:'#000',
        width:300,
        marginBottom:150,
        marginHorizontal:50,
        height:50,
        // width:Dimensions.get('screen').width - 150,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
        position:'absolute',
        top:500,
        zIndex:100,
        borderColor:'black',
        

    },
    searchButtonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'white'
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
  
});


export default styles;
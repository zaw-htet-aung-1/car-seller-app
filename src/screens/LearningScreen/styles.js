import { cloneElement } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
    title:{
        letterSpacing:3,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        width: '70%',
        top:300,

    },
    innerTitle:{
        // marginLeft:30,
        top:50,
        fontSize:18,
        fontWeight:'bold'

    },
    view:{
        backgroundColor:'#88E4C4',
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        justifyContent:"center",
        alignItems:'center'
    },
    containerView:{
        backgroundColor:'white',
        width:'100%',
        height:'60%',
        marginTop:500,
        borderTopLeftRadius:40,
        alignContent:'center',
        alignItems:'center'


    },
    searchButton:{
        backgroundColor:'#88E4C4',
        width:300,
        marginBottom:150,
        marginHorizontal:60,
        height:50,
        // width:Dimensions.get('screen').width - 150,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
        position:'absolute',
        top:650,
        zIndex:100,
        borderColor:'black',
    },
    searchButtonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'black'
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
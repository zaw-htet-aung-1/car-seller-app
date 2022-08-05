import { cloneElement } from "react";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:850,
        resizeMode:'cover',
        // justifyContent:"center",
        
    },
    title:{
    //     fontSize:30,
    //     fontWeight:'bold',
    //     color:'white',
    //     width:'100%',
    //     marginLeft:25,
    //     paddingTop:650,
    //    marginLeft:70,
    //    textDecorationLine:'line-through',
       letterSpacing:3,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    width: '70%',
    marginLeft: 70,
    paddingTop:170,
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
        top:70,
        zIndex:100,
        borderColor:'black'

    },
    searchButtonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    },

});


export default styles;
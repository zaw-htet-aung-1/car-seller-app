import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal:10,
        padding:10,
        flexDirection: "row",
        borderBottomWidth:1,
    },

    image:{
        width:'40%',
        aspectRatio:4/2.5,
        resizeMode:'cover',
      borderRadius:10,
      justifyContent:'center',
      alignContent:'center',
      alignSelf:'center',
      padding:10
       
    },

    row: {
        // marginTop:5,
    //    backgroundColor:'#ff1919',
       borderTopRightRadius:10,
       borderBottomRightRadius:10,
       padding:5,
       
    },
    manufacturer:{
       marginLeft:5,
        color:'black',
        fontSize:15,
        fontWeight:'bold',
    },
    model:{
        marginLeft:5,
        paddingTop:12,
        fontSize:15,
        fontWeight:'bold',
    },
    fontsModel:{
        paddingTop:12,
    },
    
    price:{
        marginLeft:5,
        fontWeight:'bold',
        paddingTop:15,
        fontSize:15,
        paddingBottom:15,
    },
    fontsPrice:{
        paddingTop:15,
    },

    mileage:{
        marginLeft:5,
        fontSize:15,
        fontWeight:'bold',
    },
    fontsPhone:{

    },
    icon:{
        flexDirection: "row",

    },
});

export default styles;
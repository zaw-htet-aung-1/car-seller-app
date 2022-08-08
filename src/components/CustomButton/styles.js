import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container:{
    width:'50%',
    padding:10,
   

    alignItems:'center',
    borderRadius:5,

   },
   container_PRIMARY:{
      backgroundColor:'black',
      marginVertical:20,
   },
   container_SECONDARY:{
      borderColor:'black',
      borderWidth:2,
   },
   container_TERTIARY:{},
   text:{
        color:'white',
        fontWeight:'bold',
   },
   text_TERTIARY:{
      color:'gray',
   },
   text_SECONDARY:{
      color:'black',
   },
});

export default styles;
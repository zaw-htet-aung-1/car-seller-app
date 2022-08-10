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
   keyInfoText:{
    fontSize:24,
    marginLeft:5,
    padding:10,
    fontWeight:'bold'
   },
   infoList:{
    marginLeft:20,
    padding:5,
   },
   keyInfoListText:{
    fontSize:18,
    padding:5,
   },
   row:{
    flexDirection:'row',
    padding:3
   },
   icon:{
    padding:5,
   }
});

export default styles;
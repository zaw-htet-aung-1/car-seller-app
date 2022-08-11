import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal:20,
    },

    imageContainer:{
        width:'100%',
        height: 200,
    },

    image:{
        width:'100%',
        height: 200,
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
    fontSize:16,
    padding:5,
   },
   row1:{
    flexDirection:'row',
    padding:3,
   },
   row:{
    flexDirection:'row',
    padding:3,
    justifyContent:'space-between'
   },
   icon:{
    padding:5,
   },
   containerBox:{
    backgroundColor:'#f2f2f2',
    borderRadius:15,
    paddingTop:5,
    marginTop:15
   },
   descText:{
    textAlign:'auto',
    padding:5,
   }
});

export default styles;
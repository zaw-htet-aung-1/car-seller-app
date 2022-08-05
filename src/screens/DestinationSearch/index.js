import React, {useState} from "react";
import { View,TextInput,FlatList,Text,Pressable} from "react-native";
import styles from "./styles";
import searchResults from '../../../assets/data/search';
import Entype from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

const DestinationSearchScreen = () => {
    const[inputText, setInputText] = useState ();
    const navigation = useNavigation();

    return (
        <View style={styles.textContainer}>
           <TextInput style={styles.textInput}
           placeholder='Search your car here...'
           value = {inputText}
           onChangeText={setInputText}
           />

           <FlatList
           data={searchResults}
           renderItem={({item}) =>(
            <Pressable onPress={()=> navigation.navigate('SearchResults')} style={styles.row}>
                <View style={styles.iconContainer}>
                    <Entype name={'info'} size={30} />
                </View>
                <Text  style={styles.locationText}>{item.description}</Text>  
            </Pressable>
              )}
            />
             <View>
            <Pressable
            onPress={()=> navigation.navigate('Home',{
              screen:'Explore',
              params:{
                screen:'SearchResults',
              }
            }) }
             style={{
              marginBottom:20,
              marginTop:100,
               backgroundColor:'black',
               alignItems:'center',
               justifyContent:'center',
               height:50,
               marginHorizontal:20,
               borderRadius:10}}>
              <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Search</Text>
            </Pressable>
          </View>
        </View>
        
    );
};

export default DestinationSearchScreen;
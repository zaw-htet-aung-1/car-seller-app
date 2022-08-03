import React, {useState} from "react";
import { View,TextInput,FlatList,Text} from "react-native";
import styles from "./styles";
import searchResults from '../../../assets/data/search';
import Entype from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = () => {
    const[inputText, setInputText] = useState ();

    return (
        <View style={styles.textContainer}>
           <TextInput style={styles.textInput}
           placeholder='Where are you going?'
           value = {inputText}
           onChangeText={setInputText}
           />

           <FlatList
           data={searchResults}
           renderItem={({item}) =>(
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Entype name={'location-pin'} size={30} />
                </View>
                <Text  style={styles.locationText}>{item.description}</Text>  
            </View>
              )}
            />
        </View>
    );
};

export default DestinationSearchScreen;
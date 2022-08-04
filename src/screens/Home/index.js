import React from "react";
import { 
    View,
    Text ,
    ImageBackground,
    Pressable 
    } from "react-native";
import styles from "./styles";
import Entype from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <Pressable style={styles.searchButton}
                onPress={() => navigation.navigate('Destination Search')}>
                <Entype name={'magnifying-glass'} size={25} color={'black'} />
                <Text style={styles.searchButtonText}>What do you want?</Text>
            </Pressable>
            
           <ImageBackground source={require('../../../assets/images/flower.jpg')} 
           style={styles.image}>

            

            <Text style={styles.title}>PEACEMINUSONE</Text>

            {/* <Pressable style={styles.button}
                onPress={()=> console.warn(data,'Explore Btn clicked')}>
                <Text style={styles.buttonText}>Search</Text>
            </Pressable> */}
            </ImageBackground> 
        </View>
    );
};



export default HomeScreen;
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
            
           <ImageBackground source={require('../../../assets/images/car-home.webp')} 
                style={styles.image}>
                <Text style={styles.title}>Search Less Live More</Text>
            </ImageBackground> 
        </View>
    );
};

export default HomeScreen;
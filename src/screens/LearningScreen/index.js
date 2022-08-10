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

const LearningScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <Pressable style={styles.searchButton}
                onPress={() => navigation.navigate('Sign In')}>
                <Entype name={'magnifying-glass'} size={25} color={'black'} />
                <Text style={styles.searchButtonText}>Get Started</Text>
            </Pressable>
           <ImageBackground source={require('../../../assets/images/car-seller-home.png')} 
                style={styles.image}>
            </ImageBackground> 
        </View>
    );
};

export default LearningScreen;
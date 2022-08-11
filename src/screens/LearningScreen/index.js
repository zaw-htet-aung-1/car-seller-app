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
            <Text style={styles.title}>Search Less Live More</Text>
            <View style={styles.containerView}>
                <Text style={styles.innerTitle}> The best car seller application in Myanmar</Text>
            </View>
            <Pressable style={styles.searchButton}
                    onPress={() => navigation.navigate('Sign In')}>
                    <Text style={styles.searchButtonText}>Get Started</Text>
            </Pressable>
          
        </View>
    );
};

export default LearningScreen;
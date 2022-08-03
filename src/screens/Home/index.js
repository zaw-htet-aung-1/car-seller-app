import React from "react";
import { 
    View,
    Text ,
    ImageBackground,
    Pressable 
    } from "react-native";
import styles from "./styles";
import Entype from 'react-native-vector-icons/Entypo';


const HomeScreen = () => {
    return (
        <View style={styles.view}>
            

           <ImageBackground source={require('../../../assets/images/OP.webp')} 
           style={styles.image}>

            <Pressable style={styles.searchButton}
                onPress={()=> console.warn(data,'Search Btn clicked')}
                >
                <Entype name={'magnifying-glass'} size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>What do you want?</Text>
            </Pressable>

            <Text style={styles.title}>Search Less Live More</Text>

            <Pressable style={styles.button}
                onPress={()=> console.warn(data,'Explore Btn clicked')}>
                <Text style={styles.buttonText}>Search</Text>
            </Pressable>
            </ImageBackground> 
        </View>
    );
};



export default HomeScreen;
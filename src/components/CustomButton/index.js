import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const CustomButton = ({onPress,text, type}) => {
    return (
        <Pressable
        onPress={onPress} 
        style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

export default CustomButton;
import React from "react";
import { View,Text, TextInput } from "react-native";
import styles from "./styles";

const CustomInput = ({value, setValue,placeholder,secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            placeholder={placeholder}
            style={styles.input}
            onChangeText={setValue}
            value={value}
            secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

export default CustomInput;
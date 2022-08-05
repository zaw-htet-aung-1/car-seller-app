import React, {useState} from "react";
import { View, Text, SafeAreaView, useWindowDimensions } from "react-native";
import styles from "./styles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign In")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot password?")
    }

    return (
          <View style={styles.root}>
            <Text style={styles.text}>Car Seller Application</Text>
            
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomButton text='Sign In' onPress={onSignInPressed} />
            <CustomButton 
            text='Forgot password?' 
            onPress={onForgotPasswordPressed}
            type='TERTIARY'
            />
        </View>
    );
};

export default SignInScreen;
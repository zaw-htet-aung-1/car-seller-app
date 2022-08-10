import React, {useState} from "react";
import { View, Text, SafeAreaView, useWindowDimensions,ScrollView, TouchableOpacity, TextComponent } from "react-native";
import styles from "./styles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    // const onSignInPressed = () => {
    //     console.warn("Sign In")
    // }

    const onSignInFacebook = () => {
        console.warn("onSignInFacebook")
    }

    const navigation = useNavigation();

    return (
        // <ScrollView>
        
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
            <CustomButton text='Sign In'
            //  onPress={onSignInPressed} 
             onPress={()=> navigation.navigate('Explore')}
             />
            
            <CustomButton
            text="Sign In with Facebook"
            onPress={onSignInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
            />
            
            <CustomButton 
            text='Forgot password?' 
            onPress={()=> navigation.navigate('ForgetPassword')}
            type="TERTIARY"
            />

            <CustomButton
            text="Don't have an account? Create one"
            onPress={()=> navigation.navigate('Sign Up')}
            type="TERTIARY"
            />

         </View>
       
        // </ScrollView>
    );
};

export default SignInScreen;
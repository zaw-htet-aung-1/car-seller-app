import React, {useState} from "react";
import { View, Text, SafeAreaView, useWindowDimensions,ScrollView } from "react-native";
import styles from "./styles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    // const {height} = useWindowDimensions();

    const onRegisterPressed = () => {
        console.warn("onRegisterPressed")
    }

    const onSignInFacebook = () => {
        console.warn("onSignInFacebook")
    }

    const onTermsOfUsePressed= () => {
        console.warn("onTermsOfUsePressed")
    }
    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed")
    }
    const navigation = useNavigation();

    return (
        // <ScrollView>
        
          <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Email" 
                value={email} 
                setValue={setEmail}
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomInput 
                placeholder="Confirm Password" 
                value={passwordRepeat} 
                setValue={setPasswordRepeat}
                secureTextEntry={true}
            />

            <CustomButton text='Register'
             onPress={()=> navigation.navigate('Confirm Email')} />
            <Text style={styles.text}>By registering, you confirm that you accept our {''} <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {''} <Text style={styles.link} onPress={onPrivacyPressed} >Privacy Policy</Text>.</Text>
            <CustomButton
            text="Sign In with Facebook"
            onPress={onSignInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
            />
            <CustomButton
            text="Have an account? Sign In"
            onPress={()=> navigation.navigate('Sign In')}
            type="TERTIARY"
            />
            
         </View>
       
        // </ScrollView>
    );
};

export default SignUpScreen;
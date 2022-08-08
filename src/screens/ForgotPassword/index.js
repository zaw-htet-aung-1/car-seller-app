import React, {useState} from "react";
import { View, Text, SafeAreaView, useWindowDimensions,ScrollView } from "react-native";
import styles from "./styles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";


const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    // const {height} = useWindowDimensions();

    const onResendPressed = () => {
        console.warn("onResendPressed")
    }

    const navigation = useNavigation();

    return (
        // <ScrollView>
        
          <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            
            <CustomInput 
                placeholder="Enter your confirmation code" 
                value={username} 
                setValue={setUsername}
            />
            <CustomButton text='Send'
            onPress={()=> navigation.navigate('NewPassword')} />


            <CustomButton
            text="Back to Sign In"
            onPress={()=> navigation.navigate('Sign In')}
            type="TERTIARY"
            />
            
         </View>
       
        // </ScrollView>
    );
};

export default ForgotPasswordScreen;
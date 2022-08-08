import React, {useState} from "react";
import { View, Text, SafeAreaView, useWindowDimensions,ScrollView } from "react-native";
import styles from "./styles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";


const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

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
                placeholder="Code" 
                value={code} 
                setValue={setCode}
            />
            <CustomInput 
                placeholder="Enter your New Password" 
                value={newPassword} 
                setValue={setNewPassword}
            />
            <CustomButton text='Submit'
            onPress={()=> navigation.navigate('Home')} />


            <CustomButton
            text="Back to Sign In"
            onPress={()=> navigation.navigate('Sign In')}
            type="TERTIARY"
            />
            
         </View>
       
        // </ScrollView>
    );
};

export default NewPasswordScreen;
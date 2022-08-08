import React, {useState} from "react";
import { View, Text, SafeAreaView, useWindowDimensions,ScrollView } from "react-native";
import styles from "./styles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";


const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    // const {height} = useWindowDimensions();

    const onResendPressed = () => {
        console.warn("onResendPressed")
    }

    const navigation = useNavigation();

    return (
        // <ScrollView>
        
          <View style={styles.root}>
            <Text style={styles.title}>Confirm Email</Text>
            
            <CustomInput 
                placeholder="Enter your confirmation code" 
                value={code} 
                setValue={setCode}
            />
            <CustomButton text='Confirm'
            onPress={()=> navigation.navigate('Home')} />

            <CustomButton
            text="Resend code"
            onPress={onResendPressed}
            type="SECONDARY"
            />

            <CustomButton
            text="Back to Sign In"
            onPress={()=> navigation.navigate('Sign In')}
            type="TERTIARY"
            />
            
         </View>
       
        // </ScrollView>
    );
};

export default ConfirmEmailScreen;
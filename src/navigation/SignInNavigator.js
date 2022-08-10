import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import NewPasswordScreen from "../screens/NewPasswordScreen";

const AuthStack = createStackNavigator();

const SignInNavigator = () => {
    return(
       
            <AuthStack.Navigator>
                <AuthStack.Screen
                    name={'Sign In'}
                    component = {SignInScreen}
                    options ={{
                    headerShown:false
                    }}
                />
                <AuthStack.Screen
                    name={'Sign Up'}
                    component = {SignUpScreen}
                    options ={{
                    headerShown:false
                    }}
                />
                <AuthStack.Screen
                    name={'Confirm Email'}
                    component = {ConfirmEmailScreen}
                    options ={{
                    headerShown:false
                    }}
                />
                <AuthStack.Screen
                    name={'ForgetPassword'}
                    component = {ForgotPasswordScreen}
                    options ={{
                    headerShown:false
                    }}
                />
                 <AuthStack.Screen
                    name={'NewPassword'}
                    component = {NewPasswordScreen}
                    options ={{
                    headerShown:false
                    }}
                />
            </AuthStack.Navigator>
       
       
    );
};

export default SignInNavigator;
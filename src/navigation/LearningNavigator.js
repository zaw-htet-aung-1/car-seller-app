import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LearningScreen from "../screens/LearningScreen";
import SignInNavigator from "./SignInNavigator";
import ExploreNavigator from './ExploreNavigator';
import HomeTabNavigator from "./HomeTabNavigator";

const AuthStack = createStackNavigator();

const LearningNavigator = () => {
    return(
       
            <AuthStack.Navigator>
                <AuthStack.Screen
                    name={'Learning Screen'}
                    component = {LearningScreen}
                    options ={{
                    headerShown:false
                    }}
                />
                <AuthStack.Screen
                    name={'Sign In'}
                    component = {SignInNavigator}
                    options ={{
                    headerShown:false
                    }}
                />
                {/* <AuthStack.Screen
                    name={'Explore'}
                    component = {ExploreNavigator}
                    options ={{
                    headerShown:false
                    }}
                /> */}
                <AuthStack.Screen
                    name={'Home'}
                    component = {HomeTabNavigator}
                    options ={{
                    headerShown:false
                    }}
                />
            </AuthStack.Navigator>
       
       
    );
};

export default LearningNavigator;
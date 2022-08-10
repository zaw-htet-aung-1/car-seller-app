import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/Profile";
import EditProfileScreen from "../screens/EditProfileScreen";

const AuthStack = createStackNavigator();

const ProfileNavigator = () => {
    return(
       
            <AuthStack.Navigator>
                <AuthStack.Screen
                    name={'Profile'}
                    component = {ProfileScreen}
                    options ={{
                    headerShown:false
                    }}
                />
                <AuthStack.Screen
                    name={'Edit Profile'}
                    component = {EditProfileScreen}
                    options ={{
                    // headerShown:false
                    }}
                />
            </AuthStack.Navigator>
       
       
    );
};

export default ProfileNavigator;
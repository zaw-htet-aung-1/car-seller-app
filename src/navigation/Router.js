import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DestinationSearchScreen from "../screens/DestinationSearch";
import HomeTabNavigator from "./HomeTabNavigator";
import PostScreen from "../screens/PostScreen";
import DetailedPost from "../components/DetailedPost";
import LearningScreen from "../screens/LearningScreen";
import SignInNavigator from "./SignInNavigator";
import LearningNavigator from "./LearningNavigator";
// import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Learning Screen'}
                    component = {LearningNavigator}
                    options ={{
                    headerShown:false
                    }}
                />
           
                <Stack.Screen
                    name={'Home'}
                    component = {HomeTabNavigator}
                    options ={{
                    headerShown:false
                    }}
                />
                 <Stack.Screen
                    name={'Destination Search'}
                    component = {DestinationSearchScreen}
                    options ={{
                    title:"Search your cars here",
                    }}
                />
                <Stack.Screen
                    name={"Post"}
                    component={PostScreen}
                    options={{
                    title: "Car Details",
                    headerShown:false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
       
    );
};

export default Router;
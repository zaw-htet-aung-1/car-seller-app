import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import ExploreNavigator from './ExploreNavigator';
import SignInScreen from "../screens/SignInScreen";
import SignInNavigator from "./SignInNavigator";
import Post from "../components/Post";

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SearchResultsScreen from "../screens/SearchResults";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor:'#000000'
            }}>
            <Tab.Screen
             name={"Explore"}
             component = {ExploreNavigator}
             options ={{
                tabBarIcon:({color:string}) => (
                    <Fontisto name="search" size={25} color={'black'}/>
                ),
                headerShown:false,
             }} 
            />
            <Tab.Screen
             name={"Saved"}
             component = {HomeScreen}
             options ={{
                tabBarIcon:({color:string}) => (
                    <FontAwesome name="heart-o" size={25} color={'black'}/>
                ),
                headerShown:false,
             }} 
            />
            <Tab.Screen
             name={"Home"}
             component = {SearchResultsScreen}
             options ={{
                tabBarIcon:({color:string}) => (
                    <FontAwesome5 name="airbnb" size={25} color={'black'}/>
                ),
                headerShown:false,
             }} 
            />
            <Tab.Screen
             name={"Create"}
             component = {SignInNavigator}
             options ={{
                tabBarIcon:({color:string}) => (
                    <Feather name="plus-circle" size={25} color={'black'}/>
                ),
                headerShown:false,
             }} 
            />
            <Tab.Screen
             name={"Profile"}
             component = {ProfileScreen}
             options ={{
                tabBarIcon:({color:string}) => (
                    <EvilIcons name="user" size={36} color={'black'}/>
                ),
                headerShown:false,
             }} 
            />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;
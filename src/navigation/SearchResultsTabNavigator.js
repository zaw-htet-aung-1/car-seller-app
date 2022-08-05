import React from "react";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults'

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor:'black',
            indicatorStyle:{
                backgroundColor:'black'
            }
        }}>
            <Tab.Screen name={"Buy Lists"}
            component = {SearchResults}
            />
            <Tab.Screen name={"Sale Lists"}
            component = {SearchResults}
            />
        </Tab.Navigator>
    );
};

export default SearchResultsTabNavigator;
import 'react-native-gesture-handler';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';

import feed from './assets/data/feed';
import Router from './src/navigation/Router';

// import Post from './src/components/Post';
// import SearchResultsScreen from './src/screens/SearchResults';
// import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];

export default function App() {
  return (
    // <View>
    //   <HomeScreen />
    //    <Post post = {post1} />
    //   <Post post = {post2} /> 
    //   <SearchResultsScreen />
    //   <DestinationSearchScreen/>
    // </View>
    <Router/>
  );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import 'react-native-gesture-handler';


const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];

export default function App() {
  return (
    <View>
      <HomeScreen />
      {/* <Post post = {post1} />
      <Post post = {post2} /> */}
      <SearchResultsScreen />
      <DestinationSearchScreen/>
    </View>
  );
}
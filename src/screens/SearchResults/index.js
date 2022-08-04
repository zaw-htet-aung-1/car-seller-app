import React from "react";
import { View,Text,FlatList, SafeAreaView, Image } from "react-native";
import Post from '../../components/Post'
import feed from '../../../assets/data/feed';

const SearchResultsScreen = () => {
    return(
        <SafeAreaView>
        <View>
            <FlatList
            data={feed}
            renderItem = {({item}) => <Post post={item}/>}
            />
        </View>
        </SafeAreaView>
    );
};

export default SearchResultsScreen;
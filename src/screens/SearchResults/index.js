import React, {useState, useEffect} from "react";
import { View,Text,FlatList, SafeAreaView, Image } from "react-native";
import Post from '../../components/Post'


const SearchResultsScreen = () => {

         // API Call
         const [isLoading, setLoading] = useState(true);
         const [posts, setPosts] = useState([]);
     
         const getData = async () => {
             try {
                 const response = await fetch('http://172.20.80.90:8080/api/post');
                 const json = await response.json();
                 setPosts(json.data);
     
             } catch (error) {
                 console.error(error);
             } finally {
                 setLoading(false);
             }
         }
     
         useEffect(() => {
             getData();
         }, []);

    return(
        <SafeAreaView>
        <View>
            <FlatList
            data={posts}
            renderItem = {({item}) => <Post post={item}/>}
            showsVerticalScrollIndicator={false}
            />
        </View>
        </SafeAreaView>
    );
};

export default SearchResultsScreen;
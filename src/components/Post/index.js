import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, View,Text,Image, Pressable,FlatList } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Post = (props) => {

    const post = props.post;
    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Post', {postId:post.id});

    }


     // API Call
     const [isLoading, setLoading] = useState(true);
     const [posts, setPosts] = useState([]);
 
     const getData = async () => {
         try {
             const response = await fetch('http://172.20.80.90:8080/api/post');
             const json = await response.json();
             setPosts(json);
 
         } catch (error) {
             console.error(error);
         } finally {
             setLoading(false);
         }
     }
 
     useEffect(() => {
         getData();
     }, []);

    return (
        <SafeAreaView>
            <StatusBar/>
            <FlatList
                        data={posts}
                        renderItem={({ item }) => (
                            
                
                            <Pressable onPress={goToPostPage} style={styles.container}>
                            <Image 
                            style={styles.image}
                            source={ item.images[0] ? {uri:item.images[0].url} : {uri:"https://www.cnet.com/a/img/resize/b5bad9fc09bf6d76cf8b5db6bca7d68fc49cdcac/2016/12/14/8ea41d9d-2a76-4f35-9d9d-1ef472f7d9dc/car-photography-how-to.jpg?auto=webp&fit=crop&height=675&width=1200"} }
                            />

                            <View style={styles.row}>
                            {/* <FontAwesome5 name="car" size={20} color={'black'}/> */}
                            <Text style={styles.manufacturer}>{item.manufacturer}</Text>
                            <Text style={styles.model}>{item.car_model} </Text>
                            </View>
                
                            <View style={styles.row}>
                            {/* <FontAwesome5 name="dollar-sign" size={20} color={'black'}/> */}
                            <Text style={styles.price}>{item.price}lakhs</Text>
                            <Text style={styles.phone} >{item.phone}</Text>
                            </View> 
                        </Pressable>
                        )}
                    />
        </SafeAreaView>
    );
};

export default Post;
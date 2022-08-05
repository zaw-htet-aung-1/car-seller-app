import React from "react";
import { SafeAreaView, StatusBar, View,Text,Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Post = (props) => {

    const post = props.post;
    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Post', {postId:post.id});

    }

    return (
        <SafeAreaView>
            <StatusBar/>
            <Pressable onPress={goToPostPage} style={styles.container}>
            <Image 
            style={styles.image}
            source={{uri:post.image}}
            />
            <View style={styles.row}>
            {/* <FontAwesome5 name="car" size={20} color={'black'}/> */}
            <Text style={styles.manufacturer}>Manufacturer - {post.manufacturer}</Text>
            <Text style={styles.model}> Car Model - {post.model} </Text>
            </View>

            <View style={styles.row}>
            {/* <FontAwesome5 name="dollar-sign" size={20} color={'black'}/> */}
            <Text style={styles.price}>Price - {post.price}lakhs</Text>
            <Text style={styles.uploaded_at} >Uploaded at - {post.uploaded_at}</Text>
            </View> 
        </Pressable></SafeAreaView>
    );
};

export default Post;
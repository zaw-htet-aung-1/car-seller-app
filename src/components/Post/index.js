import React from "react";
import { SafeAreaView, StatusBar, View,Text,Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const Post = (props) => {

    const post = props.post;
    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Post')

    }

    return (
        <SafeAreaView>
            <StatusBar/>
            <Pressable onPress={goToPostPage} style={styles.container}>
            <Image 
            style={styles.image}
            source={{uri:post.image}}
            />

            {/* Bed */}
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            {/* Type&Description */}
            <Text style={styles.description} numberOfLines={3} >
            {post.type}, {post.title}
            Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension. 
            </Text>

            {/*  old and new price*/}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}> {post.oldPrice}$</Text>
                <Text style={styles.newPrice}>  {post.newPrice}$ </Text>/night
                </Text>
            

            {/* total Price */}
            <Text style={styles.totalPrice}>{post.totalPrice}$ Total</Text>
        </Pressable></SafeAreaView>
    );
};

export default Post;
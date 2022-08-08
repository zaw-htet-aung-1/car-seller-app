import React from "react";
import { SafeAreaView, StatusBar, View,Text,Image,ScrollView } from "react-native";
import styles from "./style";


const DetailedPost = (props) => {

    const post = props.post;

    return (
        <SafeAreaView>
            <StatusBar/>
            <ScrollView>
                <View style={styles.container}>

                    <Image 
                        style={styles.image}
                        source={{uri:post.image}}
                    />

                    <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
                    <Text style={styles.description} numberOfLines={3} >
                        {post.type}, {post.title}
                        Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension. 
                        </Text>

                    <Text style={styles.prices}>
                    <Text style={styles.oldPrice}> {post.oldPrice}$</Text>
                    <Text style={styles.newPrice}>  {post.newPrice}$ </Text>/night
                    </Text>
            
                    <Text style={styles.totalPrice}>{post.totalPrice}$ Total</Text>
                    <Text style={styles.longDescription}>
                        {post.description}
                    </Text>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
};

export default DetailedPost;
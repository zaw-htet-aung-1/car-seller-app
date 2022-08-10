import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, View,Text,Image, Pressable,FlatList,Linking } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Post = (props) => {

    const post = props.post;
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <StatusBar/>
                    <Pressable onPress={() => navigation.navigate('Post',{ postId:post.id} ) } style={styles.container}>
                        <Image 
                            style={styles.image}
                            source={ post.images[0] ? {uri:post.images[0].url} : {uri:"https://www.cnet.com/a/img/resize/b5bad9fc09bf6d76cf8b5db6bca7d68fc49cdcac/2016/12/14/8ea41d9d-2a76-4f35-9d9d-1ef472f7d9dc/car-photography-how-to.jpg?auto=webp&fit=crop&height=675&width=1200"} }
                        />
                        <View style={styles.row}>
                            <View style={styles.icon}>
                                <FontAwesome5 name="airbnb" size={18} color={'black'} style={styles.fonts}/>
                                <Text style={styles.manufacturer}>{post.manufacturer}</Text>
                            </View>
                            <View style={styles.icon}>
                                <FontAwesome5 name="airbnb" size={18} color={'black'} style={styles.fontsModel}/>
                                <Text style={styles.model}>{post.car_model} </Text>
                            </View>
                            <View style={styles.icon}>
                                <FontAwesome5 name="airbnb" size={18} color={'black'} style={styles.fontsPrice}/>
                                <Text style={styles.price}>{post.price}lakhs</Text>
                            </View>
                            <View style={styles.icon}>
                                <FontAwesome5 name="airbnb" size={18} color={'black'} style={styles.fontsPhone}/>
                                
                                <Text onPress={()=>{Linking.openURL(post.phone[0].url);}} style={styles.phone}>{post.phone}</Text>
                            </View>
                        </View> 
                    </Pressable>
        </SafeAreaView>
    );
};

export default Post;
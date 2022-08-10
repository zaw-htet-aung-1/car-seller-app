import React, {useState, useEffect} from "react";
import { SafeAreaView, StatusBar, View,Text,Image,ScrollView } from "react-native";
import styles from "./style";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const DetailedPost = (props) => {

    const postId = props.postId;

    // API Call
    const [isLoading, setLoading] = useState(true);
    const [post, setPost] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://172.20.80.90:8080/api/post/'+postId);
            const json = await response.json();
            setPost(json);

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
            <ScrollView>
                <View style={styles.container}>

                    <Image 
                        style={styles.image}
                        source={post.images ? {uri:post.images[0].url} : null}
                    />
                    {/* Image up there need to be fixed */}
                    <View>
                        <Text style={styles.keyInfoText}>Key Informations</Text>
                            <View style={styles.infoList}>
                                <View style={styles.row}>
                                    <Icon name='factory' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.manufacturer}</Text>
                                </View>

                                <View style={styles.row}>
                                    <FontAwesome5 name='car' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.model}</Text>
                                </View>

                                <View style={styles.row}>
                                    <FontAwesome5 name='coins' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.price}lakhs</Text>
                                </View>

                                <View style={styles.row}>
                                    <Icon name='engine' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.engine_power}</Text>
                                </View>
                                                             
                            </View>
                            
                        
                    </View>
                        <View>
                            <Text style={styles.keyInfoText}>Contact Informations</Text>
                            <View style={styles.infoList}>
                                <View style={styles.row}>
                                    <FontAwesome5 name='user-circle' size={22} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.user_name}</Text>
                                </View>

                                <View style={styles.row}>
                                    <FontAwesome5 name='car' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.phone}</Text>
                                </View>

                                <View style={styles.row}>
                                    <Entypo name='location' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.address}</Text>
                                </View>

                            </View>
                        </View>

                        <View>
                            <Text style={styles.keyInfoText}>Contact Informations</Text>
                            <View style={styles.infoList}>
                                {/* <View style={styles.row}>
                                    <FontAwesome5 name='user-circle' size={22} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.user_name}</Text>
                                </View>

                                <View style={styles.row}>
                                    <FontAwesome5 name='car' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.phone}</Text>
                                </View>

                                <View style={styles.row}>
                                    <Entypo name='location' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.address}</Text>
                                </View> */}

                            </View>
                        </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
};

export default DetailedPost;
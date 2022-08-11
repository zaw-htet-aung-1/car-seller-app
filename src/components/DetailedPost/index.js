import React, {useState, useEffect} from "react";
import { SafeAreaView, StatusBar, View,Text,Image,ScrollView } from "react-native";
import styles from "./style";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SliderBox} from "react-native-image-slider-box";


const ImageExist = ({ images }) => {
    if (images) {
        return (<View>
            <SliderBox images={ images.map(image => image.url)}
            dotColor="steelblue"
            inactiveDotColor="#fafafa" style={styles.image} />
        </View>);
    }
    return (
        <View style={[styles.image, { backgroundColor: 'gray', justifyContent: 'center' }]} >
            <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'white', fontSize: 16, fontWeight: '500' }} >Loading............</Text>
        </View>
    );
}

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
            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    {/* <Image 
                        style={styles.image}
                        source={post.images ? {uri:post.images[0].url} : null}
                    /> */}
                    <View style={styles.imageContainer} >
                    <ImageExist images={post.images}/>
                    </View>

                    <View style={styles.containerBox}>
                        <Text style={styles.keyInfoText}>Key Informations</Text>
                            <View style={styles.infoList}>
                                <View style={styles.row1}>
                                    <Icon name='factory' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.manufacturer}</Text>
                                </View>

                                <View style={styles.row1}>
                                    <FontAwesome5 name='car' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.car_model}</Text>
                                </View>

                                <View style={styles.row1}>
                                    <FontAwesome5 name='coins' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.price}lakhs</Text>
                                </View>

                                <View style={styles.row1}>
                                    <Icon name='engine' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.engine_power}</Text>
                                </View>
                                                             
                            </View>
                            
                        
                    </View>
                        <View style={styles.containerBox}>
                            <Text style={styles.keyInfoText}>Contact Informations</Text>
                            <View style={styles.infoList}>
                                <View style={styles.row1}>
                                    <FontAwesome5 name='user-circle' size={22} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.user_name}</Text>
                                </View>

                                <View style={styles.row1}>
                                    <FontAwesome5 name='car' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.phone}</Text>
                                </View>

                                <View style={styles.row1}>
                                    <Entypo name='location' size={20} style={styles.icon}/>
                                    <Text style={styles.keyInfoListText}>{post.address}</Text>
                                </View>

                            </View>
                        </View>

                        <View style={styles.containerBox}>
                            <Text style={styles.keyInfoText}>Car Details</Text>
                            <View style={styles.infoList}>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Lot Number</Text>
                                    <Text style={styles.keyInfoListText}>#000999</Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Build Type</Text>
                                    <Text style={styles.keyInfoListText}>{post.build_type}</Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Trim</Text>
                                    <Text style={styles.keyInfoListText}>{post.trim_name}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Condition</Text>
                                    <Text style={styles.keyInfoListText}>{post.condition}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Steering Position</Text>
                                    <Text style={styles.keyInfoListText}>{post.steering_position}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Transmission</Text>
                                    <Text style={styles.keyInfoListText}>{post.transmission}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Gear</Text>
                                    <Text style={styles.keyInfoListText}>{post.gear}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Fuel Type</Text>
                                    <Text style={styles.keyInfoListText}>{post.fuel_type}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>License Status</Text>
                                    <Text style={styles.keyInfoListText}>{post.licence_status}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Plate Number</Text>
                                    <Text style={styles.keyInfoListText}>{post.plate_number}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Plate Color</Text>
                                    <Text style={styles.keyInfoListText}>{post.plate_color}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Plate Division</Text>
                                    <Text style={styles.keyInfoListText}>{post.division}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Seat Number</Text>
                                    <Text style={styles.keyInfoListText}>{post.seat}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Door Number</Text>
                                    <Text style={styles.keyInfoListText}>{post.door}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Mileage</Text>
                                    <Text style={styles.keyInfoListText}>{post.mileage}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>Number Of Owners</Text>
                                    <Text style={styles.keyInfoListText}>{post.owner_count}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.keyInfoListText}>VIN Number</Text>
                                    <Text style={styles.keyInfoListText}>{post.vin}</Text>
                                </View>
                            </View>
                            
                        </View>
                        <View style={styles.containerBox}>
                            <Text style={styles.keyInfoText}>Description</Text>
                            <Text style={styles.descText}>{post.description}</Text>
                           
                                
                        </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
};

export default DetailedPost;
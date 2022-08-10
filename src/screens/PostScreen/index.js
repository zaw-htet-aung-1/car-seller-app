import React from "react";
import { View,Text } from "react-native"
import DetailedPost from "../../components/DetailedPost";
import places from '../../../assets/data/feed';
// import Router from "../../navigation/ExploreNavigator";
import { useRoute } from "@react-navigation/native";

const PostScreen = ({route}) => {

    const {postId} = route.params;
    
    // const post = places.find(place=> place.id === route.params.postId);
    return (
        <View style={{backgroundColor:'white'}}>
            <DetailedPost postId={postId}/>
        </View>
    );
};

export default PostScreen;

import React from "react";
import { View } from "react-native-web"
import DetailedPost from "../../components/DetailedPost";
import places from '../../../assets/data/feed';

const post = places[0];
const PostScreen = () => {
    return (
        <View style={{backgroundColor:'white'}}>
            <DetailedPost post={post}/>
        </View>
    );
};

export default PostScreen;
import React from "react";
import { View,Text,Pressable } from "react-native";

const ProfileScreen = () => {

    return (
        <View style={{
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Pressable style={{
                width:'100%',
                height:50,
                backgroundColor:'black',
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Text style={{color:'white'}}>Log Out</Text>
            </Pressable>
           
        </View>
    );
};

export default ProfileScreen;
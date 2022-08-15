import React from 'react';
import {View,Button, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row', marginTop:15}}>
                    <Avatar.Image
                        source={{
                            uri:'https://staticg.sportskeeda.com/editor/2022/02/49579-16442647764723-1920.jpg',
                        }}
                        size={80}
                    />
                    <View style={{marginLeft:20}}>
                        <Title style={[styles.title,
                        {marginTop:15,
                        marginBottom:5}
                        ]}>Zaw Htet Aung</Title>
                        <Caption style={styles.caption}>@zawHA</Caption>
                    </View>
                </View>
           </View>

           <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name='map-marker-radius' color='#777777' size={20}/>
                    <Text style={{color:'#777777', marginLeft:20}}>Botahtaung,Yangon</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='phone' color='#777777' size={20}/>
                    <Text style={{color:'#777777', marginLeft:20}}>09792754405</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='email' color='#777777' size={20}/>
                    <Text style={{color:'#777777', marginLeft:20}}>zha@gmail.com</Text>
                </View>
           </View>

           {/* <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox,
                {borderRightColor:'#dddddd',
                borderRightWidth:1
                }
                ]}>
                    <Title>Post1</Title>
                    <Caption>15</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>Post2</Title>
                    <Caption>15</Caption>
                </View>
           </View> */}

           <View style={styles.menuWrapper}>
            <TouchableRipple onPress={()=> navigation.navigate('Edit Profile')}>
                <View style={styles.menuItem}>
                    <Icon name='account-edit' color='black' size={25}/>
                    <Text style={styles.menuItemText}>Edit Profile</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={()=>navigation.navigate('Home')}>
                <View style={styles.menuItem}>
                    <Icon name='heart-outline' color='black' size={25}/>
                    <Text style={styles.menuItemText}>Your Favorites</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={()=>navigation.navigate('Home')}>
                <View style={styles.menuItem}>
                    <Icon name='bell' color='black' size={25}/>
                    <Text style={styles.menuItemText}>My Posts</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={()=> navigation.navigate('Sign In')}>
                <View style={styles.menuItem}>
                    <Entypo name='log-out' color='black' size={25}/>
                    <Text style={styles.menuItemText}>Log Out</Text>
                </View>
            </TouchableRipple>
           </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
    borderTopWidth:1,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
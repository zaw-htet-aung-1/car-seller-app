import React from 'react';
import { View,
    StyleSheet,
    Button,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    SafeAreaView
 } from 'react-native';

//  import BottomSheet  from 'reanimated-bottom-sheet';
//  import Animated from 'react-native';

 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';


const EditProfileScreen =() => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{margin:20}}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={() => {}}>
                        <View style={{
                            height:100,
                            width:100,
                            borderRadius:15,
                            justifyContent:'center',
                            alignItems:'center',
                        }}>
                            <ImageBackground
                                source={{
                                    uri:'https://staticg.sportskeeda.com/editor/2022/02/49579-16442647764723-1920.jpg'
                                    }}
                                    style={{height:100, width:100}}
                                    imageStyle={{borderRadius:15}}
                                    >
                                        <View style={{
                                            flex:1,
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }}>
                                            <Icon name='camera' size={25} color='#fff' style={{
                                                opacity:0.9,
                                                alignItems:'center',
                                                justifyContent:'center',
                                                borderWidth:1,
                                                borderColor:'#fff',
                                                borderRadius:10,
                                            }}/>
                                        </View>
                            </ImageBackground>
                        </View>

                    </TouchableOpacity>
                    <Text style={{marginTop:10, fontSize:18, fontWeight:'bold'}}>
                        Zaw Htet Aung
                    </Text>
                </View>
                <View style={styles.action}>
                    <FontAwesome name='user-o' size={20}/>
                    <TextInput
                    placeholder='First Name'
                    placeholderTextColor='#666666'
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name='user-o' size={20}/>
                    <TextInput
                    placeholder='Last Name'
                    placeholderTextColor='#666666'
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name='phone' size={20}/>
                    <TextInput
                    placeholder='Phone Number'
                    placeholderTextColor='#666666'
                    keyboardType='number-pad'
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name='envelope' size={20}/>
                    <TextInput
                    placeholder='Email'
                    placeholderTextColor='#666666'
                    keyboardType='email-address'
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Icon name='map-marker-outline' size={20}/>
                    <TextInput
                    placeholder='City'
                    placeholderTextColor='#666666'
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                <Icon name='map-marker-outline' size={20}/>
                    <TextInput
                    placeholder='Township'
                    placeholderTextColor='#666666'
                    style={styles.textInput}
                    />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
            
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>

       
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: 'black',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
      fontSize:12
    },
  });
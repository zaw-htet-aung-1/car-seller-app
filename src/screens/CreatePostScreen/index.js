import React, {useState} from 'react';
import { View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    ScrollView
 } from 'react-native';

import CustomCreateInput from '../../components/CustomCreateInput';
import DropDownPicker from 'react-native-dropdown-picker';

 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const EditProfileScreen =() => {

  // const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');
  const [buildType, setBuildType] = useState('');
  const [trim, setTrim] = useState('');
  const [color, setColor] = useState('');
  const [enginePower, setEnginePower] = useState('');
  const [mileage, setMileage] = useState('');
  const [transmission, setTransmission] = useState('');
  const [gear, setGear] = useState('');
  const [steeringPosition, setSteeringPosition] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [vin, setVin] = useState('');
  const [licenceStatus, setLicenceStatus] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [plateColor, setPlateColor] = useState('');
  const [plateDivision, setPlateDivision] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [doorNumber, setDoorNumber] = useState('');
  const [numberOfOwners, setNumberOfOwners] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  

    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          
        
              <View style={{margin:20}}>
                <View style={{}}>
                    <TouchableOpacity onPress={() =>('')}>
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
                    </View>

                    <View style={styles.dropDownBox}>  
                      <DropDownPicker
                        items={[
                        {label: 'English', value: 'en'},
                        {label: 'Deutsch', value: 'de'},
                        {label: 'French', value: 'fr'},
                        ]}
                        // defaultIndex={0}
                        // containerStyle={{height: 40}}
                        onChangeItem={item => console.log(item.label, item.value)}
                        style={styles.dropDown}
                      />
                    </View>
                        
                        <View>
                          <CustomCreateInput 
                              placeholder="Model" 
                              value={model} 
                              setValue={setModel}
                          />
                        </View>
                        
                        <View>
                          <CustomCreateInput 
                              placeholder="Year" 
                              value={year} 
                              setValue={setYear}
                          />
                        </View>
                        
                        <View>
                          <CustomCreateInput 
                              placeholder="Condition" 
                              value={condition} 
                              setValue={setCondition}
                          />
                        </View>
                        
                        <View>
                          <CustomCreateInput 
                              placeholder="Price" 
                              value={price} 
                              setValue={setPrice}
                          />
                        </View>

                        <View>
                          <CustomCreateInput 
                              placeholder="Build Type" 
                              value={buildType} 
                              setValue={setBuildType}
                          />
                        </View>

                        <View>
                          <CustomCreateInput 
                              placeholder="Trim" 
                              value={trim} 
                              setValue={setTrim}
                          />
                        </View>

                        <View>
                          <CustomCreateInput 
                              placeholder="Color" 
                              value={color} 
                              setValue={setColor}
                          />
                        </View>

                        <View>
                          <CustomCreateInput 
                              placeholder="Engine Power" 
                              value={enginePower} 
                              setValue={setEnginePower}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Mileage" 
                              value={mileage} 
                              setValue={setMileage}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Transmission" 
                              value={transmission} 
                              setValue={setTransmission}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Gear" 
                              value={gear} 
                              setValue={setGear}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Steering Position" 
                              value={steeringPosition} 
                              setValue={setSteeringPosition}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Fuel Type" 
                              value={fuelType} 
                              setValue={setFuelType}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder=" Number" 
                              value={vin} 
                              setValue={setVin}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Licence Status" 
                              value={licenceStatus} 
                              setValue={setLicenceStatus}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Plate Number" 
                              value={plateNumber} 
                              setValue={setPlateNumber}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Plate Color" 
                              value={plateColor} 
                              setValue={setPlateColor}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Plate Division" 
                              value={plateDivision} 
                              setValue={setPlateDivision}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Seat Number" 
                              value={seatNumber} 
                              setValue={setSeatNumber}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Door Number" 
                              value={doorNumber} 
                              setValue={setDoorNumber}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Number Of Owners" 
                              value={numberOfOwners} 
                              setValue={setNumberOfOwners}
                          />
                        </View>
                        <View>
                          <CustomCreateInput 
                              placeholder="Description" 
                              value={description} 
                              setValue={setDescription}
                          />
                        </View>
                        <View>
                          <View>
                            <CustomCreateInput 
                                placeholder="Phone Number" 
                                value={phoneNumber} 
                                setValue={setPhoneNumber}
                            />
                          </View>
                          <View>
                            <CustomCreateInput 
                                placeholder="Address" 
                                value={address} 
                                setValue={setAddress}
                            />
                          </View>
                        </View>

                        <View style={styles.buttons}>
                        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                          <Text style={styles.panelButtonTitle}>Submit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                          <Text style={styles.panelButtonTitle}>Back</Text>
                        </TouchableOpacity>
                        </View>
                        
                </View>
            {/* </Animated.View> */}
             
        </SafeAreaView>
        </ScrollView> 
       
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    buttons:{
      flexDirection:'row',
      
    },
    dropDownBox:{
      // marginTop:20,
    },
    dropDown:{
      backgroundColor:'white',
      width:'100%',
      height:50,
      borderColor:'#e8e8e8',
      borderWidth:1,
      borderRadius:10,
      padding:10,
      marginVertical:15,
      justifyContent:'center'
    },
    
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#88E4C4',
      alignItems: 'center',
      marginTop: 10,
      width:'40%',
      marginLeft:25
    },
    commandButton2: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: 'red',
      alignItems: 'center',
      marginTop: 10,
      width:'40%',
      marginLeft:25
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
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
    // panelButton: {
    //   padding: 13,
    //   borderRadius: 10,
    //   backgroundColor: 'black',
    //   alignItems: 'center',
    //   marginVertical: 7,
    // },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
  
  });
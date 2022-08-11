import React, {useState} from 'react';
import { View,
    StyleSheet,
    Button,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    SafeAreaView,
    ScrollView
 } from 'react-native';

 import BottomSheet  from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import CustomCreateInput from '../../components/CustomCreateInput';

 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EditProfileScreen =() => {
  // renderInner =() => (
  //   <View style={styles.panel}>
  //     <View style={{alignItems:'center'}}>
  //       <Text style={styles.panelTitle}>Upload Photo</Text>
  //       <Text style={styles.panelSubtitle}>Choose Photo To Upload </Text>
  //     </View>
  //     <TouchableOpacity style={styles.panelButton}>
  //       <Text style={styles.panelButtonTitle}>Take Photo</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity style={styles.panelButton}>
  //       <Text style={styles.panelButtonTitle}>Choose From Library</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
  //       <Text style={styles.panelButtonTitle}>Cancel</Text>
  //     </TouchableOpacity>
  //   </View>
    
  // );

  // renderHeader =() =>(
  //   <View style={styles.header}>
  //     <View style={styles.panelHeader}>
  //       <View style={styles.panelHandle}></View>
  //     </View>
  //   </View>

  // );
  // bs = React.createRef();
  // fall = new Animated.Value(1);

  const [manufacturer, setManufacturer] = useState('');
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
          
          {/* <BottomSheet
            ref={this.bs}
            snapPoints={[330,0]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
          /> */}
            {/* <Animated.View style={{margin:20, 
              opacity:Animated.add(0.1, Animated.multiply(this.fall,1.0)),}}> */}
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


                        <View>
                          <CustomCreateInput 
                              placeholder="Manufacturer" 
                              value={manufacturer} 
                              setValue={setManufacturer}
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

                        <TouchableOpacity style={styles.commandButton2} onPress={() => {}}>
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
      backgroundColor: 'black',
      alignItems: 'center',
      marginVertical: 7,
    },
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
import StartInstruct from './StartInstruct';
import { Linking, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';
import { DefConatiner } from './DefContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MotivationBtn from '../components/MotivationBtn';
import SideBar from '../components/SideBar';

const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage successfully cleared!');
  } catch (e) {
    console.log('Error clearing AsyncStorage: ', e);
  }
}



export const MenuScreen = ({ navigation }) => {
  return (
    <DefConatiner navigation={navigation} content={
      <>
        <MotivationBtn />
        <Image style={{}} source={require('../assets/LayWorkImg.png')} />
      </>
    } />
  )
}
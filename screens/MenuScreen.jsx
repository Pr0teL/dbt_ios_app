import { Image } from 'react-native';
import { DefConatiner } from './DefContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MotivationBtn from '../components/MotivationBtn';

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
        <Image resizeMode="contain" style={{ width: 350, height: 400 }} source={require('../assets/LayWorkingGirl.png')} />
      </>
    } />
  )
}
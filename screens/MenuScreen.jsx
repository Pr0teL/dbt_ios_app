import StartInstruct from './StartInstruct';
import { Linking, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';
import { DefConatiner } from './DefContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <DefConatiner content={
            <>
                <TouchableOpacity style={{ width: "85%", borderRadius: "15px", height: "10%", marginBottom: "10%", backgroundColor: "#FFF", justifyContent: 'center', marginTop: "27%" }} onPress={() => clearAsyncStorage()}>
                    <Text style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", }}>Не забывай отдыхать</Text>
                </TouchableOpacity>
                <Image style={{}} source={require('../assets/DanceMenu.png')} />
            </>
        } />
    )
}
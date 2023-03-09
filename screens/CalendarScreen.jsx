import { Image, View } from 'react-native';
import { DefConatiner } from './DefContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MotivationBtn from '../components/MotivationBtn';
import CustomCalendar from '../components/CustomCalendar';


export const CalendarScreen = ({ navigation }) => {
  return (
    <DefConatiner navigation={navigation} content={
      <View style={{width: "90%"}}>
        <CustomCalendar/>
      </View>
    } />
  )
}
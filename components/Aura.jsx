import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { SvgXml } from 'react-native-svg';
import Elipse from '../assets/Ellipse';


export default function Aura() {
    return (
        <SvgXml style={{position: "absolute", zIndex: '-1', marginTop: "50%"}} xml={Elipse} />
    );
}


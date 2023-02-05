import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';


export default function Aura() {
    return (
        <Image style={{position: "absolute", zIndex: '-1', marginTop: "50%"}} source={require('../assets/aura.png')} />
    );
}


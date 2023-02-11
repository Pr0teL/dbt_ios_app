import StartInstruct from './StartInstruct';
import { Linking, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';


export const DefConatiner = ({ navigation, content }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            paddingTop: "20%"
        }}>
            <View style={{alignItems: "center",marginBottom: "10%",  width: "90%",  flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity onPress={() => navigation.navigate("Start")} style={{}}>
                    <Image style={{}} source={require('../assets/Union.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Start")} style={{}}>
                    <Image style={{}} source={require('../assets/Search.png')} />
                </TouchableOpacity>
            </View>
            <Text style={{width: "90%", fontSize: "20px", fontWeight: '600', marginBottom: "5%"}}>Привет, мой друг</Text>
            <Aura/>
            {content}
            <View style={{alignItems: "center", marginTop: "auto" ,marginBottom: "10%",  width: "90%",  flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity onPress={() => navigation.navigate("Start")} style={{}}>
                    <Text>КРИЗИС</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Start")} style={{}}>
                    <Image style={{}} source={require('../assets/Eye.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Start")} style={{}}>
                    <Image style={{}} source={require('../assets/Smile_reverse.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Start")} style={{}}>
                    <Image style={{}} source={require('../assets/Friends.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Start")} style={{}}>
                <Text>СТАТЬИ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
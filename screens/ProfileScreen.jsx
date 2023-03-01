import { Linking, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { DefConatiner } from './DefContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MotivationBtn from '../components/MotivationBtn';
import React from 'react';


export const ProfileScreen = ({ navigation }) => {
    const [profileData, setProfileData] = React.useState({
        name: "",
        reminder: ""
    })

    const [name, setName] = React.useState("мой друг");
    
    React.useEffect(() => {
        const loadData = async () => {
            try {
                const dataJson = await AsyncStorage.getItem('profileData');
                if (dataJson !== null) {
                    const savedData = JSON.parse(dataJson);
                    setProfileData(savedData);
                    setName(savedData.name)
                }
            } catch (error) {
                console.log(`Error loading data: ${error}`);
            }
        };

        loadData();
    }, []);

    const saveData = async () => {
        try {
            const dataJson = JSON.stringify(profileData);
            await AsyncStorage.setItem('profileData', dataJson);
            setName(profileData.name)
            console.log('Data saved successfully');
        } catch (error) {
            console.log(`Error saving data: ${error}`);
        }
    };

    return (
        <DefConatiner name={name} navigation={navigation} content={
            <>
                <View style={{flexDirection: "row", width: "90%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "5%", marginTop: "6%"}}>
                    <Text style={{fontSize: "18px", fontWeight: "600", marginRight: "5%"}}>Имя/ник |</Text>
                    <TextInput value={profileData.name} onChangeText={(text) => setProfileData({...profileData, name: text})} onEndEditing={() => saveData()} placeholder='Введите имя' style={{fontSize: "20px", fontWeight: "500", flex: 1}}></TextInput>
                </View>
                <View style={{ width: "90%", marginBottom: "27%"}}>
                    <Text style={{fontSize: "18px", fontWeight: "600", marginRight: "5%", marginBottom: "4%", }}>Напоминание: зачем мне это?</Text>
                    <TextInput value={profileData.reminder} onChangeText={(text) => setProfileData({...profileData, reminder: text})} onEndEditing={() => saveData()} placeholder='Введите напоминание' style={{fontSize: "20px", fontWeight: "500", borderWidth: "1px", padding: "2%", borderRadius: "5px"}}></TextInput>
                </View>

                <MotivationBtn />
                {/* <Image style={{}} source={require('../assets/LayWorkImg.png')} /> */}
            </>
        } />
    )
}
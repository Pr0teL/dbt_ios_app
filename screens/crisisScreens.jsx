import { Linking, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefConatiner } from './DefContainer';
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';





export const Crisis_1 = ({ navigation }) => {

    function handleCallPress(tel) {
        if (data) {
            Linking.openURL(`tel:${tel}`);
        }
        else {
            Alert.alert('Номер телефона отсутствует', 'Введите номер телефона специалиста в Плане безопасности')
        }
        
    }

    useFocusEffect(
        React.useCallback(() => {
            const loadData = async () => {
                try {
                    const dataJson = await AsyncStorage.getItem('myData');
                    if (dataJson !== null) {
                        const savedData = JSON.parse(dataJson);
                        setData(savedData.spec_tel_1);
                    }
                } catch (error) {
                    console.log(`Error loading data: ${error}`);
                }
            };
    
            loadData();
        }, [])
      );

    React.useEffect(() => {
        const loadData = async () => {
            try {
                const dataJson = await AsyncStorage.getItem('myData');
                if (dataJson !== null) {
                    const savedData = JSON.parse(dataJson);
                    setData(savedData.spec_tel_1);
                }
            } catch (error) {
                console.log(`Error loading data: ${error}`);
            }
        };

        loadData();
    }, []);



    const [data, setData] = React.useState();
    return (
        <DefConatiner navigation={navigation} content={
            <>
                <ScrollView contentContainerStyle={{alignItems: "center"}} style={{width: "90%"}}>
                    <Image style={{}} source={require('../assets/crisis.png')} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Стрессоустойчивость</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>СТОП</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>ТРУД</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>НАВЫКИ ОТВЛЕЧЕНИЯ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>УЛУЧШИТЬ МОМЕНТ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>ПЕРЕЖИТЬ С МУДРЫМ РАЗУМОМ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>«ЗА» и «ПРОТИВ»</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCallPress(data)} style={{ backgroundColor: "#FFFFFF", padding: "3%", borderRadius: "6px" }}>
                        <Text style={{ fontSize: "18px" }}>КРИЗИСНЫЙ ЗВОНОК</Text>
                    </TouchableOpacity>
                </ScrollView>
            </>
        } />
    )
}

import StartInstruct from './StartInstruct';
import { Linking, Text, TouchableOpacity, View, StyleSheet, Image , Animated, StatusBar} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';
import SideBar from '../components/SideBar';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const DefConatiner = ({ navigation, content, name}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const sidebarWidth = 200;
    const sidebarAnimation = new Animated.Value(isOpen ? 0 : -sidebarWidth);

    const [defName, setDefName] = React.useState("мой друг");
    function handleName () {
        const loadData = async () => {
            try {
                const dataJson = await AsyncStorage.getItem('profileData');
                if (dataJson !== null) {
                    const savedData = JSON.parse(dataJson);
                    setDefName(savedData.name);
                }
            } catch (error) {
                console.log(`Error loading data: ${error}`);
            }
        };

        loadData();
    }
    React.useEffect(() => {
        handleName()
    }, [name]);

    useFocusEffect(
        React.useCallback(() => {
          handleName()
        }, [])
      );

  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
      Animated.timing(sidebarAnimation, {
        toValue: isOpen ? -sidebarWidth : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    return (
       <>
       <StatusBar barStyle={'dark-content'}/>
       <SideBar navigation={navigation} isSidebarOpen={isOpen} toggleSidebar={toggleSidebar} sidebarAnimation={sidebarAnimation}/>
        <View style={{
            flex: 1,
            backgroundColor: '#e6e6e6',
            alignItems: 'center',
            paddingTop: "20%"
        }}>
            <View style={{alignItems: "center",marginBottom: "10%",  width: "90%",  flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity onPress={toggleSidebar} style={{}}>
                    <Image style={{}} source={require('../assets/Union.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("HelpPlan")} style={{}}>
                    <Image style={{}} source={require('../assets/Search.png')} />
                </TouchableOpacity>
            </View>
            <Text style={{width: "90%", fontSize: "20px", fontWeight: '600', marginBottom: "5%"}}>Привет, {defName}</Text>
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
       </>
    )
}
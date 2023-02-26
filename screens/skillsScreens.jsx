import { Linking, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefConatiner } from './DefContainer';
import React from 'react';





export const Skills_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <Image style={{}} source={require('../assets/Hands.png')} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Навыки межличностной эффективности</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>ДРУГ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>ПОПРОСИ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>ЧЕСТь</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Валидация</Text>
                    </TouchableOpacity>
                    <Image style={{}} source={require('../assets/CatGirl.png')} />
                </ScrollView>
            </>
        } />
    )
}

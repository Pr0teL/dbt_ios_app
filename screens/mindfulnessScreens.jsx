import { Linking, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefConatiner } from './DefContainer';
import React from 'react';
import EyeSvg from '../assets/EyeSvg';
import { SvgXml } from 'react-native-svg';
import DzenSvg from '../assets/DzenSvg';





export const Mindfulness_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200}/>
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Осознанность</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Мудрый разум</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Навыки осознанности «Что»</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Навыки осознанности «Как»</Text>
                    </TouchableOpacity>
                    <SvgXml xml={DzenSvg}/>
                </ScrollView>
            </>
        } />
    )
}

import { Linking, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { DefConatiner } from './DefContainer';
import React from 'react';
import { SvgXml } from 'react-native-svg';





export const Articles_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <ScrollView contentContainerStyle={{ alignItems: "center"}} style={{ width: "90%" }}>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "48%", borderRadius: "15px",justifyContent: "center", backgroundColor: "#9CABF2", marginBottom: "3%", padding: "2%" }}>
                            <Text style={{ fontSize: "40px", textAlign: "center", fontWeight: "500" }}>Зачем нужна ДБТ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "48%",justifyContent: "center", borderRadius: "15px", backgroundColor: "#9CABF2", marginBottom: "3%", padding: "2%" }}>
                            <Text style={{ fontSize: "25px", textAlign: "center", fontWeight: "500" }}>Био-социальная теория</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "48%",justifyContent: "center", borderRadius: "15px", backgroundColor: "#9CABF2", marginBottom: "3%", padding: "2%" }}>
                            <Text style={{ fontSize: "23px", textAlign: "center", fontWeight: "500" }}>Миссия приложения</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{ width: "48%",justifyContent: "center", borderRadius: "15px", backgroundColor: "#9CABF2", marginBottom: "3%", padding: "2%" }}>
                            <Text style={{ fontSize: "40px", textAlign: "center", fontWeight: "500" }}>Что такое ПРЛ</Text>
                        </TouchableOpacity>
                    </View>
                    <Image resizeMode="contain" style={{width: 350, height: 250}} source={require('../assets/ReadingGirl.png')} />
                </ScrollView>
            </>
        } />
    )
}

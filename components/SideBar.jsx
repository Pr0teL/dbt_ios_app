import { Text, TouchableOpacity, View, Image, StyleSheet, Animated } from 'react-native';
import React from 'react';


export default function SideBar({isSidebarOpen, toggleSidebar, sidebarAnimation, navigation}) {


    let styles = StyleSheet.create({
        sidebar: {
            width: 190,
            height: "100%",
            backgroundColor: "#414141",
            zIndex: "3",
            position: "absolute",
            paddingTop: "20%",
            paddingLeft: "10%"
        },
    });

    return (
        <>
            {isSidebarOpen && 
            <TouchableOpacity style={{width: "100%", height: '100%', position: "absolute", zIndex: "1"}} onPress={toggleSidebar}>
                <View style={{ width: "100%", height: '100%', backgroundColor: "#000000", opacity: "0.3", position: "absolute", zIndex: "2" }}></View>
            </TouchableOpacity>
            }
            <Animated.View style={[styles.sidebar, { transform: [{ translateX: sidebarAnimation }] }]}>
                <Image style={{marginBottom: "25%"}} source={require('../assets/UnionBg.png')} />
                <TouchableOpacity style={{}} onPress={() =>{ 
                    toggleSidebar()
                    return navigation.navigate("Profile")
                    }}>
                    <Text style={{ fontSize: "20px", color: "#D1D1D1", fontWeight: "600",marginLeft: "5%", marginBottom: "20%" }}>Профиль</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{}} onPress={() =>{ 
                    toggleSidebar()
                    return navigation.navigate("Menu")
                    }}>
                    <Text style={{ fontSize: "20px", color: "#D1D1D1", fontWeight: "600",marginLeft: "5%", marginBottom: "20%" }}>Главная страница</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{}} onPress={() =>{ 
                    toggleSidebar()
                    return navigation.navigate("HelpPlan")
                    }}>
                    <Text style={{ fontSize: "20px", color: "#D1D1D1", fontWeight: "600",marginLeft: "5%", marginBottom: "20%" }}>План безопасности</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{}}>
                    <Text style={{ fontSize: "20px", color: "#D1D1D1", fontWeight: "600",marginLeft: "5%", marginBottom: "20%" }}>Настройки</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{}}>
                    <Text style={{ fontSize: "20px", color: "#D1D1D1", fontWeight: "600",marginLeft: "5%", marginBottom: "20%" }}>Помощь</Text>
                </TouchableOpacity>
            </Animated.View>
        </>

    );
}




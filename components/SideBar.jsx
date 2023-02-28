import { Text, TouchableOpacity, View, Image, StyleSheet, Animated } from 'react-native';
import React from 'react';
import Svg, { SvgXml, Path } from 'react-native-svg';
import ToggleSidebarSvg from '../assets/ToggleSidebarSvg';


export default function SideBar({ isSidebarOpen, toggleSidebar, sidebarAnimation, navigation }) {


    let styles = StyleSheet.create({
        sidebar: {
            width: 190,
            height: "100%",
            backgroundColor: "#F2F2F2",
            zIndex: "3",
            position: "absolute",
            paddingTop: "38%",
            paddingLeft: "10%"
        },
    });

    return (
        <>
            {isSidebarOpen &&
                <TouchableOpacity style={{ width: "100%", height: '100%', position: "absolute", zIndex: "1" }} onPress={toggleSidebar}>
                    <View style={{ width: "100%", height: '100%', backgroundColor: "#000000", opacity: "0.3", position: "absolute", zIndex: "2" }}></View>
                </TouchableOpacity>
            }
            <Animated.View style={[styles.sidebar, { transform: [{ translateX: sidebarAnimation }] }]}>
                <TouchableOpacity style={{marginBottom: "20%"}} onPress={toggleSidebar}>
                    <SvgXml xml={ToggleSidebarSvg} width="37" height="37" />
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: "2px", borderBottomColor: "#D9D9DA", width: "90%", marginBottom: "10%"}} onPress={() => {
                    toggleSidebar()
                    return navigation.navigate("Profile")
                }}>
                    <Text style={{ fontSize: "20px", color: "#000", fontWeight: "600", marginLeft: "5%", marginBottom: "10%" }}>Профиль</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: "2px", borderBottomColor: "#D9D9DA", width: "90%", marginBottom: "10%"}} onPress={() => {
                    toggleSidebar()
                    return navigation.navigate("Menu")
                }}>
                    <Text style={{ fontSize: "20px", color: "#000", fontWeight: "600", marginLeft: "5%", marginBottom: "10%" }}>Главная страница</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: "2px", borderBottomColor: "#D9D9DA", width: "90%", marginBottom: "10%"}} onPress={() => {
                    toggleSidebar()
                    return navigation.navigate("HelpPlan")
                }}>
                    <Text style={{ fontSize: "20px", color: "#000", fontWeight: "600", marginLeft: "5%", marginBottom: "10%" }}>План безопасности</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: "2px", borderBottomColor: "#D9D9DA", width: "90%", marginBottom: "10%"}}>
                    <Text style={{ fontSize: "20px", color: "#000", fontWeight: "600", marginLeft: "5%", marginBottom: "10%" }}>Настройки</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: "2px", borderBottomColor: "#D9D9DA", width: "90%", marginBottom: "10%"}}>
                    <Text style={{ fontSize: "20px", color: "#000", fontWeight: "600", marginLeft: "5%", marginBottom: "10%" }}>Помощь</Text>
                </TouchableOpacity>
            </Animated.View>
        </>

    );
}




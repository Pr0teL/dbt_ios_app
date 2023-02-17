import StartInstruct from './StartInstruct';
import { Linking, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';
import { DefConatiner } from './DefContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MotivationBtn from '../components/MotivationBtn';
import SideBar from '../components/SideBar';


export const HelpPlan = ({ navigation }) => {
    return (
        <DefConatiner navigation={navigation} content={
            <ScrollView contentContainerStyle={{ width: "100%" }}>
                <View style={{ flex: 1, width: "90%" }}>
                    <Text style={{ fontSize: "30px", width: "100%", fontWeight: "800", marginBottom: "2%" }}>план безопасности</Text>
                    <Text style={{ fontSize: "14px", fontWeight: "500", lineHeight: "18px", marginBottom: "5%", textAlign: "center" }}>Сигналы (мысли, триггеры,ситуации и т.д.), предупреждающие о приблежении кризиса:</Text>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "2%" }}>
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "4%" }}>
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <Text style={{ fontSize: "14px", fontWeight: "500", lineHeight: "18px", marginBottom: "4%", textAlign: "center" }}>Внутренняя стратегия, что я могу сделать, чтобы отвлечься от проблемы не прибегая к помощи человека:</Text>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "2%" }}>
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "2%" }}>
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <Text style={{ fontSize: "14px", fontWeight: "500", lineHeight: "18px", marginBottom: "3%", textAlign: "center" }}>Люди, которых я могу попросить о помощи:</Text>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "2%" }}>
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "5%" }}>
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <Text style={{ fontSize: "14px", fontWeight: "500", lineHeight: "18px", marginBottom: "2%", textAlign: "center" }}>Специалисты и организации, с которыми я могу связаться в случае<Text style={{ color: "#D20505" }}> кризиса</Text>:</Text>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "5%" }}>
                        <View style={{ backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} >
                            <Text style={{ fontSize: "16px", fontWeight: "600" }}>
                                Имя специалиста:
                            </Text>
                        </View>
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "5%" }}>
                        <View style={{ backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} >
                            <Text style={{ fontSize: "16px", fontWeight: "600" }}>
                                Номер телефона:
                            </Text>
                        </View>
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "5%" }}>
                        <View style={{ backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} >
                            <Text style={{ fontSize: "15px", fontWeight: "600" }}>
                                Номер телефона 2:
                            </Text>
                        </View>
                        <TextInput style={{ backgroundColor: "#FFF", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "5%" }}>
                        <View style={{ backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", width: "100%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} >
                            <Text style={{ fontSize: "15px", fontWeight: "600" }}>
                            Телефон горячей линии: <Text style={{fontWeight: "800"}}>051</Text> или <Text style={{fontWeight: "800"}}>112</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        } />
    )
}
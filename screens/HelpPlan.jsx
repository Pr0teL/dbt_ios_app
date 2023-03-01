
import { Linking, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';
import { DefConatiner } from './DefContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';



export const HelpPlan = ({ navigation }) => {



    React.useEffect(() => {
        const loadData = async () => {
            try {
                const dataJson = await AsyncStorage.getItem('myData');
                if (dataJson !== null) {
                    const savedData = JSON.parse(dataJson);
                    setData(savedData);
                }
            } catch (error) {
                console.log(`Error loading data: ${error}`);
            }
        };

        loadData();
    }, []);



    const [data, setData] = React.useState({
        signal_1: "",
        signal_2: "",
        signal_3: "",
        signal_4: "",
        strat_1: "",
        strat_2: "",
        strat_3: "",
        strat_4: "",
        help_1: "",
        help_2: "",
        help_3: "",
        help_4: "",
        spec_name: "",
        spec_tel_1: "",
        spec_tel_2: "",
    });

    const saveData = async () => {
        try {
            const dataJson = JSON.stringify(data);
            await AsyncStorage.setItem('myData', dataJson);
            console.log('Data saved successfully');
        } catch (error) {
            console.log(`Error saving data: ${error}`);
        }
    };

    function handleCallPress(tel) {
        Linking.openURL(`tel:${tel}`);
    }

    return (
        <DefConatiner navigation={navigation} content={
            <ScrollView contentContainerStyle={{ width: "100%" }}>
                <View style={{ flex: 1, width: "90%" }}>
                    <Text style={{ fontSize: "30px", width: "100%", fontWeight: "800", marginBottom: "2%" }}>план безопасности</Text>
                    <Text style={{ fontSize: "14px", fontWeight: "500", lineHeight: "18px", marginBottom: "5%", textAlign: "center" }}>Сигналы (мысли, триггеры,ситуации и т.д.), предупреждающие о приблежении кризиса:</Text>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "2%" }}>
                        <TextInput value={data.signal_1} onChangeText={(text) => setData({ ...data, signal_1: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput value={data.signal_2} onChangeText={(text) => setData({ ...data, signal_2: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "4%" }}>
                        <TextInput value={data.signal_3} onChangeText={(text) => setData({ ...data, signal_3: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput value={data.signal_4} onChangeText={(text) => setData({ ...data, signal_4: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <Text style={{ fontSize: "14px", fontWeight: "500", lineHeight: "18px", marginBottom: "4%", textAlign: "center" }}>Внутренняя стратегия, что я могу сделать, чтобы отвлечься от проблемы не прибегая к помощи человека:</Text>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "2%" }}>
                        <TextInput value={data.strat_1} onChangeText={(text) => setData({ ...data, strat_1: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput value={data.strat_2} onChangeText={(text) => setData({ ...data, strat_2: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "2%" }}>
                        <TextInput value={data.strat_3} onChangeText={(text) => setData({ ...data, strat_3: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput value={data.strat_4} onChangeText={(text) => setData({ ...data, strat_4: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <Text style={{ fontSize: "14px", fontWeight: "500", lineHeight: "18px", marginBottom: "3%", textAlign: "center" }}>Люди, которых я могу попросить о помощи:</Text>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "2%" }}>
                        <TextInput value={data.help_1} onChangeText={(text) => setData({ ...data, help_1: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput value={data.help_2} onChangeText={(text) => setData({ ...data, help_2: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "5%" }}>
                        <TextInput value={data.help_3} onChangeText={(text) => setData({ ...data, help_3: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                        <TextInput value={data.help_4} onChangeText={(text) => setData({ ...data, help_4: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <Text style={{ fontSize: "14px", fontWeight: "500", lineHeight: "18px", marginBottom: "2%", textAlign: "center" }}>Специалисты и организации, с которыми я могу связаться в случае<Text style={{ color: "#D20505" }}> кризиса</Text>:</Text>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "5%" }}>
                        <View style={{ backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} >
                            <Text style={{ fontSize: "16px", fontWeight: "600" }}>
                                Имя специалиста:
                            </Text>
                        </View>
                        <TextInput value={data.spec_name} onChangeText={(text) => setData({ ...data, spec_name: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "5%" }}>
                        <View style={{ backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} >
                            <TouchableOpacity onPress={() => handleCallPress(data.spec_tel_1)}>
                                <Text style={{ fontSize: "16px", fontWeight: "600" }}>Номер телефона:</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput value={data.spec_tel_1} onChangeText={(text) => setData({ ...data, spec_tel_1: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "5%" }}>
                        <View style={{ backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", width: "48%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} >
                            <TouchableOpacity onPress={() => handleCallPress(data.spec_tel_2)}>
                                <Text style={{ fontSize: "15px", fontWeight: "600" }}>Номер телефона:</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput value={data.spec_tel_2} onChangeText={(text) => setData({ ...data, spec_tel_2: text })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "48%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                    </View>
                    <View style={{ width: "100%", marginLeft: "3%", flexDirection: "row", justifyContent: "space-between", marginBottom: "5%" }}>
                        <View style={{ backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", width: "100%", fontSize: "20px", borderRadius: "6px", padding: "2%" }} >
                            <TouchableOpacity onPress={() => handleCallPress("112")}>
                                <Text style={{ fontSize: "15px", fontWeight: "600" }}>
                                    Телефон горячей линии: <Text style={{ fontWeight: "800" }}>051</Text> или <Text style={{ fontWeight: "800" }}>112</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        } />
    )
}
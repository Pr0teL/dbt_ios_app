import { Linking, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { DefConatiner } from './DefContainer';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import MotivationBtn from '../components/MotivationBtn';





export const Articles_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Articles_DBT")} style={{ width: "48%", borderRadius: "15px", justifyContent: "center", backgroundColor: "#9CABF2", marginBottom: "3%", padding: "2%" }}>
                            <Text style={{ fontSize: "40px", textAlign: "center", fontWeight: "500" }}>Зачем нужна ДБТ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Articles_BioSoc")} style={{ width: "48%", justifyContent: "center", borderRadius: "15px", backgroundColor: "#9CABF2", marginBottom: "3%", padding: "2%" }}>
                            <Text style={{ fontSize: "25px", textAlign: "center", fontWeight: "500" }}>Био-социальная теория</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Articles_Mission")} style={{ width: "48%", justifyContent: "center", borderRadius: "15px", backgroundColor: "#9CABF2", marginBottom: "3%", padding: "2%" }}>
                            <Text style={{ fontSize: "23px", textAlign: "center", fontWeight: "500" }}>Миссия приложения</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Articles_PRL")} style={{ width: "48%", justifyContent: "center", borderRadius: "15px", backgroundColor: "#9CABF2", marginBottom: "3%", padding: "2%" }}>
                            <Text style={{ fontSize: "40px", textAlign: "center", fontWeight: "500" }}>Что такое ПРЛ</Text>
                        </TouchableOpacity>
                    </View>
                    <Image resizeMode="contain" style={{ width: 350, height: 250 }} source={require('../assets/ReadingGirl.png')} />
                </ScrollView>
            </>
        } />
    )
}

export const Articles_DBT = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Articles_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>ДБТ поможет тебе:</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>• Почувствовать контакт с собой и наполненность.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>• Перестать жить на автомате.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>• Побороть предвзятость и оценочные суждения.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>• Справиться с конфликтами, стрессом и одиночеством.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>• Научиться жить, когда вокруг всё меняется.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>• Найти выход экстремально сильным эмоциям, справиться с эмоциональными перепадами.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>• Скорректировать импульсивное поведение, зависимости.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>• Научиться принимать себя и мир.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>• Побороть суицидальные мысли.</Text>
                    <MotivationBtn />
                </ScrollView>
            </>
        } />
    )
}

export const Articles_BioSoc = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Articles_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <Text style={{ fontSize: "30px", marginBottom: "10%", width: "100%", fontWeight: "500" }}>Биосоциальная теория</Text>
                    <Text style={{ fontSize: "30px", marginBottom: "6%", width: "90%" }}>Эмоциональная{"\n"}уязвимость — это{"\n"}БИОЛОГИЧЕСКИЙ ФАКТОР.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>Некоторые люди просто такими рождаются.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>Кто-то более чувствителен к эмоциональным стимулам. Такие люди распознают скрытую эмоциональную информацию, которую другие не видят.</Text>
                    <Text style={{ fontSize: "30px", marginBottom: "6%", width: "90%" }}>Импульсивность — это{"\n"}БИОЛОГИЧЕСКИЙ{"\n"}ФАКТОР.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>Некоторым людям тяжелее управлять своими действиями.</Text>
                    <Text style={{ fontSize: "28px", marginBottom: "6%", width: "90%" }}>Не подтверждающая СОЦИАЛЬНАЯ среда осложняет управление эмоциями.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>Не подтверждающее окружение не понимает твоих эмоций.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>Люди, которые не подтверждают твои эмоции, <Text style={{ fontSize: "25px", marginBottom: "6%", width: "90%" }}>ЧАСТО ПОСТУПАЮТ ТАК ИЗ ЛУЧШИХ ПОБУЖДЕНИЙ.</Text></Text>
                    <Text style={{ fontSize: "25px", marginBottom: "6%", width: "90%" }}>Неэффективная СОЦИАЛЬНАЯ среда — серьёзная проблема для тех, кто учится управлять своими эмоциями.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Articles_Mission = ({ navigation }) => {
    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Articles_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <Text style={{ fontSize: "30px", marginBottom: "10%", width: "100%", fontWeight: "500" }}>Привет! На связи разработчики приложения</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "100%" }}>Наша миссия — создать дополнительную подушку безопасности для людей с ментальными расстройствами.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "100%" }}>Помни, приложение не заменяет терапию. Оно позволяет иметь под рукой упражнения для самопомощи и помогает тем, кто пока не ходит на ДБТ терапию.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "100%" }}>Мы хотим, чтобы у каждого была доступная инструкция для помощи себе.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "100%" }}>Здесь ты найдешь упражнения по Осознанности, Межличностной эффективности, Эмоциональной регуляции и Стрессоустойчивости.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Articles_PRL = ({ navigation }) => {
    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Articles_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <Text style={{ fontSize: "25px", marginBottom: "10%", fontWeight: "500" }}>Что такое Пограничное расстройство личности?</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "100%" }}>Пограничное расстройство личности (ПРЛ) характеризуется многими факторами: эмоциональной нестабильностью, суицидальным поведением, гиперчувствительностью, проблемами в отношениях, ощущением пустоты, черно-белым мышлением и импульсивностью.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "100%" }}>От ПРЛ нельзя вылечиться, но можно научиться жить в гармонии с собой. Психотерапия считается основным инструментом для этого.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "100%" }}>Диагноз ПРЛ приносит много боли, но это не приговор.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "15%", width: "100%" }}>Мы собрали истории людей с Пограничным расстройством личности. Прочитать их можно тут и тут.</Text>
                    <MotivationBtn/>
                </ScrollView>
            </>
        } />
    )
}


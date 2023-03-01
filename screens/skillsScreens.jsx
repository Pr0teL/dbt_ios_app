import { Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { DefConatiner } from './DefContainer';
import React from 'react';
import FriendsSvg from '../assets/FriendsSvg';
import { SvgXml } from 'react-native-svg';





export const Skills_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={FriendsSvg} width={260} height={180} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Навыки межличностной эффективности</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Skills_Drug")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>ДРУГ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Skills_Poprosi")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>ПОПРОСИ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Skills_Chest")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>ЧЕСТь</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Skills_Valid")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Валидация</Text>
                    </TouchableOpacity>
                    <Image resizeMode="contain" style={{ width: 300, height: 350 }} source={require('../assets/CatGirl.png')} />
                </ScrollView>
            </>
        } />
    )
}

export const Skills_Drug = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Skills_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={FriendsSvg} width={260} height={180} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>ДРУГ</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• Проявляй <Text style={{ fontWeight: "700" }}>Д</Text>оброжелательность.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• Покажи <Text style={{ fontWeight: "700" }}>Р</Text>асположенность.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>У</Text>спешно валидируй.</Text>
                    <Text style={{ fontSize: "18px", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>Г</Text>овори непринужденно.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Skills_Poprosi = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Skills_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={FriendsSvg} width={260} height={180} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>ПОПРОСИ</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>П</Text>еречисли факты.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>О</Text>пиши свое отношение.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>П</Text>опроси, чего ты хочешь.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>Р</Text>асскажи, почему это хорошо.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>О</Text>бсуди разные варианты. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>С</Text>той на своем.</Text>
                    <Text style={{ fontSize: "18px", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>И</Text>зобрази уверенность.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Skills_Chest = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Skills_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={FriendsSvg} width={260} height={180} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>ЧЕСТь</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• Придерживайся <Text style={{ fontWeight: "700" }}>Ч</Text>естности с собой и другими.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>Е</Text>сли чувствуешь вину, извинись только один раз.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• Держись <Text style={{ fontWeight: "700" }}>С</Text>воих ценностей.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• Говори <Text style={{ fontWeight: "700" }}>Т</Text>олько правду.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Skills_Valid = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Skills_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={FriendsSvg} width={260} height={180} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Валидация</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• Признавай, что у мыслей и эмоций любого человека есть свои причины.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• Валидация ≠ согласие.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• Отсутсвие валидации причиняет боль.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• Валидация улучшает взаимоотношения.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>• Валидируй боль, эмоции, проблемы, факты, ситуации, мнения и убеждения.</Text>
                </ScrollView>
            </>
        } />
    )
}
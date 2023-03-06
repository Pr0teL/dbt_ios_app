import { Linking, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefConatiner } from './DefContainer';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import EmotionsSvg from '../assets/EmotionsSvg';




export const Emotions_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EmotionsSvg} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Навыки
                        эмоциональной регуляции
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Emotions_Facts")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Проверка фактов</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Emotions_Action")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Противоположное действие</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Emotions_Solution")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Решение проблемы</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Emotions_ABC")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>АВС</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Emotions_Zabota")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>ЗАБОТА</Text>
                    </TouchableOpacity>
                    <Image resizeMode="contain" style={{ width: 200, height: 250 }} source={require('../assets/DepressedGirl.png')} />
                </ScrollView>
            </>
        } />
    )
}


export const Emotions_Facts = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Emotions_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EmotionsSvg} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Проверка фактов
                    </Text>
                    <Image resizeMode="contain" style={{ width: 350, height: 400 }} source={require('../assets/EmotionsBlock.png')} />
                </ScrollView>
            </>
        } />
    )
}

export const Emotions_Action = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Emotions_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EmotionsSvg} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Противоположное действие</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>1. Определи эмоцию.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>2. Убедись, что эмоции основаны на фактах. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>3. Определи и опиши побуждение к действию.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>4. Обратись к мудрому мышлению.</Text>
                    <Text style={{ fontSize: "20px", marginBottom: "6%", width: "90%" }}>Если эмоция не соответствует фактам или поддаться эмоции неэффективно:</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>1. Определи противоположное побуждению действие.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>2. Действуй ровно противоположно побуждению.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "2%", width: "90%" }}>3. Повторяй противоположное побуждению действие.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Emotions_Solution = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Emotions_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EmotionsSvg} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Решение проблемы</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "4%", width: "90%" }}>1. Опиши проблемную ситуацию.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "4%", width: "90%" }}>2.Проверь факты и убедись, что тебе удалось верно определить проблему.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "4%", width: "90%" }}>3. Сформулируй цель решения проблемы.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "4%", width: "90%" }}>4. Придумай несколько решений.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "4%", width: "90%" }}>5. Выбери решение, которое соответствует цели и может сработать.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "4%", width: "90%" }}>6. Реализуй решение.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "6%", width: "90%" }}>7. Оцени результаты принятого решения.</Text>
                    <Text style={{ fontSize: "19px", marginBottom: "4%", width: "90%" }}>Не сработало? Вернись к шагу 5.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Emotions_ABC = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Emotions_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EmotionsSvg} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>ABC</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Emotions_ABC_1")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Аккумулируй позитивные эмоции. Построй жизнь, которая будет стоить того, чтобы жить</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Emotions_ABC_2")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Вырабатывай мастерство</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Emotions_ABC_3")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Справляйся со сложными эмоциями заранее</Text>
                    </TouchableOpacity>
                    <Image resizeMode="contain" style={{ width: 300, height: 300 }} source={require('../assets/SitGirl.png')} />
                </ScrollView>
            </>
        } />
    )
}

export const Emotions_ABC_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Emotions_ABC")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EmotionsSvg} />
                    <Text style={{ fontSize: "20px", marginBottom: "10%", textAlign: "center" }}>Аккумулируй позитивные эмоции. Построй жизнь, которая будет стоить того, чтобы жить</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Перестань избегать.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Выдели одну ценность, над которой хочешь работать сейчас.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Определи несколько целей, связанных с этой ценностью.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Выбери одну из этих целей.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Определи промежуточные этапы на пути к цели.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Выбери один этап, который выполнишь сейчас.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Emotions_ABC_2 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Emotions_ABC")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EmotionsSvg} />
                    <Text style={{ fontSize: "24px", marginBottom: "10%", textAlign: "center" }}>Вырабатывай мастерство</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Каждый день выполняй хотя бы одно дело, которое приближает тебя к цели.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Запрограммируй себя на успех.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Постепенно усложняй задачи.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Ищи вызовы. Если задача слишком простая, в следующий раз усложни ее.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Emotions_ABC_3 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Emotions_ABC")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EmotionsSvg} />
                    <Text style={{ fontSize: "24px", marginBottom: "10%", textAlign: "center" }}>Справляйся со сложными эмоциями заранее</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Опиши ситуацию, которая может спровоцировать проблемное поведение.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Реши, как ты можешь решить эту ситуацию.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Представь ситуацию в уме как можно детальнее.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Мысленно отрепетируй, как ты справляешься с ситуацией.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Практикуй расслабление после репетиций.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Emotions_Zabota = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Emotions_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EmotionsSvg} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>ЗАБОТА</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>З</Text> — <Text style={{ fontWeight: "700" }}>З</Text>доровье тела. Заботься о своем теле.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>А</Text> —  Физическая <Text style={{ fontWeight: "700" }}>А</Text>ктивность. Занимайся спортом каждый день. Можно уделять этому около 20 минут. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>Б</Text> — <Text style={{ fontWeight: "700" }}>Б</Text>удь увереннее. Не принимай наркотики, а алкоголь употребляй в умеренном количестве. Избегай кофеин и энергетики. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>О</Text> —  <Text style={{ fontWeight: "700" }}>О</Text>тдых для нервной системы. Постарайся спать достаточно для хорошего самочувствия. В среднем это 7-9 часов в сутки. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>ТА</Text> —  <Text style={{ fontWeight: "700" }}>Та</Text>релка еды четыре раза в 
день. Или ешь достаточно для хорошего самочувствия.</Text>
                </ScrollView>
            </>
        } />
    )
}
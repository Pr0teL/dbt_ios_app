import { Linking, Text, TouchableOpacity, View, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefConatiner } from './DefContainer';
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import ThunderSvg from '../assets/ThunderSvg';





export const Crisis_1 = ({ navigation }) => {

    function handleCallPress(tel) {
        if (data) {
            Linking.openURL(`tel:${tel}`);
        }
        else {
            Alert.alert('Номер телефона отсутствует', 'Введите номер телефона специалиста в Плане безопасности')
        }

    }

    useFocusEffect(
        React.useCallback(() => {
            const loadData = async () => {
                try {
                    const dataJson = await AsyncStorage.getItem('myData');
                    if (dataJson !== null) {
                        const savedData = JSON.parse(dataJson);
                        setData(savedData.spec_tel_1);
                    }
                } catch (error) {
                    console.log(`Error loading data: ${error}`);
                }
            };

            loadData();
        }, [])
    );

    React.useEffect(() => {
        const loadData = async () => {
            try {
                const dataJson = await AsyncStorage.getItem('myData');
                if (dataJson !== null) {
                    const savedData = JSON.parse(dataJson);
                    setData(savedData.spec_tel_1);
                }
            } catch (error) {
                console.log(`Error loading data: ${error}`);
            }
        };

        loadData();
    }, []);



    const [data, setData] = React.useState();
    return (
        <DefConatiner navigation={navigation} content={
            <>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Стрессоустойчивость</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Stop")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>СТОП</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Trud")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>ТРУД</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Otvlech")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>НАВЫКИ ОТВЛЕЧЕНИЯ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Moment")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>УЛУЧШИТЬ МОМЕНТ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>ПЕРЕЖИТЬ С МУДРЫМ РАЗУМОМ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_ZaProtiv")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>«ЗА» и «ПРОТИВ»</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCallPress(data)} style={{ backgroundColor: "#FFFFFF", padding: "3%", borderRadius: "6px" }}>
                        <Text style={{ fontSize: "18px" }}>КРИЗИСНЫЙ ЗВОНОК</Text>
                    </TouchableOpacity>
                </ScrollView>
            </>
        } />
    )
}


export const Crisis_Stop = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600" }}>СТОП</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>C</Text> — стой. Замри на месте.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>Т</Text> — только шаг назад, мысленно или физически.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>О</Text> — осмотрись, наблюдай за происходящим вокруг.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>П</Text> — попробуй действовать осознанно.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_Trud = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600" }}>ТРУД</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>Т</Text> — температура. Умойся ледяной водой или окуни лицо в холодную воду и задержи дыхание на 20-30 секунд. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>Р</Text> — расслабление мышц. По очереди напрягай каждую часть тела на пару секунд, а потом расслабляй. Видео. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>У</Text> — упражнения. Сделай физические упражнения, которые тебе нравятся: быстрая ходьба, приседания или отжимания. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}><Text style={{ fontWeight: "700" }}>Д</Text> — дыхание. Дыши глубоко и медленно. Наблюдай как воздух наполняет легкие . </Text>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_Otvlech = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600" }}>НАВЫКИ ОТВЛЕЧЕНИЯ</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Используй органы чувств: зрение, слух, обоняние, вкус и осязание. Например, рассоси кубик сахара, понюхай свечку, послушай любимую песню. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Перенаправь мысли и чувства в своё хобби. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Почувствуй другие эмоции: посмотри фильм или сериал, поиграй в игру. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Помоги кому-нибудь.  </Text>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_Moment = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600" }}>УЛУЧШИТЬ МОМЕНТ</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• «Я смогу», «Я справлюсь с этим».</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Начни заниматься йогой.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Полежи в кровати</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• «Я выдержу».</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Глубоко дыши.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Расслабь мышцы лица: сильно напряги их, а потом резко отпусти</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Прими свои чувства</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_Razum = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600", textAlign: "center" }}>ПЕРЕЖИТь с мудрым разумом</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum_1")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}><Text style={{ fontWeight: "700" }}>П</Text>омоги кому-то</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum_2")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}><Text style={{ fontWeight: "700" }}>Е</Text>сли сравнить</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum_3")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Используйте <Text style={{ fontWeight: "700" }}>Р</Text>азные эмоции</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum_4")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}><Text style={{ fontWeight: "700" }}>Е</Text>сть другие действия</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum_5")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Построй <Text style={{ fontWeight: "700" }}>Ж</Text>елезную стену</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum_6")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}><Text style={{ fontWeight: "700" }}>И</Text>спользуй ощущения</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum_7")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Перенаправь <Text style={{ fontWeight: "700" }}>Т</Text>ечение мыслей</Text>
                    </TouchableOpacity>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_Razum_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600" }}>Помоги кому-то</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Найди волонтерскую работу.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Помоги другу или члену семьи. Например, разговором или совместной уборкой.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Удиви друга. Например, подари ему что-нибудь, что сделаешь самостоятельно.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Отдай ненужные тебе вещи нуждающимся.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Скажи близким, что ценишь их.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_Razum_2 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600" }}>Если сравнить</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Сравни свои состояния: как ты чувствуешь себя сейчас и как было в другое время?</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Подумай о тех, кто тоже справляется с трудностями.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Сравни себя с людьми, которым повезло меньше, чем тебе.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Посмотри реалити-шоу о проблемах других: «Пацанки», «Дорогая, мы убиваем детей» и т.д.</Text>
                    <Text style={{ fontSize: "24px", marginBottom: "5%", width: "90%", fontWeight: "600", textAlign: "center" }}>! Используй навык аккуратно. Не навреди себе !</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_Razum_3 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600" }}>Используй Разные эмоции</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Читай эмоциональные книги и истории. Фанфикшн тоже подходит!</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Смотри эмоциональные фильмы и сериалы. Например: «Собачья жизнь», «Виноваты звезды» и т. д. Создай свой список.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Слушай эмоциональную музыку.</Text>
                    <Text style={{ fontSize: "24px", marginBottom: "5%", width: "90%", fontWeight: "600", textAlign: "center" }}>! Используй навык аккуратно. Не навреди себе !</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_Razum_4 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600" }}>Есть другие действия</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Сосредоточься на задаче, которую нужно выполнить. Например, на домашнем задании или проекте.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Сделай уборку.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Посмотри кино или сериал.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Поиграй в игру.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Позвони другу или сходи с ним куда-нибудь.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Почитай книги, комиксы, журналы.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Смастери что-нибудь.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_Razum_5 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600" }}>Построй Железную стену</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Отстранись от ситуации, оставь ее на некоторое время.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Мысленно отпусти ситуацию.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Блокируй мысли и образы в своем сознании.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Построй воображаемую стену между собой и ситуацией. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Не думай о болезненной ситуации и отвлеки себя. </Text>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_Razum_6 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600" }}>Используй ощущения</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Сожми в руке рельефный резиновый мячик.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Слушай очень громкую музыку.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Держи лед в руке или во рту.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Выйди на улицу в дождь или снег.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Прими горячий или холодный душ.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Съешь кислую конфету или шоколад.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_Razum_7 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600", textAlign: "center" }}>Перенаправь течение мыслей</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Посчитай что-то. Например, цвета на картине или книги на полке. Можно просто посчитать до 10.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Напой слова любимой песни. Если любимой нет, можно взять известную песню Queen. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Собери пазл или нарисуй картинку. Можно рисовать картины по номерам.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Посмотри телевизор или почитай. Например, «Гарри Поттер» поможет вернуть волшебство в твою жизнь.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Посмотри любимый музыкальный клип.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Crisis_ZaProtiv = ({ navigation }) => {

    React.useEffect(() => {
        const loadData = async () => {
            try {
                const dataJson = await AsyncStorage.getItem('CrisisData');
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
        tabl_1: {
            name: "",
            za_1: "",
            za_2: "",
            za_3: "",
            za_4: "",
            protiv_1: "",
            protiv_2: "",
            protiv_3: "",
            protiv_4: ""
        },
        tabl_2: {
            name: "",
            za_1: "",
            za_2: "",
            za_3: "",
            za_4: "",
            protiv_1: "",
            protiv_2: "",
            protiv_3: "",
            protiv_4: ""
        }
    });

    const saveData = async () => {
        try {
            const dataJson = JSON.stringify(data);
            await AsyncStorage.setItem('CrisisData', dataJson);
            console.log('Data saved successfully');
        } catch (error) {
            console.log(`Error saving data: ${error}`);
        }
    };

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Crisis_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={ThunderSvg} width={180} height={190} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", fontWeight: "600", textAlign: "center" }}>ЗА И ПРОТИВ</Text>
                    <View style={{ width: '100%' }}>
                        <View style={{ width: "100%", marginBottom: "10%" }}>
                            <View style={{ width: "100%", flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: "1px", paddingBottom: "3%" }}>
                                <TextInput value={data.tabl_1.name} onChangeText={(text) => setData({ ...data, tabl_1: { ...data.tabl_1, name: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "35%", fontSize: "16px", borderRadius: "6px", padding: "1%" }} />
                                <Text style={{ fontSize: "24px" }}>ЗА</Text>
                                <Text style={{ fontSize: "24px" }}>ПРОТИВ</Text>
                            </View>
                            <View style={{ width: "100%", flexDirection: "row" }}>
                                <View style={{ width: "35%", borderRightWidth: "1px", paddingRight: "2%", paddingTop: "5%" }}>
                                    <Text style={{ fontSize: "15px", textAlign: "center", marginBottom: "20%" }}>Поддаться{'\n'} эмоциям</Text>
                                    <Text style={{ fontSize: "15px", textAlign: "center" }}>Противостоять{'\n'} эмоциям</Text>
                                </View>
                                <View style={{ width: "32%", paddingTop: "3%" }}>
                                    <View style={{ marginBottom: "7%" }}>
                                        <View style={{ marginLeft: "5%", flexDirection: "row", marginBottom: "5%" }}>
                                            <TextInput value={data.tabl_1.za_1} onChangeText={(text) => setData({ ...data, tabl_1: { ...data.tabl_1, za_1: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%", marginRight: '5%' }} />
                                            <TextInput value={data.tabl_1.protiv_1} onChangeText={(text) => setData({ ...data, tabl_1: { ...data.tabl_1, protiv_1: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                                        </View>
                                        <View style={{ marginLeft: "5%", flexDirection: "row", marginBottom: "5%" }}>
                                            <TextInput value={data.tabl_1.za_2} onChangeText={(text) => setData({ ...data, tabl_1: { ...data.tabl_1, za_2: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%", marginRight: '5%' }} />
                                            <TextInput value={data.tabl_1.protiv_2} onChangeText={(text) => setData({ ...data, tabl_1: { ...data.tabl_1, protiv_2: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ marginLeft: "5%", flexDirection: "row", marginBottom: "5%" }}>
                                            <TextInput value={data.tabl_1.za_3} onChangeText={(text) => setData({ ...data, tabl_1: { ...data.tabl_1, za_3: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%", marginRight: '5%' }} />
                                            <TextInput value={data.tabl_1.protiv_3} onChangeText={(text) => setData({ ...data, tabl_1: { ...data.tabl_1, protiv_3: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                                        </View>
                                        <View style={{ marginLeft: "5%", flexDirection: "row", marginBottom: "5%" }}>
                                            <TextInput value={data.tabl_1.za_4} onChangeText={(text) => setData({ ...data, tabl_1: { ...data.tabl_1, za_4: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%", marginRight: '5%' }} />
                                            <TextInput value={data.tabl_1.protiv_4} onChangeText={(text) => setData({ ...data, tabl_1: { ...data.tabl_1, protiv_4: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: "100%", marginBottom: "10%" }}>
                            <View style={{ width: "100%", flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: "1px", paddingBottom: "3%" }}>
                                <TextInput value={data.tabl_2.name} onChangeText={(text) => setData({ ...data, tabl_2: { ...data.tabl_2, name: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "35%", fontSize: "16px", borderRadius: "6px", padding: "1%" }} />
                                <Text style={{ fontSize: "24px" }}>ЗА</Text>
                                <Text style={{ fontSize: "24px" }}>ПРОТИВ</Text>
                            </View>
                            <View style={{ width: "100%", flexDirection: "row" }}>
                                <View style={{ width: "35%", borderRightWidth: "1px", paddingRight: "2%", paddingTop: "5%" }}>
                                    <Text style={{ fontSize: "15px", textAlign: "center", marginBottom: "20%" }}>Поддаться{'\n'} эмоциям</Text>
                                    <Text style={{ fontSize: "15px", textAlign: "center" }}>Противостоять{'\n'} эмоциям</Text>
                                </View>
                                <View style={{ width: "32%", paddingTop: "3%" }}>
                                    <View style={{ marginBottom: "7%" }}>
                                        <View style={{ marginLeft: "5%", flexDirection: "row", marginBottom: "5%" }}>
                                            <TextInput value={data.tabl_2.za_1} onChangeText={(text) => setData({ ...data, tabl_2: { ...data.tabl_2, za_1: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%", marginRight: '5%' }} />
                                            <TextInput value={data.tabl_2.protiv_1} onChangeText={(text) => setData({ ...data, tabl_2: { ...data.tabl_2, protiv_1: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                                        </View>
                                        <View style={{ marginLeft: "5%", flexDirection: "row", marginBottom: "5%" }}>
                                            <TextInput value={data.tabl_2.za_2} onChangeText={(text) => setData({ ...data, tabl_2: { ...data.tabl_2, za_2: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%", marginRight: '5%' }} />
                                            <TextInput value={data.tabl_2.protiv_2} onChangeText={(text) => setData({ ...data, tabl_2: { ...data.tabl_2, protiv_2: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ marginLeft: "5%", flexDirection: "row", marginBottom: "5%" }}>
                                            <TextInput value={data.tabl_2.za_3} onChangeText={(text) => setData({ ...data, tabl_2: { ...data.tabl_2, za_3: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%", marginRight: '5%' }} />
                                            <TextInput value={data.tabl_2.protiv_3} onChangeText={(text) => setData({ ...data, tabl_2: { ...data.tabl_2, protiv_3: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                                        </View>
                                        <View style={{ marginLeft: "5%", flexDirection: "row", marginBottom: "5%" }}>
                                            <TextInput value={data.tabl_2.za_4} onChangeText={(text) => setData({ ...data, tabl_2: { ...data.tabl_2, za_4: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%", marginRight: '5%' }} />
                                            <TextInput value={data.tabl_2.protiv_4} onChangeText={(text) => setData({ ...data, tabl_2: { ...data.tabl_2, protiv_4: text } })} onEndEditing={() => saveData()} style={{ backgroundColor: "#FFF", width: "100%", fontSize: "16px", borderRadius: "6px", padding: "2%" }} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </>
        } />
    )
}
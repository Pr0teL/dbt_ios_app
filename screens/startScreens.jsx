import StartInstruct from './StartInstruct';
import { Linking, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgXml } from 'react-native-svg';
import EyePlaySvg from '../assets/EyePlaySvg';
import FriendsSvg from '../assets/FriendsSvg';
import EyeSvg from '../assets/EyeSvg';
import SmileReverseSvg from '../assets/SmileReverseSvg';
import ThunderSvg from '../assets/ThunderSvg';





export const StartInstruct_1 = ({ navigation }) => {
    return (
        <StartInstruct title={'«Мне кажется,\n я не справляюсь»...'} navBack={
            <TouchableOpacity onPress={() => navigation.navigate("Start")} style={{ width: "90%", marginBottom: "5%" }}>
                <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
            </TouchableOpacity>
        }
            navForvard={
                <TouchableOpacity style={{ width: "100%", height: "10%", marginBottom: "15%", backgroundColor: "#FFF", justifyContent: 'center', marginTop: "auto" }} onPress={() => navigation.navigate("Instruct_2")}>
                    <Text style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", }}>Понятно</Text>
                </TouchableOpacity>
            }
            progress={'30%'} aura={false} content={
                <>
                    <Text style={{ fontSize: "16px", textAlign: "center", width: "90%", marginBottom: "10%" }}>Это нормально. Здесь ты научишься справляться: отслеживать своё настроение и помогать себе в критических ситуациях.</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginBottom: "27%" }}>
                    <Image resizeMode="contain" style={{width: 150, height: 225}} source={require('../assets/SadGirl.png')} />
                    <Image resizeMode="contain" style={{width: 150, height: 215}} source={require('../assets/LoveGirl.png')} />
                    </View>
                    <Text style={{ fontSize: "13px", textAlign: "center", width: "98%", fontWeight: "300" }}>Нажав кнопку Понятно, вы соглашаетест с Условиями Предоставления Услуг и Политикой Конфиденциальности</Text>
                </>
            } />
    )
}

export const StartInstruct_2 = ({ navigation }) => {
    return (
        <StartInstruct title={'Как мне научиться справляться?'} navBack={
            <TouchableOpacity onPress={() => navigation.navigate("Instruct_1")} style={{ width: "90%", marginBottom: "5%" }}>
                <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
            </TouchableOpacity>
        }
            navForvard={
                <TouchableOpacity style={{ width: "100%", height: "10%", marginBottom: "15%", backgroundColor: "#FFF", justifyContent: 'center', marginTop: "auto" }} onPress={() => navigation.navigate("Instruct_3")}>
                    <Text style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", }}>Понятно</Text>
                </TouchableOpacity>
            }
            progress={'50%'} aura={true} content={
                <>
                    <Text style={{ fontSize: "16px", textAlign: "center", width: "90%", marginBottom: "5%" }}>Мы научим тебя техникам диалектико-поведенческой терапии. Они помогут найти силы даже в отчаянные моменты. Тебе знаком подход ДБТ?</Text>
                    <TextInput placeholder="Введите текст" style={{fontSize: "20px", fontWeight: "500", borderWidth: "1px", padding: "2%", borderRadius: "5px", width: '80%', marginBottom: "10%"}} />
                    <Image resizeMode="contain" style={{width: 280, height: 255}} source={require('../assets/HeadphonesGirl.png')} />
                </>
            } />
    )
}

export const StartInstruct_3 = ({ navigation }) => {
    return (
        <StartInstruct title={'Мне это подойдёт?'} navBack={
            <TouchableOpacity onPress={() => navigation.navigate("Instruct_2")} style={{ width: "90%", marginBottom: "5%" }}>
                <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
            </TouchableOpacity>
        }
            navForvard={
                <TouchableOpacity style={{ width: "100%", height: "10%", marginBottom: "15%", backgroundColor: "#FFF", justifyContent: 'center', marginTop: "auto" }} onPress={() => navigation.navigate("Instruct_4")}>
                    <Text style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", }}>Понятно</Text>
                </TouchableOpacity>
            }
            progress={'70%'} aura={true} content={
                <>
                    <Text style={{ fontSize: "16px", textAlign: "center", width: "90%", marginBottom: "10%" }}>Мы помогаем людям справляться с тяжелыми состояниями: пограничным расстройством личности, депрессией, тревожным расстройством и не только.  {"\n"}
                        {"\n"}
                        <Text style={{fontWeight: "600"}}>Приложение не заменяет терапию.</Text>
                        {"\n"}
                        {"\n"}
                        Найти ДБТ терапевта можно здесь:
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.dbtrussia.org/welcome/')}><Text
                        style={{
                            fontWeight: "500",
                            marginBottom: "3%",
                            fontSize: "17px",
                            textDecorationLine: "underline",
                            textDecorationStyle: "solid",
                            textDecorationColor: "#000"
                        }}>DBT Россия</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://mhcenter.ru/')}><Text style={{
                        fontWeight: "500",
                        marginBottom: "3%",
                        fontSize: "17px",
                        textDecorationLine: "underline",
                        textDecorationStyle: "solid",
                        textDecorationColor: "#000"
                    }}>Mental health centre</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://empathycenter.ru/')}><Text style={{
                        fontWeight: "500",
                        fontSize: "17px",
                        textDecorationLine: "underline",
                        textDecorationStyle: "solid",
                        textDecorationColor: "#000"
                    }}>Центр Эмпатия</Text></TouchableOpacity>
                   <Image resizeMode="contain" style={{width: 150, height: 215}} source={require('../assets/MusicGirl.png')} />

                </>
            } />
    )
}


export const StartInstruct_4 = ({ navigation }) => {
    return (
        <StartInstruct title={'Навигация'} navBack={
            <TouchableOpacity onPress={() => navigation.navigate("Instruct_3")} style={{ width: "90%", marginBottom: "5%" }}>
                <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
            </TouchableOpacity>
        }
            navForvard={
                <TouchableOpacity style={{ width: "100%", height: "10%", marginBottom: "15%", backgroundColor: "#FFF", justifyContent: 'center', marginTop: "auto" }} onPress={() => navigation.navigate("Instruct_5")}>
                    <Text style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", }}>Понятно</Text>
                </TouchableOpacity>
            }
            progress={'90%'} aura={true} content={
                <>
                    <Text style={{ fontSize: "20px", width: "90%",textAlign: "center", marginBottom: "2%" }}>Для прослушивания упражнений нажми на глазок.</Text>
                    <SvgXml xml={EyePlaySvg}  width={50} height={50} style={{marginBottom: "2%"}}/>
                    <Text style={{ fontSize: "20px", marginBottom: "4%",width: "90%", fontWeight: "600" }}>Для поиска практик пользуйся иконками: </Text>
                    <Text style={{ fontSize: "20px",width: "90%",  marginBottom: "2%" }}>• Межличностная эффективность: </Text>
                    <SvgXml xml={FriendsSvg} width={50} height={30}/>
                    <Text style={{ fontSize: "20px",width: "90%", marginBottom: "2%" }}>• Осознанность: </Text>
                    <SvgXml xml={EyeSvg} width={45} height={45} style={{marginBottom: "2%"}}/>
                    <Text style={{ fontSize: "20px", width: "90%", marginBottom: "2%" }}>• Стрессоустойчивость:</Text>
                    <SvgXml xml={ThunderSvg} width='40' height="40" style={{marginBottom: "2%"}}/>
                    <Text style={{ fontSize: "20px", width: "90%", marginBottom: "2%" }}>• Эмоциональная регуляция:</Text>
                    <SvgXml xml={SmileReverseSvg} width={40} height={40} style={{marginBottom: "2%"}}/>
                </>
            } />
    )
}

export const StartInstruct_5 = ({ navigation }) => {
    return (
        <StartInstruct title={'Какой навык мне применить?'} navBack={
            <TouchableOpacity onPress={() => navigation.navigate("Instruct_4")} style={{ width: "90%", marginBottom: "5%" }}>
                <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
            </TouchableOpacity>
        }
            navForvard={
                <TouchableOpacity style={{ width: "100%", height: "10%", marginBottom: "15%", backgroundColor: "#FFF", justifyContent: 'center', marginTop: "auto" }} onPress={() => navigation.navigate("Instruct_6")}>
                    <Text style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", }}>Понятно</Text>
                </TouchableOpacity>
            }
            progress={'100%'} aura={true} content={
                <>
                    <Text style={{ fontSize: "20px", width: "90%", lineHeight: "30px", fontWeight: "500", marginBottom: "10%" }}>
                    Выбирай навык в зависимости от уровня стресса:
                    </Text>
                    <Text style={{ fontSize: "20px", width: "75%", lineHeight: "30px", marginBottom: "5%" }}>• 70 и выше - навыки стрессоустойчивости</Text>
                    <Text style={{ fontSize: "20px", width: "75%", lineHeight: "30px", marginBottom: "5%" }}>• 30-70 - навыки {'\n'} эмоциональной регуляции</Text>
                    <Text style={{ fontSize: "20px", width: "75%", lineHeight: "30px" }}>• 30 и ниже - навыки осознанности</Text>

                </>
            } />
    )
}

export const StartInstruct_6 = ({ navigation, setFirstTime }) => {


    const storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Aura />
            <TouchableOpacity onPress={() => navigation.navigate("Instruct_5")} style={{ width: "90%", marginBottom: "25%" }}>
                <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "85%", zIndex: "2", borderRadius: "15px", height: "10%", marginBottom: "10%", backgroundColor: "#9CABF2", justifyContent: 'center', }} onPress={() => {
                storeData("firstTime", "false")
                setFirstTime(false)
                setTimeout(() => navigation.navigate("HelpPlan"), 0)
            }}>
                <Text style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", }}>Заполнить план безопасности</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "85%", zIndex: "2", borderRadius: "15px", height: "10%", marginBottom: "15%", backgroundColor: "#9CABF2", justifyContent: 'center', }} onPress={() => {
                storeData("firstTime", "false")
                setFirstTime(false)
            }}>
                <Text style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", }}>Заполню позже</Text>
            </TouchableOpacity>
            <Image resizeMode="contain" style={{width: 350, height: 305}} source={require('../assets/JumpGirl.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6',
        alignItems: 'center',
        paddingTop: "20%"
    }
});
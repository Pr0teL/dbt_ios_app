import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './StartScreen';
import StartInstruct from './StartInstruct';
import { Linking, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const StartInstruct_1 = ({ navigation }) => {
    return (
        <StartInstruct title={'Учись осознанности вместе с....'} navBack={
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
                    <Text style={{ fontSize: "16px", textAlign: "center", width: "90%" }}>С  Приложением вы можете отслеживать своё настроение, тренировать навыки ДБТ и помогать самому себе в критических ситуациях!</Text>
                    <Text style={{ fontSize: "13px", marginTop: "87%", textAlign: "center", width: "98%", fontWeight: "300" }}>Нажав кнопку Понятно, вы соглашаетест с Условиями Предоставления Услуг и Политикой Конфиденциальности</Text>
                </>
            } />
    )
}

const StartInstruct_2 = ({ navigation }) => {
    return (
        <StartInstruct title={'Ты знаешь, что такое ДБТ?'} navBack={
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
                    <Text style={{ fontSize: "16px", textAlign: "center", width: "90%", marginBottom: "5%" }}>Мы используем техники диалектико-поведенческой терапии, чтобы помочь тебе справииться с проблемами и поддержать, когда ты в этом нуждаешься.</Text>
                    <TextInput placeholder="Enter text" style={{ backgroundColor: "#FFF", width: "80%", fontSize: "20px", padding: "2%" }} />
                </>
            } />
    )
}

const StartInstruct_3 = ({ navigation }) => {
    return (
        <StartInstruct title={'Зачем мне это?'} navBack={
            <TouchableOpacity onPress={() => navigation.navigate("Instruct_2")} style={{ width: "90%", marginBottom: "5%" }}>
                <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
            </TouchableOpacity>
        }
            navForvard={
                <TouchableOpacity style={{ width: "100%", height: "10%", marginBottom: "15%", backgroundColor: "#FFF", justifyContent: 'center', marginTop: "auto" }} onPress={() => navigation.navigate("Instruct_3")}>
                    <Text style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", }}>Понятно</Text>
                </TouchableOpacity>
            }
            progress={'70%'} aura={true} content={
                <>
                    <Text style={{ fontSize: "16px", textAlign: "center", width: "90%", marginBottom: "10%" }}>Это Приложение предназначено для людей,
                        у которых диагнастировано ПРЛ, для врачей/терапевтов. {"\n"}
                        {"\n"}
                        Данное приложение не заменяет личную и групповую терапию.
                        {"\n"}
                        {"\n"}
                        Найти себе ДБТ терапевта можно вот здесь
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
                        marginBottom: "3%",
                        fontSize: "17px",
                        textDecorationLine: "underline",
                        textDecorationStyle: "solid",
                        textDecorationColor: "#000"
                    }}>Центр Эмпатия</Text></TouchableOpacity>

                </>
            } />
    )
}

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_1" component={StartInstruct_1} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_2" component={StartInstruct_2} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_3" component={StartInstruct_3} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
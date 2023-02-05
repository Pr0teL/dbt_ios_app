import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import StartInstruct from './screens/StartInstruct';

export default function App() {
  return (
    <StartInstruct title={'Учись осознанности вместе с....'} progress={'30%'} aura={false} content={
      <>
        <Text style={{ fontSize: "16px", textAlign: "center", width: "90%" }}>С  Приложением вы можете отслеживать своё настроение, тренировать навыки ДБТ и помогать самому себе в критических ситуациях!</Text>
        <Text style={{ fontSize: "13px", marginTop: "87%", textAlign: "center", width: "98%", fontWeight: "300" }}>Нажав кнопку Понятно, вы соглашаетест с Условиями Предоставления Услуг и Политикой Конфиденциальности</Text>
      </>
    } />
    // <StartScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

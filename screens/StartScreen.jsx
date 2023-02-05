import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Aura from '../components/Aura';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: "24px", marginBottom: "7%"}}>привет, мой друг</Text>
      <Aura/>
      <Text style={{fontSize: "24px"}}>👋</Text>
      <StatusBar style="auto" />
    </View>
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
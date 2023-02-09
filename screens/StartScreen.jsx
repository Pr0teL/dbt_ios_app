import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Aura from '../components/Aura';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Instruct_1')}>
        <Text style={{ fontSize: "24px", marginBottom: "7%" }}>привет, мой друг</Text>
        <Aura />
        <Text style={{ fontSize: "24px" }}>👋</Text>
        <StatusBar style="auto" />
      </TouchableOpacity>
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
  touch: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
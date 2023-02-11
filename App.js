import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import StartInstruct from './screens/StartInstruct';
import { Navigation } from './screens/Navigation';
import React from 'react';


export default function App() {
  const [firstTime, setFitstTime] = React.useState(true)
  return (
  <Navigation firstTime={firstTime} setFitstTime={setFitstTime}/>
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

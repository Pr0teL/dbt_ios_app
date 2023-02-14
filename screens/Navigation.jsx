import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './StartScreen';
import { StartInstruct_1, StartInstruct_2, StartInstruct_3, StartInstruct_4, StartInstruct_5 } from './startScreens';
import { MenuScreen } from './MenuScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';


const Stack = createStackNavigator();


export const Navigation = () => {
    const [firstTime, setFirstTime] = React.useState(true)

        React.useEffect(() => {
            const checkFerstTime = async () => {
              const value = await AsyncStorage.getItem('firstTime');
              if (value !== null) {
                setFirstTime(false);
              }
            };
            checkFerstTime();
          }, []);

    return (
        <NavigationContainer>
            {firstTime === true && <Stack.Navigator>
                <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_1" component={StartInstruct_1} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_2" component={StartInstruct_2} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_3" component={StartInstruct_3} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_4" component={StartInstruct_4} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_5"  options={{ headerShown: false }}>{props => <StartInstruct_5 {...props} setFirstTime={(a) => setFirstTime(a)}/>}</Stack.Screen>
            </Stack.Navigator>}
            {
            firstTime === false && 
                <Stack.Navigator>
                    <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )
}

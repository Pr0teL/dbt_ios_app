import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './StartScreen';
import { StartInstruct_1, StartInstruct_2, StartInstruct_3, StartInstruct_4, StartInstruct_5, StartInstruct_6 } from './startScreens';
import { MenuScreen } from './MenuScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { HelpPlan } from './HelpPlan';
import { ProfileScreen } from './ProfileScreen';
import { Crisis_1, Crisis_Stop, Crisis_Trud, Crisis_Otvlech, Crisis_Moment, Crisis_Razum, Crisis_Razum_1, Crisis_Razum_2, Crisis_Razum_3, Crisis_Razum_4, Crisis_Razum_5, Crisis_Razum_6, Crisis_Razum_7, Crisis_ZaProtiv } from './crisisScreens';
import { Mindfulness_1 } from './mindfulnessScreens';
import { Emotions_1 } from './emotionsScreens';
import { Articles_1, Articles_BioSoc, Articles_DBT, Articles_Mission, Articles_PRL } from './articlesScreens';
import { Skills_1, Skills_Chest, Skills_Drug, Skills_Poprosi, Skills_Valid } from './skillsScreens';
import { HelpScreen } from './HelpScreen';


const Stack = createStackNavigator();


export const Navigation = () => {
    const [firstTime, setFirstTime] = React.useState(true)

        React.useEffect(() => {
            const checkFirstTime = async () => {
              const value = await AsyncStorage.getItem('firstTime');
              if (value !== null) {
                setFirstTime(false);
              }
            };
            checkFirstTime();
          }, []);

    return (
        <NavigationContainer>
            {firstTime === true && <Stack.Navigator>
                <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_1" component={StartInstruct_1} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_2" component={StartInstruct_2} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_3" component={StartInstruct_3} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_4" component={StartInstruct_4} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_5" component={StartInstruct_5} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_6"  options={{ headerShown: false }}>{props => <StartInstruct_6 {...props} setFirstTime={(a) => setFirstTime(a)}/>}</Stack.Screen>
            </Stack.Navigator>}
            {
            firstTime === false && 
                <Stack.Navigator>
                    <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="HelpPlan" component={HelpPlan} options={{ headerShown: false }} />
                    <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />

                    <Stack.Screen name="Crisis_1" component={Crisis_1} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Stop" component={Crisis_Stop} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Trud" component={Crisis_Trud} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Otvlech" component={Crisis_Otvlech} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Moment" component={Crisis_Moment} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Razum" component={Crisis_Razum} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Razum_1" component={Crisis_Razum_1} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Razum_2" component={Crisis_Razum_2} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Razum_3" component={Crisis_Razum_3} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Razum_4" component={Crisis_Razum_4} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Razum_5" component={Crisis_Razum_5} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Razum_6" component={Crisis_Razum_6} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_Razum_7" component={Crisis_Razum_7} options={{ headerShown: false }} />
                    <Stack.Screen name="Crisis_ZaProtiv" component={Crisis_ZaProtiv} options={{ headerShown: false }} />

                    <Stack.Screen name="Mindfulness_1" component={Mindfulness_1} options={{ headerShown: false }} />

                    <Stack.Screen name="Emotions_1" component={Emotions_1} options={{ headerShown: false }} />

                    <Stack.Screen name="Articles_1" component={Articles_1} options={{ headerShown: false }} />
                    <Stack.Screen name="Articles_DBT" component={Articles_DBT} options={{ headerShown: false }} />
                    <Stack.Screen name="Articles_BioSoc" component={Articles_BioSoc} options={{ headerShown: false }} />
                    <Stack.Screen name="Articles_Mission" component={Articles_Mission} options={{ headerShown: false }} />
                    <Stack.Screen name="Articles_PRL" component={Articles_PRL} options={{ headerShown: false }} />

                    <Stack.Screen name="Skills_1" component={Skills_1} options={{ headerShown: false }} />
                    <Stack.Screen name="Skills_Drug" component={Skills_Drug} options={{ headerShown: false }} />
                    <Stack.Screen name="Skills_Poprosi" component={Skills_Poprosi} options={{ headerShown: false }} />
                    <Stack.Screen name="Skills_Chest" component={Skills_Chest} options={{ headerShown: false }} />
                    <Stack.Screen name="Skills_Valid" component={Skills_Valid} options={{ headerShown: false }} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )
}

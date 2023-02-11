import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './StartScreen';
import { StartInstruct_1, StartInstruct_2, StartInstruct_3, StartInstruct_4, StartInstruct_5 } from './startScreens';
import { MenuScreen } from './MenuScreen';


const Stack = createStackNavigator();


export const Navigation = ({ firstTime, setFirstTime }) => {
    return (
        <NavigationContainer>
            {firstTime ? <Stack.Navigator>
                <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_1" component={StartInstruct_1} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_2" component={StartInstruct_2} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_3" component={StartInstruct_3} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_4" component={StartInstruct_4} options={{ headerShown: false }} />
                <Stack.Screen name="Instruct_5" component={StartInstruct_5} options={{ headerShown: false }}  initialParams={{ setFirstTime: () => setFirstTime(false)}}/>
            </Stack.Navigator> :
                <Stack.Navigator>
                    <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
                </Stack.Navigator>}
        </NavigationContainer>
    )
}

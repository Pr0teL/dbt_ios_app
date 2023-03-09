import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CustomCalendar() {
    const [selected, setSelected] = useState([]);

    React.useEffect(() => {
        const loadData = async () => {
            try {
                const dataJson = await AsyncStorage.getItem('calendarData');
                if (dataJson !== null) {
                    const savedData = JSON.parse(dataJson);
                    setSelected(savedData)
                }
            } catch (error) {
                console.log(`Error loading data: ${error}`);
            }
        };

        loadData();
    }, []);



    const saveData = async () => {
        try {
            const dataJson = JSON.stringify(selected);
            await AsyncStorage.setItem('calendarData', dataJson);
            console.log('Data saved successfully');
        } catch (error) {
            console.log(`Error saving data: ${error}`);
        }
    };

    React.useEffect(() => {
        saveData()
     }, [selected]);


    function handleDayPress(day) {
        if(selected.includes(day.dateString+'😀')){
            setSelected(selected.map((d) => d === day.dateString+'😀' ? day.dateString+'😑' : d))
        }
        else if(selected.includes(day.dateString+'😑')){
            setSelected(selected.map((d) => d === day.dateString+'😑' ? day.dateString+'😞' : d))
        }
        else if(selected.includes(day.dateString+'😞')){
            setSelected(selected.filter((d) => d !== day.dateString+'😞'))
        }
        else {
            setSelected([...selected, day.dateString+'😀'])
        }
    }


    return (
        <View>
            <Calendar
                theme={{
                    backgroundColor: '',
                    calendarBackground: '',
                    textSectionTitleColor: '#000000',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#000000',
                    dayTextColor: '#000',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: '#000000',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: '#000000',
                    indicatorColor: '#000000',
                    textDayFontWeight: '500',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 18,
                    textMonthFontSize: 18,
                    textDayHeaderFontSize: 18
                }}
                enableSwipeMonths={true}
                markedDates={{
                    [selected]: { selected: true, marked: true },
                }}
                dayComponent={({ date, state }) => {
                    return (
                      <TouchableOpacity onPress={() => handleDayPress(date)} style={{}}>
                        <Text style={{ fontSize: 18, textAlign: "center", color: state === 'disabled' ? 'gray' : state === 'today' ? 'red' :'black' }}>{date.day}</Text>
                        {selected.includes(date.dateString+'😀') ? (
                          <Text style={{ fontSize: 24 , textAlign: "center"}}>😀</Text>
                        ) : selected.includes(date.dateString+'😑') ? <Text style={{ fontSize: 24 , textAlign: "center"}}>😑</Text> 
                        : selected.includes(date.dateString+'😞') ? <Text style={{ fontSize: 24 , textAlign: "center"}}>😞</Text> : <Text style={{fontSize: 24 , textAlign: "center"}}>⚪</Text>}
                      </TouchableOpacity>
                    );
                  }}
            />
        </View>
    );
}
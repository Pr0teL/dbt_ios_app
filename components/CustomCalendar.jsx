import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocaleConfig} from 'react-native-calendars';



export default function CustomCalendar() {
    const [selected, setSelected] = useState([]);
    const [day, setDay] = useState('');
    const [openSelector, setOpenSelector] = useState(false);
    const [selectMark, setSelectMark] = useState('');

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

    LocaleConfig.locales['ru'] = {
        monthNames: [
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабрь'
        ],
        monthNamesShort: ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
        dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        dayNamesShort: ['Воскр.', 'Пон.', 'Втор.', 'Сред.', 'Четв.', 'Пятн.', 'Субб.'],
        today: "Сегодня"
      };
      LocaleConfig.defaultLocale = 'ru';



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

     React.useEffect(() => {
        if (selectMark !== '') {
            setSelected([...selected, day.dateString + selectMark])
            setOpenSelector(false)
          console.log(`Выбрано значение: ${selectMark}`);
          setSelectMark('')
        }
      }, [selectMark]);


    function handleDayPress(day) {
        setDay(day)
        setOpenSelector(true)
    }
    function handleSelectMark(mark) {
        setSelectMark(mark)
    }

    function findDate(date){
        let res =''
        selected.forEach((el) =>{ 
            if(el.slice(0,10) === date){
                res = el.slice(10)
            }
        })
        return res
    }


    return (
        <View>
            {openSelector && <>
            <View style={{ width: "100%", height: '100%', position: "absolute", zIndex: "2" }}></View>
            <View style={{ position: "absolute",zIndex: 2, backgroundColor: "#FFF", padding: "5%", borderRadius: "16px", width: "100%", marginTop: "36%"}}>
                <Text style={{fontSize: '20px', marginBottom: "2%", textAlign: "center"}}>Как прошел выбранный день?</Text>
                <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                    <TouchableOpacity onPress={() => handleSelectMark('😀')}><Text style={{fontSize: '45px'}}>😀</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelectMark('🙂')}><Text style={{fontSize: '45px'}}>🙂</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelectMark('😑')}><Text style={{fontSize: '45px'}}>😑</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelectMark('🙁')}><Text style={{fontSize: '45px'}}>🙁</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelectMark('😠')}><Text style={{fontSize: '45px'}}>😠</Text></TouchableOpacity>
                </View>
            </View>
            </>}
            <Calendar
            style={openSelector ? {opacity: "0.4"} : {opacity: "1"}}
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
                    let mark = findDate(date.dateString)
                    return (
                      <TouchableOpacity onPress={() => {handleDayPress(date)}} style={{}}>
                        <Text style={{ fontSize: 18, textAlign: "center", color: state === 'disabled' ? 'gray' : state === 'today' ? 'red' :'black' }}>{date.day}</Text>
                        {
                        mark ? (
                          <Text style={{ fontSize: 24 , textAlign: "center"}}>{mark}</Text>
                        )  : 
                        <Text style={{fontSize: 24 , textAlign: "center"}}>⚪</Text>}
                      </TouchableOpacity>
                    );
                  }}
            />
        </View>
    );
}
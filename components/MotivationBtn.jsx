import { Text, TouchableOpacity } from 'react-native';
import React from 'react';


export default function MotivationBtn() {
    const data = [
        "Позаботься о себе",
        "Ты солнышко",
        "Поверь в себя",
        "Боль не вечна",
        "Будь в моменте",
        "Сделай осознанность",
        "Ты любим и любима",
        "Ты не один и не одна",
        "Валидируй себя",
        "Все проходит и боль тоже",
        "Ты лучик света",
        "Не забывай отдыхать",
        "Выбирай себя "
    ]
    const [btnData, setBtnData] = React.useState(data[Math.floor(Math.random() * data.length)])
    return (
        <TouchableOpacity style={{ width: "90%", borderRadius: "15px", paddingTop: "5%",paddingBottom: "5%", backgroundColor: "#FFF", justifyContent: 'center' }} onPress={() => setBtnData(data[Math.floor(Math.random() * data.length)])}>
            <Text style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", }}>{btnData}</Text>
        </TouchableOpacity>
    );
}


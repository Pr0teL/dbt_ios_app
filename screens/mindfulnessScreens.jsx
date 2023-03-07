import { Linking, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Aura from '../components/Aura';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefConatiner } from './DefContainer';
import React from 'react';
import EyeSvg from '../assets/EyeSvg';
import EyePlaySvg from '../assets/EyePlaySvg';
import { SvgXml } from 'react-native-svg';
import { Audio } from 'expo-av';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useLayoutEffect } from 'react';





export const Mindfulness_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Осознанность</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Мудрый разум</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Навыки осознанности «Что»</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Kak")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Навыки осознанности «Как»</Text>
                    </TouchableOpacity>
                    <Image resizeMode="contain" style={{ width: 270, height: 400 }} source={require('../assets/DzenGirl.png')} />
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Razum = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Мудрый разум</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum_1")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Камешек в озере</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum_2")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Спуск по винтовой лестнице</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum_3")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>«Мудрый» на вдохе, «разум» на выдохе</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum_4")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Спроси свой мудрый разум</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum_5")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Концентрация на дыхании</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum_6")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Расширение сознания</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum_7")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Погружение в паузы между вдохами и выдохами</Text>
                    </TouchableOpacity>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Razum_1 = ({ navigation }) => {
    const [sound, setSound] = React.useState(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const playSound = async () => {
        try {
            if (isPlaying) {
                await sound.playAsync();
            } else {
                const { sound } = await Audio.Sound.createAsync(
                    require('../assets/audio/oskolok_kamnya.mp3')
                );
                setSound(sound);
                await sound.playAsync();
                setIsPlaying(true);
            }
        } catch (error) {
            console.log('Error playing sound: ', error);
        }
    };

    const stopSound = async () => {
        try {
            if (sound) {
                await sound.stopAsync();
                await sound.unloadAsync();
                setIsPlaying(false);
            }
        } catch (error) {
            console.log('Error stopping sound: ', error);
        }
    };

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);
    const isFocused = useIsFocused();

    useLayoutEffect(() => {
        if (!isFocused) {
            stopSound();
        }
    }, [isFocused]);

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);



    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <TouchableOpacity onPress={isPlaying ? stopSound : playSound} style={{}}>
                        <SvgXml xml={EyePlaySvg} width={200} height={140} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Камешек в озере</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Представь прекрасный солнечный день. Ты — маленький и плоский осколок камня. Представь, что тебя кинули на поверхность озера. Теперь ты медленно и плавно опускаешься на вниз.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Отмечай, что видишь и чувствуешь.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Обрати внимание на безмятежность озера. Осознай спокойствие внутри и снаружи. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Когда достигнешь своего центра, позволь вниманию побыть там. </Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Razum_2 = ({ navigation }) => {
    const [sound, setSound] = React.useState(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const playSound = async () => {
        try {
            if (isPlaying) {
                await sound.playAsync();
            } else {
                const { sound } = await Audio.Sound.createAsync(
                    require('../assets/audio/vintovaya_lestnica.mp3')
                );
                setSound(sound);
                await sound.playAsync();
                setIsPlaying(true);
            }
        } catch (error) {
            console.log('Error playing sound: ', error);
        }
    };

    const stopSound = async () => {
        try {
            if (sound) {
                await sound.stopAsync();
                await sound.unloadAsync();
                setIsPlaying(false);
            }
        } catch (error) {
            console.log('Error stopping sound: ', error);
        }
    };

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);
    const isFocused = useIsFocused();

    useLayoutEffect(() => {
        if (!isFocused) {
            stopSound();
        }
    }, [isFocused]);

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);



    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <TouchableOpacity onPress={isPlaying ? stopSound : playSound} style={{}}>
                        <SvgXml xml={EyePlaySvg} width={200} height={140} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Спуск по винтовой лестнице</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Представь, что внутри тебя винтовая лестница. Она спускается к самому центру твоего Я. Спускайся по лестнице, погружаясь внутрь себя.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Замечай свои ощущения. Когда ты дойдешь до самого центра, позволь вниманию остановиться там. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Возможно, ты почувствуешь это место в теле. Например, в центре живота.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Razum_3 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>«Мудрый» на вдохе, «Разум» на выдохе</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• На вдохе произноси про себя слово «Мудрый», на выдохе «Разум».</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Фокусируй внимание на слово «мудрый», а затем меняй фокус на слово «разум».</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Когда почувствуешь, что тебе удалось укрепиться в мудром разуме, можешь закончить практику.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Razum_4 = ({ navigation }) => {
    const [sound, setSound] = React.useState(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const playSound = async () => {
        try {
            if (isPlaying) {
                await sound.playAsync();
            } else {
                const { sound } = await Audio.Sound.createAsync(
                    require('../assets/audio/sprosi_razum.mp3')
                );
                setSound(sound);
                await sound.playAsync();
                setIsPlaying(true);
            }
        } catch (error) {
            console.log('Error playing sound: ', error);
        }
    };

    const stopSound = async () => {
        try {
            if (sound) {
                await sound.stopAsync();
                await sound.unloadAsync();
                setIsPlaying(false);
            }
        } catch (error) {
            console.log('Error stopping sound: ', error);
        }
    };

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);
    const isFocused = useIsFocused();

    useLayoutEffect(() => {
        if (!isFocused) {
            stopSound();
        }
    }, [isFocused]);

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);



    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <TouchableOpacity onPress={isPlaying ? stopSound : playSound} style={{}}>
                        <SvgXml xml={EyePlaySvg} width={200} height={140} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Спроси свой мудрый разум</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• На вдохе молча задай вопрос своему мудрому разуму.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• На выдохе прислушайся к ответу.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Не давай ответ самостоятельно. Прислушайся к ответу, который идёт изнутри.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Какое-то время продолжай задавать вопрос на каждом вдохе. Если ответ не приходит, попробуй задать вопрос в следующий раз.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Razum_5 = ({ navigation }) => {
    const [sound, setSound] = React.useState(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const playSound = async () => {
        try {
            if (isPlaying) {
                await sound.playAsync();
            } else {
                const { sound } = await Audio.Sound.createAsync(
                    require('../assets/audio/koncentracia.mp3')
                );
                setSound(sound);
                await sound.playAsync();
                setIsPlaying(true);
            }
        } catch (error) {
            console.log('Error playing sound: ', error);
        }
    };

    const stopSound = async () => {
        try {
            if (sound) {
                await sound.stopAsync();
                await sound.unloadAsync();
                setIsPlaying(false);
            }
        } catch (error) {
            console.log('Error stopping sound: ', error);
        }
    };

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);
    const isFocused = useIsFocused();

    useLayoutEffect(() => {
        if (!isFocused) {
            stopSound();
        }
    }, [isFocused]);

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);



    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <TouchableOpacity onPress={isPlaying ? stopSound : playSound} style={{}}>
                        <SvgXml xml={EyePlaySvg} width={200} height={140} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Концентрация на дыхании</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• На вдохе замечай, как твой организм наполняется воздухом. </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Позволь вниманию переместиться на «дно» дыхания в районе солнечного сплетения или на «вершину» дыхания в центре лба</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Укорени внимание в своем центре и дыши в спокойном ритме.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Укрепись в мудром разуме.</Text>
                </ScrollView>
            </>
        } />
    )
}


export const Mindfulness_Razum_6 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Расширение сознания</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• На вдохе сосредоточь внимание на своём центре.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• На выдохе сохрани внимание в центре и расширь сознание до размеров пространства, в котором находишься.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Продолжай практику и замечай свои ощущения.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Razum_7 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Razum")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Погружение в паузы между вдохами и выдохами</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Сделай вдох и отметь следующую за ним паузу — «вершину» дыхания.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Сделай выдох и отметь паузу — «дно» дыхания.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Во время каждой паузы позволь себе «упасть» в пространство внутри паузы.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Chto = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Навыки осознанности «Что»</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Наблюдение</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Descript")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Описание</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Participation")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Участие</Text>
                    </TouchableOpacity>
                    <Image resizeMode="contain" style={{ width: 270, height: 400 }} source={require('../assets/DzenGirl.png')} />
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Chto_Seen = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Навыки наблюдения</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen_1")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Наблюдай с помощью глаз</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen_2")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Наблюдай за звуками</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen_3")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Наблюдай за запахами</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen_4")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Наблюдай за ощущениями в теле</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen_5")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Наблюдай за дыханием</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen_6")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Наблюдай за мыслями, которые приходят и уходят</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen_7")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Представь, что твой разум – это...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen_8")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Прогуливайся с максимально открытыми органами чувств</Text>
                    </TouchableOpacity>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Chto_Seen_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Наблюдай с помощью зрения</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Ляг на землю и смотри на проплывающие в небе облака.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Обращай внимание на выражение лица, движения и жесты людей. Воздержись от любых оценок.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Внимательно рассмотри любой предмет.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Прогуляйся. Останавливайся в местах с интересным видом, замечай цветы, деревья и природу.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Chto_Seen_2 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Наблюдай за звуками</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Прислушайся к звукам вокруг.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Если кто-то говорит, прислушайся к высоте его голоса, тембру и паузам между словами.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Послушай музыку. Наблюдай за нотами, битами и словами.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Наблюдай за звуками птиц и животных.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Слушай гудение электрички или поезда.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Слушай звуки природы: журчание воды, треск огня.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Chto_Seen_3 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Наблюдай за запахами</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Обращай внимание на запахи вокруг. Поднеси что-нибудь к носу и отметь запах.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Обрати внимание на ароматы еды, исследуй ароматы специй, овощей, фруктов.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• В душе прислушайся к запаху шампуня или мыла.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Прогуляйся по улице и обращай внимание на запахи вокруг.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Chto_Seen_4 = ({ navigation }) => {
    const [sound, setSound] = React.useState(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const playSound = async () => {
        try {
            if (isPlaying) {
                await sound.playAsync();
            } else {
                const { sound } = await Audio.Sound.createAsync(
                    require('../assets/audio/telo.mp3')
                );
                setSound(sound);
                await sound.playAsync();
                setIsPlaying(true);
            }
        } catch (error) {
            console.log('Error playing sound: ', error);
        }
    };

    const stopSound = async () => {
        try {
            if (sound) {
                await sound.stopAsync();
                await sound.unloadAsync();
                setIsPlaying(false);
            }
        } catch (error) {
            console.log('Error stopping sound: ', error);
        }
    };

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);
    const isFocused = useIsFocused();

    useLayoutEffect(() => {
        if (!isFocused) {
            stopSound();
        }
    }, [isFocused]);

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);



    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <TouchableOpacity onPress={isPlaying ? stopSound : playSound} style={{}}>
                        <SvgXml xml={EyePlaySvg} width={200} height={140} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Наблюдай за ощущениями в теле</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Пару секунд гладь верхнюю губу ногтем. Затем обрати внимание, сколько будут сохраняться ощущения на губах.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Обращай внимание на все, к чему прикасаешься. Например, одежда, капли воды и т. д.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Сосредоточь внимание на ощущениях в груди, животе, плечах.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Направь внимание на места, где ты чувствуешь напряжение и зажатость.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Chto_Seen_5 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Наблюдай за дыханием</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>Дыши мягко и равномерно. Удели внимание ощущениям: </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Движениям живота.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Паузам в процессе дыхания.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Чувствам в области носа при вдохе и выдохе.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Дыханию при прогулке.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Дыханию, когда слушаешь музыку.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Дыханию, когда говоришь с друзьями.</Text>
                </ScrollView>
            </>
        } />
    )
}


export const Mindfulness_Skills_Chto_Seen_6 = ({ navigation }) => {
    const [sound, setSound] = React.useState(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const playSound = async () => {
        try {
            if (isPlaying) {
                await sound.playAsync();
            } else {
                const { sound } = await Audio.Sound.createAsync(
                    require('../assets/audio/thoughts.mp3')
                );
                setSound(sound);
                await sound.playAsync();
                setIsPlaying(true);
            }
        } catch (error) {
            console.log('Error playing sound: ', error);
        }
    };

    const stopSound = async () => {
        try {
            if (sound) {
                await sound.stopAsync();
                await sound.unloadAsync();
                setIsPlaying(false);
            }
        } catch (error) {
            console.log('Error stopping sound: ', error);
        }
    };

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);
    const isFocused = useIsFocused();

    useLayoutEffect(() => {
        if (!isFocused) {
            stopSound();
        }
    }, [isFocused]);

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);



    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <TouchableOpacity onPress={isPlaying ? stopSound : playSound} style={{}}>
                        <SvgXml xml={EyePlaySvg} width={200} height={140} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Наблюдай за мыслями</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Обрати внимание на мысли, которые приходят в голову. Откуда они?</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Представь, что твой разум — это небо, а мысли — облака. Позволь мыслям-облакам медленно приходить и уходить.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Если почувствуешь беспокойство, переведи внимание на ощущения в теле. </Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Chto_Seen_7 = ({ navigation }) => {
    const [sound, setSound] = React.useState(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const playSound = async () => {
        try {
            if (isPlaying) {
                await sound.playAsync();
            } else {
                const { sound } = await Audio.Sound.createAsync(
                    require('../assets/audio/razum.mp3')
                );
                setSound(sound);
                await sound.playAsync();
                setIsPlaying(true);
            }
        } catch (error) {
            console.log('Error playing sound: ', error);
        }
    };

    const stopSound = async () => {
        try {
            if (sound) {
                await sound.stopAsync();
                await sound.unloadAsync();
                setIsPlaying(false);
            }
        } catch (error) {
            console.log('Error stopping sound: ', error);
        }
    };

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);
    const isFocused = useIsFocused();

    useLayoutEffect(() => {
        if (!isFocused) {
            stopSound();
        }
    }, [isFocused]);

    React.useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                    setIsPlaying(false);
                }
            });
        }
    }, [sound]);



    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <TouchableOpacity onPress={isPlaying ? stopSound : playSound} style={{}}>
                        <SvgXml xml={EyePlaySvg} width={200} height={140} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Представь, что твой разум – это...</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>конвейерная лента</Text>, по которой проезжают мысли и чувства.  Помести каждую мысль в коробку и поставь на ленту — позволь ей уехать.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>река, а мысли и чувства — лодки</Text>, плывущие по реке. Представь, что ты сидишь на траве и смотришь, как лодки проплывают мимо. Позволь им уплыть из поля зрения.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• <Text style={{ fontWeight: "700" }}>железная дорога, а мысли и чувства — проезжающие составы.</Text> Описывай или давай  название каждому проходящему мимо составу и вагону.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Chto_Seen_8 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto_Seen")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Прогуляйся с максимально открытыми органами чувств</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Отмечай, что слышишь и чувствуешь при каждом шаге или повороте.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Сфокусируй внимание на возникающих ощущениях: запахах, звуках, вкусах и прикосновениях.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Находись в моменте: остановись на мгновение и обрати внимание на все чувства.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Отмечай все мысли, которые у тебя появляются.</Text>
                </ScrollView>
            </>
        } />
    )
}


export const Mindfulness_Skills_Descript = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Навыки описания</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Descript_1")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Описывай окружающий мир</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Descript_2")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Описывай мысли и чувства</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Descript_3")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Описывай дыхание</Text>
                    </TouchableOpacity>
                    <Image resizeMode="contain" style={{ width: 270, height: 400 }} source={require('../assets/DzenGirl.png')} />
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Descript_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Descript")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Описывай окружающий мир</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Рассматривай облака: какие у них узоры, цвет и форма.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Выбери предмет и опиши его максимально детально. Можно выбрать кору дерева или лепесток цветка.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Посмотри на человека и детально опиши, что он делает в этот момент.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Описывай цвета любого предмета. Например, диван ярко-желтый с круглыми коричневыми пятнами.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Descript_2 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Descript")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Описывай мысли и чувства</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Замечай, как меняются твои чувства: «чувство злости нарастает во мне».</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Когда переживаешь сильные эмоции фиксируй свои чувства: «я чувствую А и мысли Б».</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Описывай, что ты чувствуешь после действий других: «когда ты делаешь А, я чувствую Б».</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Описывай мысли, чувства и поведение: «когда ты делаешь А, я чувствую Б, у меня возникла мысль В».</Text>
                </ScrollView>
            </>
        } />
    )
}


export const Mindfulness_Skills_Descript_3 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Descript")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Описывай дыхание</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Осознавай каждый вдох и выдох, помни о дыхании животом. Подсчитывай начало каждого следующего входа: «я вдыхаю один, два, три». Продолжай до 10 и начинай снова.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Дыши животом в мягком и спокойном ритме, описывай дыхание в уме. Сделай три цикла дыхания, исследуй каждый вдох и выдох: его глубину, длительность.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Participation = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Chto")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Навыки участия</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>Осознай свою связь с миром: </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Сфокусируйся на прикосновениях с внешними объектами.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Танцуй под музыку.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Подпевай песням.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Пой в душе.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Устраивай праздник перед выходом из дома: вскакивай с кровати, танцуй, пой.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Спой с друзьями в караоке.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Возьми урок танцев.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Займись любым видом спорта и погрузись в него.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Kak = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_1")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%" }}>Навыки осознанности «Как»</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Kak_1")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Безоценочность</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Kak_2")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "3%" }}>
                        <Text style={{ fontSize: "18px" }}>Однонаправленность </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Kak_3")} style={{ width: "100%", borderBottomWidth: "2px", paddingBottom: "2%", marginBottom: "4%" }}>
                        <Text style={{ fontSize: "18px" }}>Эффективность</Text>
                    </TouchableOpacity>
                    <Image resizeMode="contain" style={{ width: 270, height: 400 }} source={require('../assets/DzenGirl.png')} />
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Kak_1 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Kak")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Безоценочность</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Оставляй в стороне сравнения, суждения и предположения.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Наблюдай за оценочными мыслями и утверждениями. Проговаривай про себя возникающие мысли.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Замечай и подсчитывай оценочные мысли и суждения.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Заменяй оценочные мысли и утверждения безоценочными фактами.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Описывай факты.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Описывай последствия.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Описывай свои чувства.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Наблюдай за собой: выражение лица, поза, тон голоса и движения.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Изменяй осуждающее поведение.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Kak_2 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Kak")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Однонаправленность</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>Делай только одно дело за раз. Это помогает осознанности. Например, сосредоточься на: </Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• мытье посуды</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• домашнем задании</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• уборке дома</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• переодевании</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• медитации</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• рисовании картины по номерам.</Text>
                </ScrollView>
            </>
        } />
    )
}

export const Mindfulness_Skills_Kak_3 = ({ navigation }) => {

    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Mindfulness_Skills_Kak")} style={{ width: "90%", marginBottom: "5%" }}>
                    <Text style={{ fontSize: "17px" }}>❮ Назад</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ width: "90%" }}>
                    <SvgXml xml={EyeSvg} width={200} height={200} />
                    <Text style={{ fontSize: "24px", marginBottom: "5%", textAlign: "center" }}>Эффективность</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Если заметишь желание быть «правым» или «правой», хотя это неэффективно, отпусти желание правоты и попробуй сосредоточиться на эффективности.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Отмечай своеволие внутри себя: «эффективно ли моё поведение?»</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Отбрось своеволие и практикуй эффективность. Отмечай разницу.</Text>
                    <Text style={{ fontSize: "18px", marginBottom: "5%", width: "90%" }}>• Когда почувствуешь злость, враждебность или другую негативную эмоцию, практикуй «ладони готовности».</Text>
                </ScrollView>
            </>
        } />
    )
}


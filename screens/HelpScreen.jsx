import { DefConatiner } from './DefContainer';
import TelegramSvg from '../assets/telegramSvg';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity, Text, Linking, View } from 'react-native';


export const HelpScreen = ({ navigation }) => {
    const openTelegram = () => {
        const telegramURL = 'tg://resolve?domain=pknght3';
        Linking.openURL(telegramURL);
    };
    return (
        <DefConatiner navigation={navigation} content={
            <>
                <TouchableOpacity style={{backgroundColor: "#000000", padding: "3%", borderRadius: "18px", width: "60%", alignItems: "center", marginTop: "40%", marginBottom: "5%"}} onPress={openTelegram}>
                    <Text style={{fontSize: "18px", color: "#FFFFFF"}}>Send message</Text>
                </TouchableOpacity>
                <SvgXml width={60} height={60} xml={TelegramSvg} />
            </>
        } />
    )
}
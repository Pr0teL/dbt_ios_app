import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Aura from '../components/Aura';

export default function StartInstruct({aura = true, progress = '30%',title = 'Учись осознанности вместе с....',  content, navBack, navForvard}) {
    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <View style={{ width: progress, height: "100%", backgroundColor: "#9CABF2", borderRadius: "3px" }}></View>
            </View>
            {navBack}
            <Text style={{ fontSize: "24px",fontWeight: "600", marginBottom: "7%", width: "80%", textAlign: "center"}}>{title}</Text>
            {content}
            {navForvard}
            {aura && <Aura />}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6',
        alignItems: 'center',
        paddingTop: "20%"
    },
    progressBar: {
        backgroundColor: "#D9D9D9",
        width: "60%",
        height: "0.7%",
        borderRadius: "3px",
        marginBottom: "5%"
    },
});
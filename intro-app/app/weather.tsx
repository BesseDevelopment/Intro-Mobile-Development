import { Text, StyleSheet } from "react-native";

export default function Weather() {
    return (
        <Text style={styles.header}>Weather Screen</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center',
        margin: 50,
    }
});
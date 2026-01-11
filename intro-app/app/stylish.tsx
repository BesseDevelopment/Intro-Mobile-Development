import { StyleSheet, Text } from "react-native";

export default function Stylish() {
    return (
        <Text style={styles.header}>Stylish Screen</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center',
        margin: 50,
    }
})
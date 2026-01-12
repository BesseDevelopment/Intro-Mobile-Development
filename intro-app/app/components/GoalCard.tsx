import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "react-native-animated-progress";

interface Goal {
    name: string;
    currentValue: number;
    goalValue: number;
    units: string;
}

export default function GoalCard(goal: Goal) {
    const progress = goal.currentValue / goal.goalValue * 100;
    const isCompleted = progress === 100;

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{goal.name}</Text>
            <Text>{isCompleted ? "Completed" : `Status: ${goal.currentValue} / ${goal.goalValue} ${goal.units}`}</Text>
            <ProgressBar
                progress={progress}
                onCompletion={() => {}}
                backgroundColor="green"
                height={10}
                animated={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        gap: 5,
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
    },
    name: {
        fontSize: 25,
        fontWeight: '500',
    },
})

import { StyleSheet, Text, View, ScrollView } from "react-native";
import GoalCard from "@/components/GoalCard";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const goals = [
    {
        name: 'Daily Steps',
        currentValue: 4500,
        goalValue: 10000,
        units: 'steps'
    },
    {
        name: 'Read Book',
        currentValue: 40,
        goalValue: 50,
        units: 'pages'
    },
    {
        name: 'Workout',
        currentValue: 1,
        goalValue: 1,
        units: ''
    },
    {
        name: 'Take Vitamins',
        currentValue: 0,
        goalValue: 1,
        units: ''
    },
    {
        name: 'Laundry',
        currentValue: 1,
        goalValue: 1,
        units: ''
    },
    {
        name: 'Respond to Texts',
        currentValue: 2,
        goalValue: 10,
        units: 'texts'
    },
    {
        name: 'Respond to Emails',
        currentValue: 0,
        goalValue: 1,
        units: ''
    },
    {
        name: 'Daily Steps',
        currentValue: 4500,
        goalValue: 10000,
        units: 'steps'
    },
    {
        name: 'Watch Episode',
        currentValue: 43,
        goalValue: 60,
        units: 'minutes'
    },
]

export default function Stylish() {
    const tabBarHeight = useBottomTabBarHeight() + 40;

    return (
        <View>
            <Text style={styles.header}>Stylish Screen</Text>
            <ScrollView contentContainerStyle={{ paddingBottom: tabBarHeight}}>
                {goals.map((goal, index) => (
                    <GoalCard
                        key={index}
                        name={goal.name}
                        currentValue={goal.currentValue}
                        goalValue={goal.goalValue}
                        units={goal.units}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
})
import { useReducer, useState } from "react";
import { Text, View, StyleSheet, Switch, Button } from "react-native";

const reducer = (state: any, action: any) => {
  switch (action) {
    case "increment":
        return state + 1;
    case "decrement":
        return state - 1
    case "reset":
      return 0;
  }
}

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [count, dispatch] = useReducer(reducer, 0)

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  }

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.header}>On/Off Switch</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ alignSelf: 'center'}}
        />
        <Text>
          Status: {isEnabled ? "On" : "Off"}
        </Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.header}>Counter</Text>
        <Text>Count: {count}</Text>
        <View style={styles.button}>
          <Button
            title="+"
            onPress={() => dispatch("increment")}
          />
          <Button
            title="-"
            onPress={() => dispatch("decrement")}
          />
          <Button
            title="Reset"
            onPress={() => dispatch("reset")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  subcontainer: {
    gap: 15,
    margin: 30,
  },
  header: {
    fontSize: 30,
  },
  button: {
    flexDirection: 'row',
    gap: 20
  },
})

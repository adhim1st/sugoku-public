import React, { useState } from "react";
import { TextInput, Button, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Home({ navigation }) {
  const [name, setName] = useState("");
  const [diff, setDiff] = useState("random");
  function toGame() {
    navigation.navigate("Game", {
      player: name,
      diff: diff,
    });
    setName("");
  }
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 5 }}>Player Name</Text>
      <TextInput
        style={{
          height: 40,
          width: 150,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
        }}
        value={name}
        onChangeText={(nameValue) => setName(nameValue)}
      ></TextInput>
      <Text style={{ marginBottom: 5 }}>Difficulty</Text>
      <Picker
        style={{ height: 50, width: 130 }}
        selectedValue={diff}
        onValueChange={(itemValue) => setDiff(itemValue)}
      >
        <Picker.Item label="Easy" value="easy" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Hard" value="hard" />
        <Picker.Item label="Random" value="random" />
      </Picker>
      <Button title="Play Sudoku" onPress={toGame}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

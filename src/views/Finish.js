import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { resetValidate } from "../store/actions/sudokuAction";
export default function Finish({ navigation, route }) {
  const { winner } = route.params;
  const dispatch = useDispatch();

  function toRestart() {
    navigation.navigate("Home");
  }

  useEffect(() => {
    dispatch(resetValidate());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Selamat {winner}, Kamu Menang</Text>
      <Button title="Play Again" onPress={toRestart}></Button>
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

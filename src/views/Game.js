import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBoard,
  solveSugoku,
  validateSugoku,
  gradeSugoku,
} from "../store/actions/sudokuAction";
import { Grid } from "react-native-easy-grid";
import Board from "../components/Board";
import { ScrollView } from "react-native-gesture-handler";

export default function Game({ navigation, route }) {
  const dispatch = useDispatch();
  const sudokuBoard = useSelector((state) => state.sudokuReducer.board);
  const validateBoard = useSelector((state) => state.sudokuReducer.validate);
  const gradeBoard = useSelector((state) => state.sudokuReducer.grade);
  const { player, diff } = route.params;

  function toValidate() {
    dispatch(validateSugoku(sudokuBoard));
  }

  function toSolve() {
    dispatch(solveSugoku(sudokuBoard));
  }

  useEffect(() => {
    dispatch(fetchBoard(diff));
  }, []);

  useEffect(() => {
    dispatch(gradeSugoku(sudokuBoard));
  }, [sudokuBoard]);

  useEffect(() => {
    if (validateBoard === "solved") {
      navigation.replace("Finish", {
        winner: player,
      });
    }
  }, [validateBoard]);

  return (
    <ScrollView>
      <View>
        <Text>Hai {player}</Text>
        <Text>Status : {JSON.stringify(validateBoard)}</Text>
        <Text>Difficulty : {JSON.stringify(gradeBoard)}</Text>
        <Grid style={styles.grid}>
          {sudokuBoard &&
            sudokuBoard.map((board, index) => (
              <Board key={index} board={board} />
            ))}
        </Grid>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
        <Button title="Validate" onPress={toValidate}></Button>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
        <Button title="Solve" onPress={toSolve}></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid: {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: 6,
  },
});

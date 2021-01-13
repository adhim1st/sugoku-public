import React from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import { Col, Row } from "react-native-easy-grid";

export default function Board(props) {
  return (
    <>
      <Row style={styles.col}>
        {props.board.map((boardRow, index) =>
          boardRow === 0 ? (
            <Col style={boardRow === 2 ? styles.row2 : styles.row} key={index}>
              <TextInput
                style={styles.textInput}
                keyboardType={"phone-pad"}
                maxLength={1}
              ></TextInput>
            </Col>
          ) : (
            <Col style={styles.rowFilled} key={index}>
              <Text style={styles.text}>{boardRow}</Text>
            </Col>
          )
        )}
      </Row>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: "white",
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "#000",
    borderWidth: 1,
    borderColor: "#7f8c8d",
    borderRightWidth: 2,
  },
  row2: {
    backgroundColor: "white",
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "#000",
    borderWidth: 1,
    borderColor: "#7f8c8d",
    borderRightWidth: 5,
  },
  rowFilled: {
    backgroundColor: "#34495e",
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "#000",
    borderWidth: 1,
    borderColor: "#7f8c8d",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  textInput: {
    fontSize: 20,
    color: "#2c3e50",
    color: "#34495e",
  },
  col: {
    borderWidth: 2,
    borderColor: "#7f8c8d",
  },
});

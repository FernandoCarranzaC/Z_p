import React from "react";
import { StyleSheet, View,  Text } from "react-native";

export default function GestPers_Titulo() {
  return (
      
      <Text style={styles.textTitle}>GESTIONAR PERSONAL</Text>

  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    color:"green",
    fontWeight: "bold"
  }
});

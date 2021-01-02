import React from "react";
import { StyleSheet, View,  Text } from "react-native";

export default function GestJefeD_Titulo() {
  return (
      
    <Text style={styles.textTitle}>GESTIONAR JEFES DEPARTAMENTALES</Text>

  );
}

const styles = StyleSheet.create({

  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    color:"blue",
    fontWeight: "bold"
  }
});
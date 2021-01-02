import React from "react";
import { StyleSheet, View,  Text } from "react-native";

export default function AddJefeD_Titulo() {
  return (
      
    <Text style={styles.textTitle}>AÑADIR JEFE DEPARTAMENTAL{"\n"}</Text>

  );
}

const styles = StyleSheet.create({

  textTitle: {
  
    textAlign: "center",
    fontSize: 20,
    color:"blue",
    fontWeight: "bold"
  }
});
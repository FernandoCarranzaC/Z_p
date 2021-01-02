import React from "react";
import { StyleSheet, View, ScrollView, Text,Image } from "react-native";


export default function addFormTitulo() {

  return (
   
    <Text style={styles.textTitle}>Integrarse Estudiante  actividad{"\n"}</Text>
  
   
  );
}
const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight:30
  },
  textTitle: {
    marginTop: 0,
    marginBottom: 0,
    textAlign: "center",
    fontSize: 20,
    color:"#2980B9",
    fontWeight: "bold",
  }
});
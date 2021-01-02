import React from "react";
import { StyleSheet, View, ScrollView, Text,Image } from "react-native";


export default function Estudiante_Titulo() {

  return (
    <View centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>Estudiante</Text>
    </View>
   
  );
}
const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 0,
    marginRight: 0
  },
   textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color:"#2980B9"
  } 
});
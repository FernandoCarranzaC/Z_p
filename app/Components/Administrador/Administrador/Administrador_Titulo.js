import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Administrador_Titulo() {
  return (
    <View centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>Administrador</Text>
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
    color:"blue"
  } 
});
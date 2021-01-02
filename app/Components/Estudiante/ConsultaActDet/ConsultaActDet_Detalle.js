import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function detalleActividad() {
  return (
    
    <View>
      <Text style={styles.textbody}>  Nombre de actividad: </Text>
      <Text style={styles.textbody}>  Instructor: </Text>
      <Text style={styles.textbody}>  Fecha de Impartición: </Text>
      <Text style={styles.textbody}>  Horario: </Text> 
    </View>
   
  );
}


const styles = StyleSheet.create({
   textbody:{
    fontSize: 14,
    color:"black",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  } 
});
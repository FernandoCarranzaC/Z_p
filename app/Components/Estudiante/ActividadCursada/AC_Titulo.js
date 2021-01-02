import React from "react";
import { StyleSheet, Text } from "react-native";


export default function ConsultaActDet_Titulo() {

  return (
   
    <Text style={styles.textTitle}>Actividades Cursadas</Text>
  
  );
}
const styles = StyleSheet.create({
    textTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 20,
        color:"#2980B9",
        fontWeight: "bold"
      },
    textsubTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 18,
        color:"#2980B9",
        fontWeight: "bold"
      }

});
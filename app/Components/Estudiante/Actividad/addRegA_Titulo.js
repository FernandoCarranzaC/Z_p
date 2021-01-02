import React from "react";
import { StyleSheet, View, ScrollView, Text,Image } from "react-native";


export default function addRegA_Titulo() {

  return (
    <View centerContent={true} style={styles.viewBody}>
     <Text style={styles.textTitle}>REGISTRARSE EN ACTIVIDADES</Text>
     <Text style={styles.textsubTitle}>Inscríbete en Actividad... </Text>
    </View>
   
  );
}
const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight:30
  },
   textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color:"#2980B9"
  } ,
  textsubTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 15,
    color:"#2980B9",
    fontWeight: "bold"
  }
});
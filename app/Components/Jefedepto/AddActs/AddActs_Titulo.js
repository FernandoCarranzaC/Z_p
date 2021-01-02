import React from "react";
import { StyleSheet, View,  Text,  } from "react-native";

export default function AddActs_Titulo() {
  return (
    
      <View>
        <Text style={styles.textTitle}>AGREGAR ACTIVIDAD COMPLEMENTARIA{"\n"}</Text>
      </View>
    
  );
}


const styles = StyleSheet.create({
      
    textTitle: {
      
      textAlign: "center",
      fontSize: 20,
      color:"green",
      fontWeight: "bold",
    }
  });
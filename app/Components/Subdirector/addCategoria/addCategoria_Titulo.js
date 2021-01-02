import React from "react";
import { Text,StyleSheet,View } from "react-native";



export default function addCategoria_Titulo() {
  return (
    
    <View>
      <Text style={styles.textTitle}>AÑADIR CATEGORIA{"\n"}</Text>
    </View>

  );
}


const styles = StyleSheet.create({
    textTitle: {
        marginTop: 20,
        marginBottom: 0,
        textAlign: "center",
        fontSize: 20,
        color:"maroon",
        fontWeight: "bold"
      },
});
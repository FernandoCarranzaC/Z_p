import React from "react";
import { Text,StyleSheet,View } from "react-native";



export default function InstrCalif_Titulo() {
  return (
    
    <View>
      <Text style={styles.textTitle}>Calificaciones de Grupos</Text>  
    </View>

  );
}

const alertItemactividad = (item) => {
  Alert.alert(item.title+"\n Horario")
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color:"#B9770E"
  }
});
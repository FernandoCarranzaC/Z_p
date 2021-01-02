import React from "react";
import { Text,StyleSheet,View } from "react-native";



export default function ListCategoria_Titulo() {
  return (
    
    <View>
      <Text style={styles.textTitle}>LISTADO DE CATEGORIAS</Text>
    </View>

  );
}

const alertItemactividad = (item) => {
  Alert.alert(item.title+"\n Horario")
}

const styles = StyleSheet.create({
    textTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 20,
        color:"maroon",
        fontWeight: "bold"
      },
});
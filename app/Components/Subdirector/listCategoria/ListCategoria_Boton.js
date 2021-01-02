import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";


export default function ListCategoria_Boton({navigation}) {

  return (        
    <View style={styles.viewBtn}>
    <Button
      title="Agregar Categoria"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => navigation.navigate("add-categoria")}
    />
  </View>
  
  );
}


const styles = StyleSheet.create({
   btnAddMaestro: {
   marginBottom: 25
  },
  btnStyle: {
    backgroundColor: "#CA6F1E"
  },
  btnContainer: {
    width: "80%",
    marginBottom: 25
  },
  viewBtn: {
    
    alignItems: "center"
  }
 });
import React from "react";
import { View,StyleSheet } from "react-native";
import GestDepto_Titulo from "../../Components/Administrador/GestDepto/GestDepto_Titulo";
import GestDepto_Boton from "../../Components/Administrador/GestDepto/GestDepto_Boton";
import GestDepto_ListDepto from "../../Components/Administrador/GestDepto/GestDepto_ListDepto";


export default function GestionDepto() {
  
  return (
    <View style={styles.viewBody}>
    <GestDepto_Titulo/> 
    <GestDepto_Boton/>
     <GestDepto_ListDepto/>
  
  </View>
  );
}


const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
    marginBottom: 150,

  }
});


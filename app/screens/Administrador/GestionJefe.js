import React from "react";
import { View,StyleSheet } from "react-native";
import GestJefeD_Titulo from "../../Components/Administrador/GestJefeD/GestJefeD_Titulo";
import GestJefeD_Boton from "../../Components/Administrador/GestJefeD/GestJefeD_Boton";
import GestJefeD_ListJefe from "../../Components/Administrador/GestJefeD/GestJefeD_ListJefe";


export default function GestionDepto() {
  
  return (
    <View style={styles.viewBody}>
    <GestJefeD_Titulo/> 
    <GestJefeD_Boton/>
     <GestJefeD_ListJefe/>
  
  </View>
  );
}


const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
    marginBottom: 195,

  }
});
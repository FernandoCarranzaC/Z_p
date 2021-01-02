import React from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import GestPers_Titulo from "../../Components/Jefedepto/GestPers/GestPers/GestPers_Titulo";
import GestPers_Boton from "../../Components/Jefedepto/GestPers/GestPers/GestPers_Boton";
import GestPers_ListPers from "../../Components/Jefedepto/GestPers/GestPers/GestPers_ListPers";

export default function GestionPersonal() {
  
  return (
   <View style={styles.viewBody}>
     <GestPers_Titulo/> 
     <GestPers_Boton/>
    <GestPers_ListPers/>
   
   </View>
  );
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },

});


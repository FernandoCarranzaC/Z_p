import React from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import GestActs_Titulo from "../../Components/Jefedepto/GestActs/GestActs_Titulo";
import GestActs_Boton from "../../Components/Jefedepto/GestActs/GestActs_Boton";
import GestActs_ListActs from "../../Components/Jefedepto/GestActs/GestActs_ListActs";

export default function GestionPersonal() {
  
  return (
   <View style={styles.viewBody}>
     <GestActs_Titulo/> 
     <GestActs_Boton/>
    <GestActs_ListActs/>
   
   </View>
  );
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },

});
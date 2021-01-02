
import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import IAListAsist_Titulo from "../../Components/Instructor/IA_ListAsist/IAListAsist_Titulo";
import IAListAsist_Grupo from "../../Components/Instructor/IA_ListAsist/IAListAsist_Grupo";


export default function AsistenciaGrupo() {
  return (
   <View style={styles.viewBody}>
     <IAListAsist_Titulo/>
     <IAListAsist_Grupo/>
   </View>
   
  );
}


const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 15,
      marginRight: 15,
      marginTop: 0,
    marginBottom: 100,
    },
    
  });
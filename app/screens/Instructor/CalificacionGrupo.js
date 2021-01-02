
import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import ICListCalif_Titulo from "../../Components/Instructor/IC_ListCalif/ICListCalif_Titulo";
import ICListCalif_Grupo from "../../Components/Instructor/IC_ListCalif/ICListCalif_Grupo";


export default function CalificacionGrupo() {
  return (
   <View style={styles.viewBody}>
     <ICListCalif_Titulo/>
     <ICListCalif_Grupo/>
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
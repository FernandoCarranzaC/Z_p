
import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import InstrAsist_Titulo from "../../Components/Instructor/Instr_Asist/InstrAsist_Titulo";
import InstrAsist_Grupo from "../../Components/Instructor/Instr_Asist/InstrAsist_Grupo";


export default function AsistenciaInstructor() {
     return (
   <View style={styles.viewBody}>
     <InstrAsist_Titulo/>
     <InstrAsist_Grupo/>
   </View>
  
  );
}
const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
  marginBottom: 100,
  },
  
});

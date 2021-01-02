
import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import InstrCalif_Titulo from "../../Components/Instructor/Instr_Calif/InstrCalif_Titulo";
import InstrCalif_Grupo from "../../Components/Instructor/Instr_Calif/InstrCalif_Grupo";


export default function AsistenciaInstructor() {
     return (
   <View style={styles.viewBody}>
     <InstrCalif_Titulo/>
     <InstrCalif_Grupo/>
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

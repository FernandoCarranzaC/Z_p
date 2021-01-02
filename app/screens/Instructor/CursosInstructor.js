import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import InstrCurs_Titulo from "../../Components/Instructor/Instr_Curs/InstrCurs_Titulo";
import InstrCurs_GruposA from "../../Components/Instructor/Instr_Curs/InstrCurs_GruposA";

export default function CursosInstructor() {
  return (
   <View style={styles.viewBody}>
     <InstrCurs_Titulo/>
     <InstrCurs_GruposA/>
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
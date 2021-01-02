import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import AddActs_Titulo from "../../Components/Jefedepto/AddActs/AddActs_Titulo";
import AddActs_Datos from "../../Components/Jefedepto/AddActs/AddActs_Datos";
import AddActs_Boton from "../../Components/Jefedepto/AddActs/AddActs_Boton";

export default function addActividad() {
  return (
    <View style={styles.viewBody}>
      <AddActs_Titulo/>
      <ScrollView>
        <AddActs_Datos/>
        <AddActs_Boton/>
      </ScrollView>
    </View>
   
  );
}


const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  marginBottom: 100,
  },
  
});
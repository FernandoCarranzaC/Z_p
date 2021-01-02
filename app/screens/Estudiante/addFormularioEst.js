
import React from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import AddFormTitulo from "../../Components/Estudiante/Formulario/addFormTitulo";
import AddFormDatosE from "../../Components/Estudiante/Formulario/addFormDatosE";
import AddFormBoton from "../../Components/Estudiante/Formulario/addFormBoton";

export default function addFormularioEst() {

  return(
    
      <View  style={styles.viewBody}>
      <AddFormTitulo/>
      <ScrollView >    
      <AddFormDatosE/>
      <AddFormBoton/>
       </ScrollView>
      </View>

   
    );
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 80,
  },
  textoutput:{
    fontWeight: "bold",
  },
  input: {
    
    margin: 10,
    height: 10,
    borderColor: '#5DADE2',
    borderWidth: 1,
    color: '#2980B9' ,
   
 }
});
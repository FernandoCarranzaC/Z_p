import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import AddDepto_Titulo from "../../Components/Administrador/AddDepto/AddDepto_Titulo";
import AddDepto_DatosF from "../../Components/Administrador/AddDepto/AddDepto_DatosF";
import AddDepto_Boton from "../../Components/Administrador/AddDepto/AddDepto_Boton";


export default function addPersonal() {
  return (
   <View style={styles.viewBody}>
     <AddDepto_Titulo/>
     <ScrollView>
     <AddDepto_DatosF/>
     <AddDepto_Boton/>
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

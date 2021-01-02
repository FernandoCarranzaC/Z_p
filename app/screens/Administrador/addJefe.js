import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import AddJefeD_Titulo from "../../Components/Administrador/AddJefeD/AddJefeD_Titulo";
import AddJefeD_DatosF from "../../Components/Administrador/AddJefeD/AddJefeD_DatosF";
import AddJefeD_Boton from "../../Components/Administrador/AddJefeD/AddJefeD_Boton";


export default function addPersonal() {
  return (
   <View style={styles.viewBody}>
     <AddJefeD_Titulo/>
     <ScrollView>
     <AddJefeD_DatosF/>
     <AddJefeD_Boton/>
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
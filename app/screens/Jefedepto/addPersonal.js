import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import AddPers_Titulo from "../../Components/Jefedepto/AddPers/AddPers_Titulo";
import AddPers_Datos from "../../Components/Jefedepto/AddPers/AddPers_Datos";
import AddPers_Boton from "../../Components/Jefedepto/AddPers/AddPers_Boton";


export default function addPersonal() {
  return (
   <View style={styles.viewBody}>
     <AddPers_Titulo/>
     <ScrollView>
     <AddPers_Datos/>
     <AddPers_Boton/>
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
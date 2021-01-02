import React from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import ConsultaActDet_Titulo from "../../Components/Estudiante/ConsultaActDet/ConsultaActDet_Titulo";
import ConsultaActDet_Icono from "../../Components/Estudiante/ConsultaActDet/ConsultaActDet_Icono";
import ConsultaActDet_Detalle from "../../Components/Estudiante/ConsultaActDet/ConsultaActDet_Detalle";
import ConsultaActDet_Imagen from "../../Components/Estudiante/ConsultaActDet/ConsultaActDet_Imagen";

export default function detalleActividad() {
  return (
   <View style={styles.viewBody}>
     <ConsultaActDet_Titulo/>
     <ConsultaActDet_Icono/>
     <ScrollView>
     <ConsultaActDet_Detalle/>
     <ConsultaActDet_Imagen/>
     </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 150,
  }
});
import React from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import ListCategoria_Titulo from "../../Components/Subdirector/listCategoria/ListCategoria_Titulo";
import ListCategoria_CategoriasB from "../../Components/Subdirector/listCategoria/ListCategoria_CategoriasB";



export default function Subdirector() {
 
  return (
    <View style={styles.viewBody}>
    <ListCategoria_Titulo/>
    <ListCategoria_CategoriasB />
    </View>
  );
}


const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  }
});

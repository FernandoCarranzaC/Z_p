import React from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";


export default function addCategoria() {
  return (
    <View>
      <Text style={styles.textoutput}>CLAVE CATEGORIA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {txtclaveCat}
          placeholderTextColor = "#CA6F1E"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {c=>setclaveCat(c)}
      /> 
      <Text style={styles.textoutput}>NOMBRE DE LA CATEGORÍA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {txtnombreCat}
          placeholderTextColor = "#CA6F1E"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {n=>setnombreCat(n)}
      /> 
    </View>
  );
}


var clave,nombreCategoria

var handleClave = (text) => {
  clave= text 
}
var handleNombreCategoria = (text) => {
  nombreCategoria= text 
}


const showAlert = () =>{
  Alert.alert(
     'Categoria agregada...'+clave+' '+nombreCategoria
  )
}


const styles = StyleSheet.create({
     textoutput:{
      fontWeight: "bold",
    },
    input: {
      
      margin: 15,
      height: 40,
      borderColor: '#F1C40F',
      borderWidth: 1,
      color: 'maroon' ,
      
   },  
  });
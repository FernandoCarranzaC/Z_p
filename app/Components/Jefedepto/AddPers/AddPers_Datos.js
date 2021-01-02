import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";


export default function AddPers_Datos() {
  return (
       
     <View>
      <Text style={styles.textoutput}>NO. TARJETA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona el número de tarjeta..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleClave}
           autoCapitalize='characters' 
      /> 
      <Text style={styles.textoutput}>NOMBRE DEL PERSONAL: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona nombre del personal..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleNombrePersonal}
           autoCapitalize='characters' 
      /> 
       <Text style={styles.textoutput}>SELECCIONA DEPARTAMENTO: </Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Clave del departamento a que pertenece..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleDepartamento}
           autoCapitalize='characters' 
      /> 
      
        </View>
    
  );
}


var clave,nombrePersonal,departamento

var handleClave = (text) => {
  clave= text 
}
var handleNombrePersonal = (text) => {
  nombrePersonal= text 
}
var handleDepartamento = (text) => {
  departamento= text 
}


const styles = StyleSheet.create({
   
    textoutput:{
      fontWeight: "bold",
    },
    input: {
      
      margin: 15,
      height: 40,
      borderColor: 'lime',
      borderWidth: 1,
      color: 'green' ,
      
   }
  });
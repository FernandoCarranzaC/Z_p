import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";


export default function AddJefeD_Datos() {
  return (
       
    <View>
      <Text style={styles.textoutput}>NO. TARJETA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona el número de tarjeta..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleClave}
           autoCapitalize='characters' 
      /> 
      <Text style={styles.textoutput}>NOMBRE DEL JEFE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona nombre del jefe departamental..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleNombreJefe}
           autoCapitalize='characters' 
      /> 
       <Text style={styles.textoutput}>SELECCIONA DEPARTAMENTO: </Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona la clave del departamento de que es jefe..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleDepartamento}
           autoCapitalize='characters' 
      /> 
     </View>
  );
}


var clave,nombreJefe,departamento

var handleClave = (text) => {
  clave= text 
}
var handleNombreJefe = (text) => {
  nombreJefe= text 
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
      borderColor: '#5DADE2',
      borderWidth: 1,
      color: 'blue' ,
      
   }
  });
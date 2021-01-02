import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";


export default function AddJefeD_Datos() {
  return (
       
    <View>
      <Text style={styles.textoutput}>CLAVE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona la clave del departamento..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleClave}
           autoCapitalize='characters' 
      /> 
      <Text style={styles.textoutput}>DEPARTAMENTO: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Nombre del departamento..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleDepartamento}
           autoCapitalize='characters' 
      /> 
       <Text style={styles.textoutput}>SUBDIRECCIÓN DEPENDIENTE: </Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Selecciona subdirección a que pertenece el departamento..."
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          onChangeText = {handleSubdireccion}
           autoCapitalize='characters' 
      /> 
      </View>
  );
}


var clave,departamento,subdireccion

var handleClave = (text) => {
  clave= text 
}
var handleDepartamento = (text) => {
  departamento= text 
}
var handleSubdireccion = (text) => {
  subdireccion= text 
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
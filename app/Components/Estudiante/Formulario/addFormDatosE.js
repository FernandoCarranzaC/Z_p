import React from "react";
import { StyleSheet, View, ScrollView, Text,Alert } from "react-native";
import {Input, Button } from "react-native-elements";



export default function addFormDatosE() {
  return (
   
          
    <View >
  
      <Text style={styles.textoutput}>No. Contro: </Text>
      <Input  style={styles.input } placeholder='Numero control...'
       placeholderTextColor = "#7FB3D5"
       autoCapitalize = "none"
       onChangeText = {handleClave}
       autoCapitalize='characters' 
      />
     <Text style={styles.textoutput}>Nombre: </Text>
     <Input  style={styles.input } placeholder='Nomber Estudiante..'
       placeholderTextColor = "#7FB3D5"
       autoCapitalize = "none"
       onChangeText = {handleClave}
       autoCapitalize='characters' 
      />

      <Text style={styles.textoutput}>Clave Curso: </Text>
     <Input  style={styles.input } placeholder='Clave del Curso..'
       placeholderTextColor = "#7FB3D5"
       autoCapitalize = "none"
       onChangeText = {handleClave}
       autoCapitalize='characters' 
      />
       <Text style={styles.textoutput}>Nombre del Curso: </Text>
     <Input  style={styles.input } placeholder='Nombre del Curso..'
       placeholderTextColor = "#7FB3D5"
       autoCapitalize = "none"
       onChangeText = {handleClave}
       autoCapitalize='characters' 
      />

     <Text style={styles.textoutput}>Horario y fecha del Curso: </Text>
     <Input  style={styles.input } placeholder='Horario y fecha del Curso..'
       placeholderTextColor = "#7FB3D5"
       autoCapitalize = "none"
       onChangeText = {handleClave}
       autoCapitalize='characters' 
      />     
        </View>
  );
}

const showAlert = () =>{
    Alert.alert(
       'Estudiante rgistrado...'
    )
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
    viewBody: {
      marginLeft: 30,
      marginRight: 30
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
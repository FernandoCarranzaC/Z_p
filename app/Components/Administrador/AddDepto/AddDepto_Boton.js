
import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Button } from "react-native-elements";


export default function AddJefeD_Boton() {
  return (
  
    <View style={styles.viewBtn}>
    <Button
      title="Añadir departamento"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={showAlert}
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


const showAlert = () =>{
  Alert.alert(
     'Departamento Añadido...'+clave+' '+departamento+' '+subdireccion
  )
}


const styles = StyleSheet.create({
  
    btnStyle: {
      backgroundColor: "#5DADE2"
    
    },
    btnContainer: {
      width: "70%",
      marginBottom: 5
    },
    viewBtn: {
     
      alignItems: "center"
    }
  });
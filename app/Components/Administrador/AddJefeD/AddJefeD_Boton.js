
import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Button } from "react-native-elements";


export default function AddJefeD_Boton() {
  return (
  
    <View style={styles.viewBtn}>
    <Button
      title="Añadir Jefe Departamental"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={showAlert}
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


const showAlert = () =>{
    Alert.alert(
       'Jefe Añadido...'+clave+' '+nombreJefe+' '+departamento
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
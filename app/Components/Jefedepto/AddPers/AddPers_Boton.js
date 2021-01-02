
import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Button } from "react-native-elements";


export default function AddPers_Boton() {
  return (
  
      <View style={styles.viewBtn}>
        <Button
          title="Añadir Personal"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={showAlert}
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


const showAlert = () =>{
  Alert.alert(
     'Personal Añadido...'+clave+' '+nombrePersonal+' '+departamento
  )
}


const styles = StyleSheet.create({
  
    btnStyle: {
      backgroundColor: "#48C9B0"
    
    },
    btnContainer: {
      width: "70%",
      marginBottom: 5
    },
    viewBtn: {
     
      alignItems: "center"
    }
  });

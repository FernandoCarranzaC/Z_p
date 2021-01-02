import React from "react";
import { StyleSheet, View, ScrollView, Text, TextInput, Alert } from "react-native";
import { Button, ListItem, Icon,Input } from "react-native-elements";


export default function addFormBoton() {
  return (
  
      <View style={styles.viewBtn}>
        <Button
          title="Registrarse en actividad"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={showAlert}
        />
        </View>
   
  );
}


var clave,nombreJefe,departamento



const showAlert = () =>{
  Alert.alert(
     'Estudiante Añadido...'+clave
  )
}


const styles = StyleSheet.create({
  
    btnStyle: {
      backgroundColor: "#00BCD4"
    },
    btnContainer: {
      width: "70%"
    },
    viewBtn: {
      flex: 6,
      alignItems: "center",
      marginBottom: 10,
    marginTop: 0,
    }
  });


import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Button } from "react-native-elements";


export default function AddActs_Boton() {
  return (
  
      <View style={styles.viewBtn}>
        <Button
          title="Añadir Actividad"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={showAlert}
        />

        </View>


  );
}


var claveG,categoria, nombreA,instructorA,horario,periodo,apertura


const showAlert = () =>{
  Alert.alert(
     'Actividad Añadira...'+nombreA
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

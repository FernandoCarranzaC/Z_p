import React from "react";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";


export default function ConsultaActDet_Imagen() {
  return (
   
      <Avatar style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    marginTop: 15,
    width: 120,
    height: 120,
    textAlign: "center"
  }
});
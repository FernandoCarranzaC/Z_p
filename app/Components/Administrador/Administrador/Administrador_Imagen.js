import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Administrador_Imagen() {
  return (
    <View style={styles.viewBtn}>
       <Image
        style={styles.photo}
        source={{ uri: 'https://source.unsplash.com/featured/?{executive}' }}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({

   btnStyle: {
    backgroundColor: "#5DADE2"
  },
  
  viewBtn: {
   
    alignItems: "center"
  },
  photo: {
    height: 200,
    width: 200,
    marginBottom: 30,
    marginTop: 0,
  }
});
import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export default function Estudiante_Imagen() {
  return (
    <View style={styles.viewBtn}>
       <Image
        style={styles.photo}
     
        source={{ uri: 'https://source.unsplash.com/ZNJmyvFIbcI' }}
      
        
      />
     
    </View>
  );
}

const styles = StyleSheet.create({

   btnStyle: {
    backgroundColor: "#00a680"
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
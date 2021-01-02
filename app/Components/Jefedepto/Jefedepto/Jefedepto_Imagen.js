import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export default function Jefedepto_Imagen() {
  return (
    <View style={styles.viewBtn}>
       <Image
        style={styles.photo}
        source={{ uri: 'https://source.unsplash.com/featured/?{boss}' }}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({

   btnStyle: {
    backgroundColor: "#48C9B0"
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
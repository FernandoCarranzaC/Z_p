import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Subdirector_Imagen() {
  return (
    <View style={styles.viewBtn}>
       <Image
        style={styles.photo}
        source={{ uri: 'https://source.unsplash.com/WMD64tMfc4k' }}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({

   btnStyle: {
    backgroundColor: "#D4AC0D"
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
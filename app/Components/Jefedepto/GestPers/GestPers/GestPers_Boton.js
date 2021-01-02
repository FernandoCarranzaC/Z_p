import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function GestPers_Boton() {
  const navigation = useNavigation();
  return (        
    <View style={styles.viewBtn}>
        <Button title="Agregar Personal"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("add-personal")}
          />
    </View>
       
         

  );
}


const styles = StyleSheet.create({
  
  btnAddMaestro: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#48C9B0"
  },
  btnContainer: {
    width: "70%",
    marginBottom: 15
  },
  viewBtn: {
    alignItems: "center"
  },
});

import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function GestDepto_Boton() {
  const navigation = useNavigation();
  return (        
    <View style={styles.viewBtn}>
        <Button
          title="Agregar departamento"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("add-depto")}
        />
      </View>
       
         

  );
}


const styles = StyleSheet.create({
  
 btnAddMaestro: {
    marginBottom: 5
    },
 btnStyle: {
    backgroundColor: "#5DADE2"
  },
  btnContainer: {
    width: "70%",
    marginBottom: 15
  },
 viewBtn: {
    alignItems: "center"
  },
});
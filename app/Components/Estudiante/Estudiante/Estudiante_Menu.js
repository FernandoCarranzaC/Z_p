import React from "react";
import { StyleSheet, View, ScrollView, Text,Image } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Estudiante_Menu() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      
     
     <View style={styles.viewBtn}>
       <Button
         title="Consultar Actividades"
         buttonStyle={styles.btnStyle}
         containerStyle={styles.btnContainer}
         onPress={() => navigation.navigate("constulta-Actividad")}
       />
     
        <Button
          title="Registrarse en Actividad"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("add-RegistroA")}
        />
      
        <Button
          title="Actividades Cursadas"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("actividad-Cursada")}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  viewBody: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0
  },
  division:{
    fontSize: 5,
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color:"#2980B9"
  },
  btnAddMaestro: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#00BCD4"
  },
  btnContainer: {
    width: "70%",
    marginBottom: 15
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  },

  
  
  photo: {
    height: 140,
    width: 140,
    marginBottom: 20,
    marginTop: 20
  }
});
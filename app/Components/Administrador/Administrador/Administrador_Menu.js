import React from "react";
import { StyleSheet, View, ScrollView, Text,Image } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Administrador_Menu() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}> 
     <View style={styles.viewBtn}>
       <Button
        title="Gestionar Departamentos"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("gestion-depto")}
       />
     
        <Button
           title="Gestionar Jefes Deparamentales"
           buttonStyle={styles.btnStyle}
           containerStyle={styles.btnContainer}
           onPress={() => navigation.navigate("gestion-jefe")}
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
    color:"blue"
  },
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
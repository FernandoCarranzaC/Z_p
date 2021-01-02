import React from "react";
import { StyleSheet, View, ScrollView, Text,Image } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Subdirector_Menu() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>  
     <View style={styles.viewBtn}>
     <Button
          title="Agregar Categorias"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("add-categoria")}
        />
     
     <Button
          title="Consultar Categorias"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("list-categoria")}
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
  btnStyle: {
    backgroundColor: "#CA6F1E"
  },
  btnContainer: {
    width: "70%",
    marginBottom: 15
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  }
});
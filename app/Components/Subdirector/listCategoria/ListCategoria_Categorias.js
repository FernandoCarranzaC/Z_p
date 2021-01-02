import React from "react";
import { StyleSheet, View, ScrollView, Alert,TouchableOpacity } from "react-native";
import {  ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ListCategoria_Categorias() {
  const navigation = useNavigation();
  return (
  <ScrollView style={styles.ScrollviewBody}>
 {list.map((item, i) => (
      <TouchableOpacity onPress = {() => alertItemName(item)}>
       <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
      ))}
     </ScrollView>
  );

}

const alertItemName = (item) => {

  alert(item.title+"\n actualizar  borrar ")

}



const styles = StyleSheet.create({
  ScrollviewBody: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 200,

  }
});


const list = [
    {
      title: "Ciclismo Ruta 1",
      icon: "bike"
    },
    {
      title: "Brigada de Ecología 2",
      icon: "biathlon"
    },
    {
      title: "Taller de lectura 3",
      icon: "book-open-variant"
    },
    {
      title: "Brigada de Rescate 4",
      icon: "hospital-box"
    },
    {
      title: "Basquet ball 5",
      icon: "tennis-ball"
    },
    {
      title: "Ciclismo Ruta 1",
      icon: "bike"
    },
    {
      title: "Brigada de Ecología 2",
      icon: "biathlon"
    },
    {
      title: "Taller de lectura 3",
      icon: "book-open-variant"
    },
    {
      title: "Brigada de Rescate 4",
      icon: "hospital-box"
    },
    {
      title: "Basquet ball 5",
      icon: "tennis-ball"
    }
  ];
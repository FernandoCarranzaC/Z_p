import React from "react";
import { StyleSheet, View, ScrollView, Text, Alert,TouchableOpacity } from "react-native";
import {  ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ConsultaAct_Act() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody} >
      {list.map((item, i) => (
      <TouchableOpacity onPress = {() => navigation.navigate("detalle-actividad")}>
       <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}
      </ScrollView>     
  );
}

const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      marginBottom: 205,
    },
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 20,
      color:"#2980B9",
      fontWeight: "bold"
    },
    textsubTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 15,
      color:"#2980B9",
      fontWeight: "bold"
    },
    btnAddMaestro: {
      marginBottom: 5
    },
    btnStyle: {
      backgroundColor: "#00BCD4"
    },
    btnContainer: {
      width: "80%"
    },
    viewBtn: {
      flex: 6,
      alignItems: "center"
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
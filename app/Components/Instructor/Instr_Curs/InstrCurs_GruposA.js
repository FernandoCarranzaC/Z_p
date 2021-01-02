import React from "react";
import { StyleSheet, View,ScrollView, Text, Alert, TouchableOpacity } from "react-native";
import { ListItem, Icon } from "react-native-elements";



export default function InstrCurs_GrupoA() {
  return (
    <ScrollView centerContent={true} >
      {list.map((item, i) => (
      <TouchableOpacity onPress = {() =>alertItemactividad(item) }>
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

const alertItemactividad = (item) => {
  Alert.alert(item.title+"\n Horario")
}



const list = [
  {
    title: "Ciclismo Ruta 1",
    icon: "bike"
  },
  {
    title: "Basketball",
    icon: "basketball"
  },
  {
    title: "Voleibol",
    icon: "volleyball"
  },
  {
    title: "Futbol",
    icon: "soccer"
  },
  {
    title: "Americano",
    icon: "football"
  },
  {
    title: "Beisbol",
    icon: "baseball"
  },
  {
    title: "Ciclismo Ruta 1",
    icon: "bike"
  },
  {
    title: "Basketball",
    icon: "basketball"
  },
  {
    title: "Voleibol",
    icon: "volleyball"
  },
  {
    title: "Futbol",
    icon: "soccer"
  },
  {
    title: "Americano",
    icon: "football"
  },
  {
    title: "Beisbol",
    icon: "baseball"
  },
];
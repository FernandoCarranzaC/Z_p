import React from "react";
import { StyleSheet, View, ScrollView, Alert,TouchableOpacity } from "react-native";
import {  ListItem, Icon } from "react-native-elements";


export default function GestDepto_ListDepto() {

  return (
    <ScrollView centerContent={true} >
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
  Alert.alert(item.title+"\n actualizar  borrar ")
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
    marginBottom: 200,

  }
});


const list = [
    {
      title: "José Manuel Padilla",
      icon: "account-circle-outline"
    },
    {
      title: "Carla Acevedo",
      icon: "account-circle-outline"
    },
    {
        title: "Esmeralda Selene Oseguera",
        icon: "account-circle-outline"
      },
      {
        title: "Martha Elizabeth",
        icon: "account-circle-outline"
      },
      {
        title: "Bertha Hernández",
        icon: "account-circle-outline"
      },
      {
        title: "Blanca Rojas",
        icon: "account-circle-outline"
      },
      {
        title: "Emilio Eliud",
        icon: "account-circle-outline"
      },
      {
        title: "Veronica Castro",
        icon: "account-circle-outline"
      }
   
  ];
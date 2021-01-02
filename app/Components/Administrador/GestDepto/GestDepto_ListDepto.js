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
      title: "Sistemas y Computación 1",
      icon: "domain"
    },
    {
      title: "Química y Bioquímica 2",
      icon: "domain"
    },
    {
        title: "Ingeniería Insutrial 3",
        icon: "domain"
      },
      {
        title: "Ciencias de la Tierra 4",
        icon: "domain"
      },
      {
        title: "Económico Admtras. 5",
        icon: "domain"
      },
      {
        title: "Desarrollo Académico 6",
        icon: "domain"
      },
      {
        title: "Actividades Extra-escol 7",
        icon: "domain"
      },
      {
        title: "Centro de Información 8",
        icon: "domain"
      }
  ];
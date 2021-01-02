import React from "react";
import { StyleSheet, View, ScrollView, Alert,TouchableOpacity } from "react-native";
import {  ListItem, Icon } from "react-native-elements";


export default function GestPers_ListPers() {

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
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
    title: "Nombre Persona 1",
    icon: "account"
  },
  {
    title: "Nombre Persona 2",
    icon: "account-outline"
  },
  {
    title: "Nombre Persona 1",
    icon: "account"
  },
  {
    title: "Nombre Persona 2",
    icon: "account-outline"
  },
  {
    title: "Nombre Persona 1",
    icon: "account"
  },
  {
    title: "Nombre Persona 2",
    icon: "account-outline"
  },
  {
    title: "Nombre Persona 1",
    icon: "account"
  },
  {
    title: "Nombre Persona 2",
    icon: "account-outline"
  },
  {
    title: "Nombre Persona 1",
    icon: "account"
  },
  {
    title: "Nombre Persona 2",
    icon: "account-outline"
  }
];
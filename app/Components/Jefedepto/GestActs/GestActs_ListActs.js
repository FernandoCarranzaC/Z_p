import React from "react";
import { StyleSheet, View, ScrollView, Alert,TouchableOpacity } from "react-native";
import {  ListItem, Icon } from "react-native-elements";


export default function GestActs_ListActs() {

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
      title: "Actividad 1",
      icon: "account"
    },
    {
      title: "Actividad 2",
      icon: "account-outline"
    },
    {
        title: "Actividad 3",
        icon: "account"
      },
      {
        title: "Actividad 4",
        icon: "account-outline"
      },
      {
        title: "Actividad 5",
        icon: "account"
      },
      {
        title: "Actividad 6",
        icon: "account-outline"
      },
      {
        title: "Actividad 7",
        icon: "account"
      },
      {
        title: "Actividad 8",
        icon: "account-outline"
      },
      {
        title: "Actividad 9",
        icon: "account"
      },
      {
        title: "Actividad 10",
        icon: "account-outline"
      }
  ];
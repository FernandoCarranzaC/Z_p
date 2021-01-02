import React from "react";
import { StyleSheet, View, ScrollView,Alert,TouchableOpacity } from "react-native";
import { ListItem, Icon } from "react-native-elements";


export default function actividadCursada() {
  return (
    <View centerContent={true} >
      {list.map((item, i) => (
      <TouchableOpacity onPress = {() =>alertItemactividad(item) }>
       <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const alertItemactividad = (item) => {
  Alert.alert(item.title+"\n Calificación ")
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  }
});

const list = [
  {
    title: "Ciclismo Ruta 1",
    icon: "bike"
  },
  {
    title: "Taller de lectura 2",
    icon: "book-open-variant"
  },
  {
    title: "Congreso 3",
    icon: "tennis-ball"
  },
  {
    title: "Ciclismo Ruta 1",
    icon: "bike"
  },
  {
    title: "Taller de lectura 2",
    icon: "book-open-variant"
  },
  {
    title: "Congreso 3",
    icon: "tennis-ball"
  },
  {
    title: "Ciclismo Ruta 1",
    icon: "bike"
  },
  {
    title: "Taller de lectura 2",
    icon: "book-open-variant"
  },
  {
    title: "Congreso 3",
    icon: "tennis-ball"
  }
];
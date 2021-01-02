import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";


export default function InstrAsist_Grupo() {
    const navigation = useNavigation();
    return (
   
    <ScrollView centerContent={true} >
     {list.map((item, i) => (
      <TouchableOpacity onPress = {() => navigation.navigate("asistencia-grupo")}>
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
  
];
import React from "react";
import { ScrollView, Alert, TouchableOpacity } from "react-native";
import { ListItem, Icon, Input  } from "react-native-elements";


export default function IAListAsist_Grupo() {
  return (
    <ScrollView centerContent={true} >
{list.map((item, i) => (
      <TouchableOpacity onPress = {() =>alertItemactividad(item,i) }>
       <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <Input  placeholder='Calificación...'/>
          </ListItem.Content>
         
        </ListItem>
        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const alertItemactividad = (item,i) => {
    Alert.alert(item.title+"\n Califica...")
    list[i].icon="account-check"
  }


const list = [
  {
    title: "Erick Dalet ",
    icon: "account-check-outline"
  },
  {
    title: "Edgar",
    icon: "account-check-outline"
  },
  {
    title: "Fernando",
    icon: "account-check-outline"
  },
  {
    title: "Juan Carlos",
    icon: "account-check-outline"
  },
  {
    title: "Yarida  ",
    icon: "account-check-outline"
  },
  {
    title: "Oscar",
    icon: "account-check-outline"
  },
  {
    title: "Ramón",
    icon: "account-check-outline"
  },
  {
    title: "Fernando Narez",
    icon: "account-check-outline"
  }
  
];
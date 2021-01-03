import React from "react";
import { StyleSheet, View, ScrollView, Alert,TouchableOpacity } from "react-native";
import {  ListItem, Icon } from "react-native-elements";
import useFetch from '../../../../hooks/useFetch'
import { useNavigation } from "@react-navigation/native";

export default function GestDepto_ListDepto() {
  const navigation = useNavigation();
  const {loading, data: departamentos} = useFetch(`http://192.168.1.65:3000/departamentos/`)
  return (
    <ScrollView centerContent={true} >
    {departamentos.map((item, i) => (
      <TouchableOpacity onPress = {() => navigation.navigate('departamento-detalle',{id: item.id})}>
       <ListItem key={i} bottomDivider>
          <Icon name={'domain'} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.claveDepto}</ListItem.Title>
            <ListItem.Title>{item.nombreDepto}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const alertItemName = (item) => {
  Alert.alert(item.claveDepto+"\n actualizar  borrar ")
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
    marginBottom: 200,

  }
});



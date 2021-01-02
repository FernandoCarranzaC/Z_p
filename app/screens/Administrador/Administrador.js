import React from "react";
import { View } from "react-native";
import Administrador_Titulo from "../../Components/Administrador/Administrador/Administrador_Titulo";
import Administrador_Imagen from "../../Components/Administrador/Administrador/Administrador_Imagen";
import Administrador_Menu from "../../Components/Administrador/Administrador/Administrador_Menu";

export default function Administrador() {
 
  return(
    <View>
      <Administrador_Titulo/>
      <Administrador_Imagen/>
      <Administrador_Menu/>
     
  
    </View>

   
    );
}
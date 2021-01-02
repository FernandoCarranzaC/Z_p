import React from "react";
import { View } from "react-native";
import Estudiante_Titulo from "../../Components/Estudiante/Estudiante/Estudiante_Titulo";
import Estudiante_Imagen from "../../Components/Estudiante/Estudiante/Estudiante_Imagen";
import Estudiante_Menu from "../../Components/Estudiante/Estudiante/Estudiante_Menu";

export default function Estudiante() {

  return(
    <View>
      <Estudiante_Titulo/>
      <Estudiante_Imagen/>
      <Estudiante_Menu/>
    </View>

   
    );
}



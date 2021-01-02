import React from "react";
import { View } from "react-native";
import Subdirector_Titulo from "../../Components/Subdirector/Subdirector/Subdirector_Titulo";
import Subdirector_Imagen from "../../Components/Subdirector/Subdirector/Subdirector_Imagen";
import Subdirector_Menu from "../../Components/Subdirector/Subdirector/Subdirector_Menu";



export default function Jefedepto() {

  return(
    <View>
      <Subdirector_Titulo/>
      <Subdirector_Imagen/>
      <Subdirector_Menu/>
    </View>

   
    );
}
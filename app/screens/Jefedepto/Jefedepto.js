import React from "react";
import { View } from "react-native";
import Jefedepto_Titulo from "../../Components/Jefedepto/Jefedepto/Jefedepto_Titulo";
import Jefedepto_Imagen from "../../Components/Jefedepto/Jefedepto/Jefedepto_Imagen";
import Jefedepto_Menu from "../../Components/Jefedepto/Jefedepto/Jefedepto_Menu";

export default function Jefedepto() {

  return(
    <View>
      <Jefedepto_Titulo/>
      <Jefedepto_Imagen/>
      <Jefedepto_Menu/>
    </View>

   
    );
}


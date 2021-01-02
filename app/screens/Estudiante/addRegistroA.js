import React from "react";

import AddRegA_Titulos from "../../Components/Estudiante/Actividad/addRegA_Titulo";
import AddRegA_Actividad from "../../Components/Estudiante/Actividad/addRegA_Actividad";
import { View } from "react-native";


export default function addRegistroA() {

  return(
    <View>
      <AddRegA_Titulos/>
      <AddRegA_Actividad/>
    </View>

   
    );
}


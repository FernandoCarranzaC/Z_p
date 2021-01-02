import React from "react";
import { View } from "react-native";
import Instructor_Titulo from "../../Components/Instructor/Instructor/Instructor_Titulo";
import Instructor_Imagen from "../../Components/Instructor/Instructor/Instructor_Imagen";
import Instructor_Menu from "../../Components/Instructor/Instructor/Instructor_Menu";

export default function Instructor() {

  return(
    <View>
      <Instructor_Titulo/>
      <Instructor_Imagen/>
      <Instructor_Menu/>
    </View>

   
    );
}
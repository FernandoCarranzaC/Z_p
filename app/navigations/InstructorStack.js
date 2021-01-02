import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Instructor from "../screens/Instructor/Instructor";
import AsistenciaInstructor from "../screens/Instructor/AsistenciaInstructor";
import Califica from "../screens/Instructor/Califica";
import CalificacionInstructor from "../screens/Instructor/CalificacionInstructor";
import CursosInstructor from "../screens/Instructor/CursosInstructor";
import AsistenciaGrupo from "../screens/Instructor/AsistenciaGrupo";
import CalificacionGrupo from "../screens/Instructor/CalificacionGrupo";


const Stack = createStackNavigator();

export default function InstructorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="instructores"
        component={Instructor}
        options={{ title: "Instructores" }}
      />
        <Stack.Screen
        name="asistencia-instructor"
        component={AsistenciaInstructor}
        options={{ title: "Regresar a Gestion Instructor", color:"red" } }
      />
       <Stack.Screen
        name="califica"
        component={Califica}
        options={{ title: "Regresar a Califica Instructor" }}
      />
       <Stack.Screen
        name="calificacion-instructor"
        component={CalificacionInstructor}
        options={{ title: "Regresar a Gestion Instructor" }}
      />
       <Stack.Screen
        name="cursos-instructor"
        component={CursosInstructor}
        options={{ title: "Regresar a Gestion Instructor" }}
      />
         <Stack.Screen
        name="asistencia-grupo"
        component={AsistenciaGrupo}
        options={{ title: "Regresar a Asistencia Grupos" }}
      />
      <Stack.Screen
        name="calificacion-grupo"
        component={CalificacionGrupo}
        options={{ title: "Regresar a Calificacion Grupos" }}
      />
    </Stack.Navigator>
  );
}

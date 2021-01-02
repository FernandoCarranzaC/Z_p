import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Estudiante from "../screens/Estudiante/Estudiante";
import actividadCursada from "../screens/Estudiante/actividadCursada";
import addRegistroA from "../screens/Estudiante/addRegistroA";
import constultaActividad from "..//screens/Estudiante/consultaActividad";
import detalleActividad from "..//screens/Estudiante/detalleActividad";
import addFormularioEst from "..//screens/Estudiante/addFormularioEst";

const Stack = createStackNavigator();

export default function EstudianteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="estudiante"
        component={Estudiante}
        options={{ title: "Estudiante" }}
      />
      
      <Stack.Screen
        name="constulta-Actividad"
        component={constultaActividad}
        options={{ title: "Regresar a estudiante" }}
      />
      <Stack.Screen
        name="add-RegistroA"
        component={addRegistroA}
        options={{ title: "Regresar a estudiante" }}
      />
       <Stack.Screen
        name="actividad-Cursada"
        component={actividadCursada}
        options={{ title: "Regresar a estudiante" }}
      />
        <Stack.Screen
        name="detalle-actividad"
        component={detalleActividad}
        options={{ title: "Regresa consulta actividades " }}
      />
       <Stack.Screen
        name="add-FormularioEst"
        component={addFormularioEst}
        options={{ title: "Regresa a Registrarse en actividades " }}
      />

       
    </Stack.Navigator>
  );
}

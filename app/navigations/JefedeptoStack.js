import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Jefedepto from "../screens/Jefedepto/Jefedepto";
import GestionPersonal from "../screens/Jefedepto/GestionPersonal";
import GestionActividad from "../screens/Jefedepto/GestionActividad";
import addActividad from "../screens/Jefedepto/addActividad";
import addPersonal from "../screens/Jefedepto/addPersonal";


const Stack = createStackNavigator();

export default function JefedeptoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jefesdepto"
        component={Jefedepto}
        options={{ title: "Jefes de Departamentos" }}
      />
      <Stack.Screen
        name="gestion-personal"
        component={GestionPersonal}
        options={{ title: "Volver Jefes de Departamento" }}
      />
      <Stack.Screen
        name="gestion-actividad"
        component={GestionActividad}
        options={{ title: "Volver Jefes de Departamento" }}
      />
       <Stack.Screen
        name="add-actividad"
        component={addActividad}
        options={{ title: "Volver Gestionar  Actividades" }}
      />
       <Stack.Screen
        name="add-personal"
        component={addPersonal}
        options={{ title: "Volver a Gestionar Personal" }}
      />
    </Stack.Navigator>
  );
}

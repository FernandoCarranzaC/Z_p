import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Subdirector from "../screens/Subdirector/Subdirector";
import listCategoria from "../screens/Subdirector/listCategorias"
import addCategoria from "../screens/Subdirector/addCategoria";
import categoriaDetalle from "../screens/Subdirector/categoriaDetalle";
import modifCategoria from "../screens/Subdirector/modifCategoria"

const Stack = createStackNavigator();

export default function SubdirectorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Subdirector"
        component={Subdirector}
        options={{ title: "Subdirectores" }}
      />
      <Stack.Screen
        name="add-categoria"
        component={addCategoria}
        options={{ title: "Regresa a Gestionar Cateogrias..." }}
      />
       <Stack.Screen
        name="list-categoria"
        component={listCategoria}
        options={{ title: "Regresa a Gestionar Cateogrias..." }}
      />
        <Stack.Screen
        name="categoria-detalle"
        component={categoriaDetalle}
        options={{ title: "Regresa a Gestionar Cateogrias..." }}
      />
       <Stack.Screen
        name="categoria-modificar"
        component={modifCategoria}
        options={{ title: "Regresa a Gestionar Cateogrias..." }}
      />

    </Stack.Navigator>
  );
}

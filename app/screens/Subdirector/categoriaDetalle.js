import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useFetch from '../../hooks/useFetch';
import DetCategoria_Titulo from "../../Components/Subdirector/categoriaDetalle/DetCategoria_Titulo";
import DetCatDatos from "../../Components/Subdirector/categoriaDetalle/DetCatDatos";
import DetCatBotones from "../../Components/Subdirector/categoriaDetalle/DetCatBotones";
import { useNavigation } from "@react-navigation/native";



export default function categoriaDetalle({route}) {
    const { id, claveCat,nombreCat } = route.params;
    const navigation = useNavigation();
    //const { loading, data } = useFetch(`http://192.168.1.65:3000/categorias?filter[where][claveCat]=${claveCat}`)
    const { loading, data } = useFetch(`http://192.168.1.65:3000/categorias/${id}`)
    return (
        <View >
            <DetCategoria_Titulo/>
           {/* <Text>{data[0].claveCat}</Text>*/}
            <DetCatDatos loading={loading} id={data.id} claveCat={data.claveCat} nombreCat={data.nombreCat}/>
            <DetCatBotones id={data.id} claveCat={data.claveCat} nombreCat={data.nombreCat}/>
            
        </View>
    )
}

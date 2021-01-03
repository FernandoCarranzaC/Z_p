import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useFetch from '../../hooks/useFetch';
import DetDepto_Titulo from "../../Components/Administrador/GestDepto/DeptoDetalle/DetDepto_Titulo";
import DetDeptoDatos from "../../Components/Administrador/GestDepto/DeptoDetalle/DetDeptoDatos";
import DetCatBotones from "../../Components/Subdirector/categoriaDetalle/DetCatBotones";
import { useNavigation } from "@react-navigation/native";



export default function departamentoDetalle({route}) {
    const {id } = route.params;
    const navigation = useNavigation();
    //const { loading, data } = useFetch(`http://192.168.1.65:3000/categorias?filter[where][claveCat]=${claveCat}`)
    const { loading, data } = useFetch(`http://192.168.1.65:3000/departamentos/${id}`)
    return (
        <View >
            <DetDepto_Titulo/>
           {/* <Text>{data[0].claveCat}</Text>*/}
            <DetDeptoDatos loading={loading} id={data.id} claveDepto={data.claveDepto} nombreDepto={data.nombreDepto} subdireccionDepto={data.subdireccionDepto}/>
            <DetCatBotones id={data.id} claveDepto={data.claveDepto} nombreDepto={data.nombreDepto} subdireccionDepto={data.subdireccionDepto}/>
            
        </View>
    )
}
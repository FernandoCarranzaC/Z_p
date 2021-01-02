import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

export default function DetCatDatos({loading, id, claveCat, nombreCat}) {
    return (
    
            <View style={styles.viewBody}>
            {loading ? <Text>Cargando ...</Text> :
                <>
                    <Text style={styles.textoutput}>ID CATEGORIA: </Text>
                    <Text style={styles.textinfo}>{id}</Text>
                    <Text style={styles.textoutput}>CLAVE CATEGORIA: </Text>
                    <Text style={styles.textinfo}>{claveCat}</Text>
                    <Text style={styles.textoutput}>NOMBRE CATEGORIA: </Text>
                    <Text style={styles.textinfo}>{nombreCat}</Text>
                </>
            }   
            </View>

    )
}

const styles = StyleSheet.create({
 
    viewBody: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 0,
      marginBottom: 10,
      },
      textoutput:{
        fontWeight: "bold",
      },
      textinfo: {
        margin: 15,
        height: 40,
        borderColor: '#F1C40F',
        borderWidth: 1,
        color: 'maroon' ,
        textAlignVertical: "center",
            
     },
})
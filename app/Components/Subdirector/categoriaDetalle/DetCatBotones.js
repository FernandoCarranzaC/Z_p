import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useFetch from '../../../hooks/useFetch';

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

export default function DetCatBotones({id, claveCat,nombreCat }) {
 
    const navigation = useNavigation();
  
    return (
               <View style={styles.viewBtn}>
                    <Button
                    title="Eliminar Categoria"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.1.65:3000/categorias/${id}`, {
                            method: 'DELETE'
                        
                        }).then(() => {
                            alert('Categoria Eliminada')
                            navigation.navigate('Subdirector')
                        })
                    }}
                     />
                    <Button
                     title="Modificar Categoria"
                     buttonStyle={styles.btnStyle}
                     containerStyle={styles.btnContainer}
                     onPress ={() => navigation.navigate('categoria-modificar',{id: id, claveCat: claveCat, nombreCat: nombreCat})}
                     
                     />
                     <Button
                     title="Regresar Categoria"
                     buttonStyle={styles.btnStyle}
                     containerStyle={styles.btnContainer}
                     onPress={() => navigation.navigate('Subdirector')}
                     />
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
      btnContainer: {
        width: "70%",
        marginBottom: 15
      },
      btnStyle: {
        backgroundColor: "#CA6F1E",
     
      },
      viewBtn: {
   
        marginTop:10,
        alignItems: "center"
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
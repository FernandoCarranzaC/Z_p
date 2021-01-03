import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

           
export default function DetDeptoBotones({id, claveDepto, nombreDepto, subdireccionDepto  }) {
 
    const navigation = useNavigation();
  
    return (
               <View style={styles.viewBtn}>
                    <Button
                    title="Eliminar Departamento"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.1.65:3000/departamentos/${id}`, {
                            method: 'DELETE'
                        
                        }).then(() => {
                            alert('Departamento Eliminada')
                            navigation.navigate('administrador')
                        })
                    }}
                     />
                    <Button
                     title="Modificar Categoria"
                     buttonStyle={styles.btnStyle}
                     containerStyle={styles.btnContainer}
                     onPress ={() => navigation.navigate('departamento-modificar',{id: id, claveDepto: claveDepto, nombreDepto: nombreDepto, subdireccionDepto: subdireccionDepto})}
                     
                     />
                     <Button
                     title="Regresar Categoria"
                     buttonStyle={styles.btnStyle}
                     containerStyle={styles.btnContainer}
                     onPress={() => navigation.navigate('administrador')}
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
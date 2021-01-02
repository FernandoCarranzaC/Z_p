import React,{useState} from "react";
import { StyleSheet, View, ScrollView,Text, TextInput, Alert } from "react-native";
import AddCategoria_Titulo from "../../Components/Subdirector/addCategoria/addCategoria_Titulo";
import AddCategoria_Datos from "../../Components/Subdirector/addCategoria/addCategoria_Datos";
import AddCategoria_Boton from "../../Components/Subdirector/addCategoria/addCategoria_Boton";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { unmountComponentAtNode } from "react-dom";


export default function addCategoria() {
  const navigation = useNavigation();
  const[txtclaveCat, setclaveCat] = useState('Escribe clave de Categoria')
  const[txtnombreCat,setnombreCat]= useState("Escribe nombre categoria")
  const[tclav, settclav] = useState('Escribe Clave de Categoria...')
  const[tnom,settnom]= useState("Escribe Nombre de categoria...")
  

  return (

    <View style={styles.viewBody}>
   
   <AddCategoria_Titulo/>
    <ScrollView>
    <Text style={styles.textoutput}>CLAVE CATEGORIA: </Text>
      <TextInput  style={styles.input} 
          name= "uno"
          underlineColorAndroid = "transparent"
          placeholder = {tclav}
          placeholderTextColor = "#CA6F1E"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclaveCat(c)}
      /> 
      <Text style={styles.textoutput}>NOMBRE DE LA CATEGORÍA: </Text>
      <TextInput  style={styles.input} 
          name="dos"
          underlineColorAndroid = "transparent"
          placeholder = {tnom}
          placeholderTextColor = "#CA6F1E"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(n)=>setnombreCat(n)}
          /> 
  
   <View style={styles.viewBtn}>
   <Button
      title="Añadir Categoria"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => {
        fetch('http://192.168.1.65:3000/categorias/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                claveCat: txtclaveCat,
                nombreCat: txtnombreCat
            })
        }).then(()=>{ 
          settclav()
          settclav('Escribe clave de la categoria...')
          settnom();
          settnom('Escribe nombre categoria...')
          setclaveCat('Escribe Clave de la categoria')
          setnombreCat('Escribe Nombre de la categoria')
          alert('Categoria agregada'+' '+txtclaveCat+' '+txtnombreCat)
        })
        
        
    }}
    />
    <Button
      title="Regresar Categoria"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={ () => navigation.navigate('Subdirector')
    }
    />
    </View>
    </ScrollView>
  </View>


  );
}



const styles = StyleSheet.create({
 
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
  marginBottom: 100,
  },
  textoutput:{
    fontWeight: "bold",
  },
  input: {
    
    margin: 15,
    height: 40,
    borderColor: '#F1C40F',
    borderWidth: 1,
    color: 'maroon' ,
    
 },  
 btnAddMaestro: {
  marginBottom: 5
 },
 btnStyle: {
   backgroundColor: "#CA6F1E",

 },
 btnContainer: {
   width: "70%",
   marginBottom: 15
 },
 viewBtn: {
   
   marginTop:20,
   alignItems: "center"
 }
  
});

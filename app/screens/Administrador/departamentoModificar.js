import React,{useState} from "react";
import { StyleSheet, View, ScrollView,Text, TextInput, Alert } from "react-native";
import AddCategoria_Titulo from "../../Components/Subdirector/addCategoria/addCategoria_Titulo";
import AddCategoria_Datos from "../../Components/Subdirector/addCategoria/addCategoria_Datos";
import AddCategoria_Boton from "../../Components/Subdirector/addCategoria/addCategoria_Boton";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function departamentoModificar({route}) {
  const { id, claveDepto, nombreDepto, subdireccionDepto } = route.params;
  const navigation = useNavigation();
  const[txtclaveDepto, setclaveDepto] = useState(claveDepto)
  const[txtnombreDepto,setnombreDepto]= useState(nombreDepto)
  const[txtsubdireccionDepto,setsubidreccionDepto]= useState(subdireccionDepto)
  const[tclav, settclav] = useState("Agrega clave de Departamento...")
  const[tnom,settnom]= useState("Agrega nombre de Departamento...")
  const[tsubdireccionDepto,settsubdireccionDepto]= useState("Agrega nombre de Subdireccion...")

  return (

    <View style={styles.viewBody}>
   
   <Text style={styles.textTitle}>ACTUALIZAR DEPARTAMENTO{"\n"}</Text>
    <ScrollView>
    <Text style={styles.textoutput}>CLAVE DEPARTAMENTO: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue = {txtclaveDepto}
          placeholder = {tclav}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclaveDepto(c)}
      /> 
      <Text style={styles.textoutput}>NOMBRE DE LA CATEGORÍA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={txtnombreDepto}
          placeholder={tnom}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(n)=>setnombreDepto(n)}
          /> 
           <Text style={styles.textoutput}>NOMBRE DEL DEPARTAMENTO: </Text>
        <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={txtsubdireccionDepto}
          placeholder={tsubdireccionDepto}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(s)=>setsubidreccionDepto(s)}
          /> 
<View style={styles.viewBtn}>
  <Button
      title="Actualizar Departamento"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => {
        fetch(`http://192.168.1.65:3000/departamentos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                claveDepto: txtclaveDepto,
                nombreDepto: txtnombreDepto,
                subdireccionDepto: txtsubdireccionDepto
            })
        }).then(() => {
          settclav()
          settclav('Escribe Clave de Departamento...')
          settnom()
          settnom('Escribe nombre de Departamento...')
          settsubdireccionDepto()
          settsubdireccionDepto('Escribe nombre de Subdireccion')
          setclaveDepto('Escribe clave del Departamento')
          setnombreDepto('Escribe nombre del Departamento')
          setsubidreccionDepto('Escribe nombre de la subdirección')

          alert('Departamento Actualizado')
          navigation.navigate('administrador')
           
            
        });
    }}
    />
    <Button
      title="Regresar Categoria"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => navigation.navigate('administrador')
    }
    />
    </View>
    </ScrollView>
  </View>


  );
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: 20,
    marginBottom: 0,
    textAlign: "center",
    fontSize: 20,
    color:"maroon",
    fontWeight: "bold"
  },
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
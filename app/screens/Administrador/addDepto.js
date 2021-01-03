import { StyleSheet, View, Text, TextInput, ScrollView} from "react-native";
import AddDepto_Titulo from "../../Components/Administrador/AddDepto/AddDepto_Titulo";
import AddDepto_DatosF from "../../Components/Administrador/AddDepto/AddDepto_DatosF";
import AddDepto_Boton from "../../Components/Administrador/AddDepto/AddDepto_Boton";
import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import { Button } from "react-native-elements";

export default function addPersonal() {
  const navigation = useNavigation();
  const[txtclaveDepto, setclaveDepto] = useState('Escribe clave del Departamento')
  const[txtnombreDepto, setnombreDepto]= useState("Escribe nombre del Departamento")
  const[txtsubdireccion, setsubdireccion]= useState("Escribe nombre del Subidrección")
  const[tclav, settclav] = useState('Escribe Clave de Departamento...')
  const[tnom,settnom]= useState("Escribe Nombre de Departamento...")
  const[tsubdir,settsubdir]= useState("Escribe Nombre de Subdirección...")
  return (
   <View style={styles.viewBody}>
     <AddDepto_Titulo/>
     <ScrollView>
    {/* <AddDepto_DatosF/> */}
     <View>
      <Text style={styles.textoutput}>CLAVE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {tclav}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclaveDepto(c)}
       
      /> 
      <Text style={styles.textoutput}>DEPARTAMENTO: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {tnom}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(n)=>setnombreDepto(n)}
          
      /> 
       <Text style={styles.textoutput}>SUBDIRECCIÓN DEPENDIENTE: </Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {tsubdir}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(s)=>setsubdireccion(s)}   
      /> 
      </View>
      <View style={styles.viewBtn}>
      <Button
        title="Añadir departamento"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => {
          fetch('http://192.168.1.65:3000/departamentos/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                claveDepto: txtclaveDepto,
                nombreDepto: txtnombreDepto,
                subdireccionDepto: txtsubdireccion
              })
          }).then(()=>{ 
            settclav()
            settclav('Escribe Clave de Departamento...')
            settnom();
            settnom('Escribe nombre Departamento...')
            settsubdir();
            settsubdir('Escribe nombre Subdirección...')
            setclaveDepto('Escribe Clave del Departamento')
            setnombreDepto('Escribe Nombre del Departamento')
            setsubdireccion('Escribe Nombre de la Subdireccion')
            
            alert('Departamento agregado'+' '+txtclaveDepto+' '+txtnombreDepto)
          })
          
          
      }}
      />
      <Button
      title="Regresar Administrador"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={ () => navigation.navigate('administrador')
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
      marginTop: 20,
    marginBottom: 100,
    },
    textoutput:{
      fontWeight: "bold",
    },
    input: {
      
      margin: 15,
      height: 40,
      borderColor: '#5DADE2',
      borderWidth: 1,
      color: 'blue' ,
      
   },
   btnStyle: {
    backgroundColor: "#5DADE2"
  
  },
  btnContainer: {
    width: "70%",
    marginBottom: 10
  },
  viewBtn: {
   
    alignItems: "center"
  }
    
  });





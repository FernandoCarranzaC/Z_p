import React from "react";
import { View, ScrollView,StyleSheet,Alert,TouchableOpacity,Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import ListItems from '../../../Components/Subdirector/listCategoria/ListItem'
import useFetch from '../../../hooks/useFetch'
import { useNavigation } from "@react-navigation/native";

export default function ListCategoria_CategoriasB() {
  const {loading, data: categorias} = useFetch('http://192.168.1.65:3000/categorias')
  const navigation = useNavigation();
  return (

     <ScrollView style={styles.ScrollviewBody}>
    {loading ? <Text>Cargando ...</Text> :
  
   <FlatList
                    style={styles.list}
                    data={categorias}
                    keyExtractor={x => x.id}
                    renderItem={({ item }) =>
                        
                 
                    <ListItems                           
                        onPress ={() => navigation.navigate('categoria-detalle',{id: item.id, claveCat: item.claveCat, nombreCat: item.nombreCat})}
                        claveCat={item.claveCat} 
                        nombreCat={item.nombreCat}                  
                        >
                    </ListItems>
            

                    }
                />         
                }
   </ScrollView> 
  );
}


const styles = StyleSheet.create({
   
  ScrollviewBody: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 200,

  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
},
list: {
    alignSelf: 'stretch',
}
});

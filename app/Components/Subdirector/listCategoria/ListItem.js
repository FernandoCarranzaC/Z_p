import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ListItem, Icon } from "react-native-elements";

export default ({nombreCat, claveCat, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{claveCat+" "+nombreCat}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    text: {
        fontSize: 18
    }
})
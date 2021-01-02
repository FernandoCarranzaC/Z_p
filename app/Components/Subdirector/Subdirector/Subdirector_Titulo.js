import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Subdirector_Titulo() {
  return (
        <View centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>Subdirector Académico</Text>
    </View>

  );
}
const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 0,
    marginRight: 0
  },
    textTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30,
        color:"maroon",
        fontWeight: "bold"
      },
});
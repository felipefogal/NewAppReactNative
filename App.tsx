import React from "react";
import { Alert, Button, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={container}>
      <Text style={text}>Tarrrrrrrrrrrde, pessoar !!! 🎉</Text>
      <Button
        title="Clique aqui pra ficar mió de bom!"
        color="#e4092d"
        onPress={() => Alert.alert("Clique aqui que vai ser da hora demais, sô =D ")}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    color: "#000",
    fontFamily: "cursive",
  },
});

const lists = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "#7debff",
  },
  listItem: {
    fontWeight: "bold",
    fontFamily: "Cochin"
  },
});

const container = StyleSheet.compose(page.container, lists.listContainer);
const text = StyleSheet.compose(page.text, lists.listItem);

export default App;

import React from "react";
import { Alert, Button, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={container}>
      <Text style={text}>Hello World !!! 🎉</Text>
      <Button
        title="Clique aqui para saber mais"
        color="#e4092d"
        onPress={() => Alert.alert("Não esqueçam da maldição do Hello World...")}
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
    fontSize: 30,
    textAlign: "center",
    color: "#000",
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

const otherButtons = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#ff5733"
  }
})

const container = StyleSheet.compose(page.container, lists.listContainer);
const text = StyleSheet.compose(page.text, lists.listItem);

export default App;

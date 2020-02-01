import React, { useState } from "react";
import { TextInput, StyleSheet, Text, KeyboardAvoidingView, Alert } from "react-native";
import { validateUser } from "../../utils/validateUser";
import { TouchableOpacity } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";

// import { Container } from './styles';

export function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleNavigate() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    navigation.dispatch(resetAction);
  }

  async function handleSumit() {
    setIsLoading(true);
    const isValidUser = await validateUser(username, password, "https://api.myjson.com/bins/kj4aq");
    if (isValidUser) {
      navigation.navigate("Main");
    } else {
      Alert.alert("Ops!", "Parece que você digitou uma combinação inválida de usuário e senha.", [
        { text: "Ok", onPress: () => handleNavigate() }
      ]);
    }
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styled.container}>
      <Text style={styled.label}>Usuário:</Text>
      <TextInput style={styled.input} value={username} onChangeText={text => setUsername(text)} />
      <Text style={styled.label}>Senha:</Text>
      <TextInput
        style={styled.input}
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={isLoading ? styled.buttonDisabled : styled.button}
        activeOpacity={isLoading ? 0.5 : 1}
      >
        <Text onPress={handleSumit} style={styled.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 50,
    width: 250,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },
  label: {
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 16
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "#000",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 5
  },
  buttonDisabled: {
    width: 100,
    height: 50,
    backgroundColor: "#ccc",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 5,
    opacity: 0.4
  },
  buttonText: {
    color: "#fff"
  }
});

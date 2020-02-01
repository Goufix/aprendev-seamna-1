import React from "react";
import { StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";

export function Main({ navigation }) {
  // function used to reset the state of the page that you are trying to
  // navigate to.
  function handleNavigate() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    navigation.dispatch(resetAction);
  }
  return (
    <>
      <KeyboardAvoidingView behavior='padding' style={styled.container}>
        <Text>Você está logado!</Text>
        <TouchableOpacity style={styled.logoutButton} onPress={() => handleNavigate()}>
          <Text style={styled.logoutText}>Logout</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center"
  },
  logoutButton: {
    width: 100,
    height: 50,
    backgroundColor: "#000",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 5
  },
  logoutText: {
    color: "#fff"
  }
});

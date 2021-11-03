import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import { LoginBtn } from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
//context
import { useAuth } from "../useAuth";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, setIsAuth } = useAuth();

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const authHandler = async () => {
    if (email && password) {
      if (password.length < 8) {
        return Alert.alert("Password length min 8 charts");
      } else if (validateEmail(email) == false) {
        return Alert.alert("Email is not valid");
      }

      await AsyncStorage.setItem("token", "algnaweovsdnl ");
      setIsAuth(false);
    } else {
      Alert.alert("Fill in all the fields!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TestApp</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#fff"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          minLength={8}
          placeholderTextColor="#fff"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <LoginBtn onPress={authHandler} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212120",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#575957",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
    opacity: 0.7,
  },
  error: {
    color: "red",
    fontSize: 14,
  },
});

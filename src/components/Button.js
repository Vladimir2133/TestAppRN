import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export const LoginBtn = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.loginBtn}>
      <Text style={styles.loginText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continuer: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

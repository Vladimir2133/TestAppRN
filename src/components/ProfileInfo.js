import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export const ProfileInfo = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.photoBox}>
        <Image source={{ uri: props.avatar }} style={styles.photo} />
      </View>

      <View style={styles.info}>
        <Text style={styles.text}>Name: {props.name}</Text>
        <Text style={styles.text}>Email: {props.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: "40%",
    flexDirection: "row",
    backgroundColor: "#575957",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 15,
  },
  photoBox: {
    display: "flex",
    paddingHorizontal: 10,
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  info: {
    display: "flex",
    height: "70%",
    width: "70%",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 18,
    paddingTop: 5,
    color: "#fff",
    opacity: 0.8,
  },
});

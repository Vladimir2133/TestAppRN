import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { MainScreenContainer } from "../container/mainScreenContainer";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <MainScreenContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212120",
  },
});

export default MainScreen;

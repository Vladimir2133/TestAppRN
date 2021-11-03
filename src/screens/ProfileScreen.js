import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { LoginBtn } from "../components/Button";
import { ProfileScreenContainer } from "../container/profileScreenContainer";
import { useAuth } from "../useAuth";

const ProfileScreen = () => {
  const { isAuth, setIsAuth } = useAuth();

  const logOut = () => {
    setIsAuth(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ProfileScreenContainer />
      <LoginBtn onPress={logOut} title="Logout" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#212120",
    alignItems: "center",
  },
});

export default ProfileScreen;

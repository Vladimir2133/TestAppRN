import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ProfileInfo } from "../components/ProfileInfo";

const url = "https://reqres.in/api/users/";

export const ProfileScreenContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAvatar();
  }, []);

  const getAvatar = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setData(json.data);
  };

  return (
    <View>
      {data.map((item) => {
        if (item.id == "4") {
          return (
            <ProfileInfo
              key={item.id}
              name={item.first_name}
              email={item.email}
              avatar={item.avatar}
            />
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#212120",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});

import React from "react";
//navigation
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
//screens
//screens
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
//icon
import { Ionicons } from "@expo/vector-icons";
//hook
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Feeds"
      screenOptions={{
        tabBarActiveTintColor: "#fb5b5a",
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          backgroundColor: "#212120",
          color: "wight",
          marginTop: 30,
        },
        tabBarIndicatorStyle: { backgroundColor: "#fb5b5a", opacity: 0.7 },
        style: { backgroundColor: "white", marginTop: insets.top },
      }}
    >
      <Tab.Screen
        name="Feeds"
        component={MainScreen}
        tabBarLabel="Feeds"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Ionicons name="home" color="#fb5b5a" size={20} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        tabBarLabel="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Ionicons name="person" color="#fb5b5a" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TopBarNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

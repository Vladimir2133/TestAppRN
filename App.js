import React, { useState } from "react";
//screens
import { LoginScreen } from "./src/screens/LoginScreen";
//navigation
import TopBarNavigator from "./src/navigation/AppNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContext } from "./src/context/authContext";

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <SafeAreaProvider>
        {isAuth ? <LoginScreen /> : <TopBarNavigator />}
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
}

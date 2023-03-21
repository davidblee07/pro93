import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home.js";
import Login from "../screens/Login.js";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

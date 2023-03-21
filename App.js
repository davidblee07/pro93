import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator.js";
import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}



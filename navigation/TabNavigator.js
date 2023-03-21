import React, { Component } from "react";
import { Text, View } from "react-native";
import Home from "../screens/Home.js";
import Profile from "../screens/Profile.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();


export default class tabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
      barStyle={
        styles.bottomTabStyle
      }
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          },
        })}
        activeColor={"#7eb837"}
        inactiveColor={"gray"}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: RFValue(30),
      borderTopRightRadius: RFValue(30),
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });
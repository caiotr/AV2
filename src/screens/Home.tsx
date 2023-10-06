import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import React from "react";

export function ScreenA() {
  const navigation = useNavigation();


}
  function openScreenB() {
    navigation.navigate('ScreenB'); 

  function openScreenC() {
    navigation.navigate('ScreenC'); 
  }
  }

  
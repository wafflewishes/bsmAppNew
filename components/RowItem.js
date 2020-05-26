import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Layout from '../constants/Layout';

const styles = StyleSheet.create({
  row: {
    width: Layout.window.width,
    paddingVertical: 20,
    backgroundColor: "#36B1F0",
    marginBottom: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600"
  }
});

export const RowItem = ({ onPress = () => { }, name, color }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={[styles.row, { backgroundColor: color }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);

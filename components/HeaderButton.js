import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function HeaderButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Untitled")}
        style={styles.button12}
      >
        <Text style={styles.calendar}>Calendar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button12: {
    width: 188,
    height: 40,
    backgroundColor: "rgba(150,208,255,1)"
  },
  calendar: {
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 13,
    marginLeft: 66
  }
});

export default HeaderButton;

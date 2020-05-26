import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function HeaderTabs(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.topTab}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.square2}>
            <Text style={styles.feed}>Feed</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <View style={styles.square3}>
            <Text style={styles.calendar}>Calendar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(124,185,231,1)",
    justifyContent: "center"
  },
  topTab: {
    width: 375,
    height: 60,
    flexDirection: "row",
    alignSelf: "center"
  },
  button: {
    width: 188,
    height: 60
  },
  square2: {
    width: 188,
    height: 60,
    backgroundColor: "rgba(124,185,231,1)"
  },
  feed: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "titleFont-regular",
    marginTop: 23,
    marginLeft: 78
  },
  button2: {
    width: 188,
    height: 60
  },
  square3: {
    width: 188,
    height: 60,
    backgroundColor: "rgba(124,185,231,1)"
  },
  calendar: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "titleFont-regular",
    marginTop: 23,
    marginLeft: 63
  }
});

export default HeaderTabs;

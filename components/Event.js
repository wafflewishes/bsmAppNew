import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Event(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Maha Shivratri - 2020 Highlights</Text>
          <Text style={styles.date}>Feb 06, 2020</Text>
        </View>
        <Image
          source={require("../assets/images/Shivratri_2018_10.jpg")}
          resizeMode="cover"
          style={styles.picture}
        ></Image>
        <Text style={styles.description}>
          Revist highlights from this year&#39;s Maha Shivraatri celebrations
        </Text>
      </View>
      <Text style={styles.label}>Past Event</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  content: {
    width: 345,
    height: 263,
    alignItems: "center",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    marginTop: 10
  },
  header: {
    width: 345,
    height: 48,
    alignItems: "center",
    justifyContent: "space-around"
  },
  title: {
    width: 345,
    height: 20,
    color: "rgba(0,95,168,1)",
    fontSize: 18,
    fontFamily: "titleFont",
    textAlign: "center"
  },
  date: {
    color: "rgba(43,43,43,1)",
    fontSize: 12,
    fontFamily: "titleFont-regular"
  },
  picture: {
    width: 345,
    height: 175
  },
  description: {
    width: 345,
    height: 32,
    color: "rgba(12,12,12,1)",
    margin: 0,
    paddingTop: 3,
    fontSize: 10,
    fontFamily: "titleFont-regular",
    textAlign: "center"
  },
  label: {
    color: "rgba(12,12,12,1)",
    fontSize: 8,
    fontFamily: "titleFont-regular",
    textDecorationLine: "underline",
    marginLeft: 293
  }
});

export default Event;

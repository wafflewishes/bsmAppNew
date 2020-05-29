import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import moment from 'moment';

var today = moment().format();

function Event(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{props.event.title}</Text>
          <Text style={styles.date}>{props.event.commonStartDate}</Text>
        </View>
        <Image
          source={props.event.media}
          resizeMode="cover"
          style={styles.picture}
        ></Image>
        <Text style={styles.description}>
          {props.event.description}
        </Text>
      </View>
      <Text style={styles.label}>{props.event.type}</Text>
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
    flexGrow:1,
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
    height: 30,
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
    width: 340,
    height: 32,
    color: "rgba(12,12,12,1)",
    margin: 0,
    paddingTop: 3,
    flex: 1,
    flexShrink:1,
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

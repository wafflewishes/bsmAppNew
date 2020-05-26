import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Event from "./Event";
import Question from "./Question";
import Quote from "./Quote";

function FeedContent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Event style={styles.content}></Event>
      <Question style={styles.content}></Question>
      <Quote style={styles.content}></Quote>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12
  },
  content: {
    width: 345,
    height: 290,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.16,
    margin: 6
  },

});

export default FeedContent;

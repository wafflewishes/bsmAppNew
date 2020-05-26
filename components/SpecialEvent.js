import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function SpecialEvent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.hanumanJayanti}>Hanuman Jayanti</Text>
        </View>
        <Image
          source={require("../assets/images/hanuman1.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(230, 230, 230,1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  rect: {
    top: 0,
    left: -20,
    width: 345,
    height: 40,
    backgroundColor: "rgba(208,2,27,1)",
    position: "absolute"
  },
  hanumanJayanti: {
    color: "rgba(255,255,255,1)",
    fontFamily: "kadwa-regular",
    marginTop: 13,
    marginLeft: 93
  },
  image: {
    top: 20,
    left: 13,
    width: 200,
    height: 200,
    position: "absolute"
  },
  rectStack: {
    width: 345,
    height: 220,
    marginLeft: 20
  }
});

export default SpecialEvent;

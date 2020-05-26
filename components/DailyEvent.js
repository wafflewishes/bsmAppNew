import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function DailyEvent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ImageBackground
        source={require("../assets/images/hanuman.jpg")}
        resizeMode="cover"
        style={styles.image1}
        imageStyle={styles.image1_imageStyle}
      >
        <View style={styles.group2}>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("../assets/images/Gradient_wJfPlPb.png")}
          >
            <View style={styles.group3}>
              <Text style={styles.hanumanPuja}>Hanuman Puja</Text>
              <Text style={styles.loremIpsum}>6:30 - 9:00 PM</Text>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  image1: {
    borderRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    overflow: "hidden"
  },
  image1_imageStyle: {},
  group2: {
    height: 26,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 134
  },
  rect: {
    width: 346,
    height: 26,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginLeft: 10,
    overflow: "hidden"
  },
  rect_imageStyle: {},
  group3: {
    width: 346,
    height: 18,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 4,
    marginLeft: -10
  },
  hanumanPuja: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize: 14,
    fontFamily: "kadwa-regular"
  },
  loremIpsum: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize: 14,
    fontFamily: "kadwa-regular"
  }
});

export default DailyEvent;

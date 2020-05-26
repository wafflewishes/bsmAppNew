import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";

function Special(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group3}>
        <View style={styles.rect1Stack}>
          <ImageBackground
            style={styles.rect1}
            imageStyle={styles.rect1_imageStyle}
            source={require("../assets/images/Gradient_qRH12TK.png")}
          >
            <Text style={styles.hanumanJayanti}>Hanuman Jayanti</Text>
            <Image
              source={require("../assets/images/hanuman2.jpg")}
              resizeMode="cover"
              style={styles.image}
            ></Image>
            <View style={styles.group2}>
              <View style={styles.rect2}>
                <View style={styles.group4}>
                  <Text style={styles.march172020}>March 17, 2020</Text>
                  <Text style={styles.loremIpsum2}>6:00 - 9:00 pm</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <Text style={styles.loremIpsum3}>
            Desc Desc Desc Desc DescDesc Desc Desc Desc DescDesc Desc Desc Desc
            DescDesc Desc Desc Desc DescDesc Desc Desc Desc DescDesc Desc Desc
            Desc DescDesc Desc Desc Desc DescDesc Desc Desc Desc DescDesc Desc
            Desc Desc DescDesc Desc Desc Desc DescDesc Desc Desc Desc DescDesc
            Desc Desc Desc Desc
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  group3: {
    width: 345,
    height: 387
  },
  rect1: {
    top: 0,
    left: 0,
    width: 345,
    height: 370,
    position: "absolute",
    borderRadius: 5,
    overflow: "hidden"
  },
  rect1_imageStyle: {},
  hanumanJayanti: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "kadwa-regular",
    marginTop: 10,
    marginLeft: 96
  },
  image: {
    width: 345,
    height: 193,
    marginTop: 11
  },
  group2: {
    width: 345,
    height: 41
  },
  rect2: {
    width: 345,
    height: 41,
    backgroundColor: "rgba(113,0,13,1)"
  },
  group4: {
    width: 345,
    height: 14,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 13
  },
  march172020: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "kadwa-regular"
  },
  loremIpsum2: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "kadwa-regular"
  },
  loremIpsum3: {
    top: 283,
    left: 11,
    width: 323,
    height: 89,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "kadwa-regular",
    textAlign: "center"
  },
  rect1Stack: {
    width: 345,
    height: 372
  }
});

export default Special;

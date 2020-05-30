import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Regular(props) {

  const navigation = useNavigation();  
  return (
    <View style={[styles.container, props.style]
    }>
      <TouchableOpacity onPress = {() =>
        navigation.navigate("EventPage", props)
      }>

      <View style={styles.boxStack}>
        <View style={styles.box}>
          <Image
            source={require("../assets/images/hanuman6.jpg")}
            resizeMode="cover"
            style={styles.picture}
          ></Image>
        </View>
        <View style={styles.text}>
          <View style={styles.header}>
            <Text style={styles.title}>{props.event.title}</Text>
            <Text style={styles.time}>{props.event.commonStartDate}</Text>
          </View>
          <View style={styles.divider}></View>
          <Text style={styles.description}>
            {props.event.description}
          </Text>
        </View>
      </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(241,241,241,1)",
    elevation: 3,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.14,
    shadowRadius: 1,
    
  },
  box: {
    width: 345,
    height: 103,
    backgroundColor: "rgba(255,255,255,1)",
    position: "relative",
    top: 0
  },
  picture: {
    width: 151,
    height: 103
  },
  text: {
    top: 0,
    left: 151,
    width: 195,
    height: 103,
    position: "absolute",
    alignItems: "stretch",
    flexWrap: "nowrap",
    justifyContent: "space-between"
  },
  header: {
    width: 120,
    height: 27,
    justifyContent: "space-around",
    margin: 0,
    marginTop: 8,
    marginBottom: 6,
    marginLeft: 8
  },
  title: {
    width: 170,
    height: 16,
    color: "rgba(0,95,168,1)",
    opacity: 0.9,
    fontSize: 16,
    fontFamily: "textFont-regular"
  },
  time: {
    width: 97,
    height: 14,
    color: "rgba(0,0,0,1)",
    opacity: 0.9,
    fontSize: 14,
    fontFamily: "textFont-regular"
  },
  divider: {
    width: 25,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.41)",
    margin: 0,
    marginTop: 8,
    marginBottom: 6,
    marginLeft: 8
  },
  description: {
    width: 171,
    height: 37,
    color: "rgba(0,0,0,1)",
    opacity: 0.9,
    justifyContent: "center",
    margin: 0,
    marginTop: 8,
    marginBottom: 6,
    marginLeft: 8,
    fontSize: 9,
    fontFamily: "textFont-regular"
  },
  boxStack: {
    width: "100%",
    height: 103
    
  }
});

export default Regular;

import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


function HEvent(props) {
  const navigation = useNavigation();  

  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress = {() => {
        navigation.navigate("EventPage", props)
      }}>
      <View style={styles.upcomingBox}>
        <Image
          source={props.event.thumbnail}
          resizeMode="cover"
          style={styles.picture}
        />

        <View style={styles.dateBox}>
          <Text style={styles.upcomingDate}>
          {props.event.commonStartDate}
          </Text>
        </View>

        <Text style={styles.upcomingTitle}>
           {props.event.title}
        </Text>

        <Text style={styles.upcomingTimes}>{props.event.type}</Text>
              
        <Text style={styles.upcomingDescription}>
            {props.event.description}
          </Text>      
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  upcomingBox: {
    width: 298,
    height: 383,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.16,
  },

  picture: {
    width: 298,
    height: 151,
  },
  dateContainer: {
    width: 298,
    height: 23,
  },
  dateBox: {
    width: 298,
    height: 23,
    backgroundColor: "rgba(0,95,168,1)",
    marginBottom: 12
  },
  upcomingDate: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: "titleFont-regular",
    textAlign: "center",
  },
  upcomingContent: {
    width: 298,
    height: 179,
    justifyContent: "flex-start"
  },
  upcomingTitle: {
    width: 200,
    height: 50,
    color: "rgba(0,95,168,1)",
    marginRight: 12,
    marginLeft: 12,
    fontSize: 18,
    fontFamily: "titleFont-regular",
    lineHeight: 18,
    paddingTop: 10
  },
  upcomingTimes: {
    width: 280,
    height: 20,
    color: "rgba(22,22,22,1)",
    marginRight: 12,
    marginLeft: 12,
    fontSize: 14,
    paddingBottom: 5,
    fontFamily: "textFont-regular"
  },
  upcomingDescription: {
    width: 280,
    height: 108,
    color: "rgba(22,22,22,1)",
    marginTop: 8,
    marginRight: 12,
    marginLeft: 12,
    fontSize: 10,
    fontFamily: "titleFont-regular",
    lineHeight: 16
  }
});

export default HEvent;

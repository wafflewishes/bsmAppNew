import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import Col from '../constants/Colors';


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
          <Text style={styles.upcomingDate} numberOfLines={2}>
          {props.event.period}
          </Text>
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.upcomingTitle} numberOfLines={2}>
            {props.event.title}
          </Text>
        </View>
       
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
    flex:10
  },

  dateBox: {
    flex: 2,
    justifyContent:'center',
    backgroundColor: Col.lightGold,
  },
  upcomingDate: {
    color: 'white',
    fontSize: 17,
    fontFamily: "textFont-bold",
    textAlign: "center",
  },

  titleBox:{
    flex: 3,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: 8

  },

  upcomingTitle: {
    
    color: "rgba(0,95,168,1)",
    fontSize: 18,
    fontFamily: "titleFont-regular",
    textAlign:'center'
  },


});

export default HEvent;

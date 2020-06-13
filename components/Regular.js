import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

function Regular(props) {

  const navigation = useNavigation();  
  return (
    <View style={[styles.container, props.style]
    }>
      <TouchableOpacity onPress = {() =>
        navigation.navigate("EventPage", props)
      }
      style={{flex:1}}

      >

      <View style={styles.boxStack}>

        <View style={styles.picture}>
          <Image
            source={props.event.thumbnail}
            resizeMode="cover"
            style={{flex:1}}
          ></Image>
        </View>

        <View style={styles.textBox}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>{props.event.title}</Text>
          </View>
          <View style={[styles.titleBox, {flex: 3}]}>
            <Text style={styles.time}>{moment(props.event.startTime, "h:mm").format('h:mm a')} </Text>
          </View>
          <View style={[styles.titleBox, {flex: 7}]}>
            <Text style={styles.description} numberOfLines={2}>{props.event.description}</Text>
          </View>

        </View>

      </View>
      
      
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(241,241,241,1)",
    
  },

  picture: {
   flex: 6
  },
  textBox: {
    flex: 8,
    alignItems: "stretch",
    flexWrap: "nowrap",
    justifyContent: "center",
    paddingHorizontal: 8,
    
  },

  titleBox:{
    flex:4,
    justifyContent:'center',
    alignContent:'center'
  },

  title: {
    color: "rgba(0,95,168,1)",
    fontSize: 20,
    fontFamily: "titleFont-regular",
    justifyContent:'center',


  },
  time: {
    color: "rgba(0,0,0,1)",
    opacity: 0.9,
    fontSize: 16,
    fontFamily: "textFont-semiBold",

  },
  description: {
    color: "rgba(0,0,0,1)",
    opacity: 0.9,
    fontSize: 13,
    fontFamily: "textFont-regular",

  },
  divider: {
    flex:1,
    backgroundColor: "rgba(0,0,0,0.41)",
  },

  boxStack: {
    flex: 1,
    flexDirection:'row'
  }
});

export default Regular;

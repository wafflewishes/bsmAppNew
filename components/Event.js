import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import moment from 'moment';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { useNavigation } from '@react-navigation/native';

var today = moment().format();

function Event(props) {
  const navigation = useNavigation();  

  if(props.event.status == 'week'){
    return (
      <View style={{
        shadowOffset: {
          height: 5,
          width: 5
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.16,
    
        flex: 3,
        margin: 6,
        alignItems: 'center',
      }}>
        <View style={{
          width: Layout.content.width,
          height: Layout.content.height-150,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
          <View style={{ flex: 4, backgroundColor: 'white', alignItems:"center", justifyContent: "center"}}>
            <Text style = {[styles.title, ]} numberOfLines={1}>{props.event.title}</Text>
            <Text style = {[styles.date, ]}>{props.event.commonStartDate}</Text>
          </View>
          <View style={{ flex: 11, alignItems: "center"}}>
            <Image 
            style={{flex:1, width: '100%', backgroundColor:'#e6e6e6'}}
            source = {props.event.thumbnail}
            resizeMode="cover"
            />
          </View>
        </View>
        </View>
        );

  }


  else if(props.event.description.length <= 0){
    return (
      <View style={{
        shadowOffset: {
          height: 5,
          width: 5
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.16,
    
        flex: 3,
        margin: 6,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress = {() =>
          navigation.navigate("EventPage", props)
        }
  
      >
  
        <View style={{
          width: Layout.content.width,
          height: Layout.content.height,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
          <View style={{ flex: 6, backgroundColor: 'white', alignItems:"center", justifyContent: "center"}}>
            <Text style = {styles.title} numberOfLines={1}>{props.event.title}</Text>
            <Text style = {styles.date}>{props.event.commonStartDate}</Text>
          </View>
          <View style={{ flex: 25, backgroundColor: 'skyblue', alignItems: "center"}}>
            <Image 
            style={{flex:1, width: '100%'}}
            source = {props.event.thumbnail}
            resizeMode="cover"
            />
          </View>
        </View>
        </TouchableOpacity>
        </View>
        );
  }

  
else
  return (
    <View style={{
      shadowOffset: {
        height: 5,
        width: 5
      },
      shadowColor: "rgba(0,0,0,1)",
      shadowOpacity: 0.16,
  
      flex: 3,
      margin: 6,
      alignItems: 'center',
    }}>
    <TouchableOpacity
      onPress = {() =>
        navigation.navigate("EventPage", props)
      }

    >

      <View style={{
        width: Layout.content.width,
        height: Layout.content.height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{ flex: 6, backgroundColor: 'white', alignItems:"center", justifyContent: "center"}}>
          <Text style = {styles.title} numberOfLines={1}>{props.event.title}</Text>
          <Text style = {styles.date}>{props.event.commonStartDate}</Text>
        </View>
        <View style={{ flex: 25, backgroundColor: 'skyblue', alignItems: "center"}}>
          <Image 
          style={{flex:1, width: '100%'}}
          source = {props.event.thumbnail}
          resizeMode="cover"
          />
        </View>
        <View style={{ flex: 6, backgroundColor: 'white', alignItems: "center", justifyContent: 'center'}}>
          <Text style = {styles.desc} numberOfLines={2}>{props.event.description}</Text>
        </View>
      </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 20,
    fontWeight:"bold",
    fontFamily: "titleFont",
    color: Colors.titleColour,
    marginHorizontal: 6
  },
  date:{
    fontSize: 16,
    fontFamily: "textFont-semiBold",
  },
  desc: {
    fontFamily: "textFont-regular",
    fontSize: 14,
    marginHorizontal: 10,
    marginVertical: 6
  }
});

export default Event;

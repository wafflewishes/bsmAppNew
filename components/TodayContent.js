import React, { Component, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Regular from "./Regular";
import moment from 'moment';
import {EventList} from './firebaseAuth';

const TODAY = moment().format();


var day = moment().format('MMMM Do[,] YYYY');
var eventData = [];
var count;

 class TodayContent extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {loaded: false};
    this.loadToday = this.loadToday.bind(this);
    this.loadToday();
  }

  loadToday(){
    if(!this.state.loaded){
      EventList.forEach(element => 
        {if(element.status == 'today'){
        eventData.push(element)}},
        );
        this.setState({loaded: true});
    }
    
    return;
  }

  render(){
      return (
          <View style={styles.todayContainer}>
            <View style={styles.todayWords}>
              <Text style={styles.todayText}>Today's Events</Text>
              <Text style={styles.todayDate}>{day}</Text>
              <View style={styles.todayMiddleBar}></View>
            </View>
            <FlatList
            data = {eventData}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Regular
                event = {item}
                style = {styles.today2}
              />
            )}

            />
          </View>
      ) ;
    }  
}

const styles = StyleSheet.create({
  todayContainer: {
    width: "100%",
    height: 358,
    justifyContent: "center",
    backgroundColor: "rgba(124,185,231,1)"
  },
  listStyle:{
    flex:1,
    justifyContent: 'center'
  },
  todayWords: {
    width: "100%",
    height: 78,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 21,
  },
  todayText: {
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 20,
    fontFamily: "titleFont",
    textAlign: "center"
  },
  todayDate: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize: 30,
    fontFamily: "titleFont",
    textAlign: "center"
  },
  todayMiddleBar: {
    width: 211,
    height: 7,
    marginBottom: 12,
    marginTop: 6,
    backgroundColor: "rgba(255,255,255,1)"
  },
  today2: {
    width: 345,
    height: 103,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.16,
    marginTop: 16,
    marginLeft: 15,
    
  },
  today1: {
    width: 345,
    height: 103,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.16,
    marginTop: 14,
    marginLeft: 15
  }
});

export default TodayContent;

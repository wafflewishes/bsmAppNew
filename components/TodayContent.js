import React, { Component, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Regular from "./Regular";
import moment from 'moment';
import {WeeklyList} from './firebaseAuth';
import Colors from "../constants/Colors";

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
      WeeklyList.forEach(element => 
        {if(element.status == 'today'){
        eventData.push(element)}},
        );
        this.setState({loaded: true});
    }
    
    return;
  }

  render(){
    if(eventData.length > 0)
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
            contentContainerStyle={{alignItems:'center', justifyContent:'center'}}
            renderItem={({ item }) => (
              <Regular
                event = {item}
                style = {styles.today2}
              />
            )}

            />
          </View>
      ) ;
    else return (
      <View style={styles.todayContainer}>
        <View style={[styles.todayWords, {flex: 1}]}>
          <Text style={styles.todayText}>Today's Events</Text>
          <Text style={styles.todayDate}>{day}</Text>
          <View style={styles.todayMiddleBar}></View>
        </View>
        <View style={{flex: 2, justifyContent:"center", alignContent:'center', paddingHorizontal: 50}}>
          <Text style = {styles.noEvents}>There are no Events scheduled for Today!</Text>
        </View>
      </View>
  ) ;
    }  
}

const styles = StyleSheet.create({
  todayContainer: {
    width: "100%",
    height: 358,
    justifyContent: "center",
    backgroundColor: "rgba(124,185,231,1)",
    borderBottomWidth:6,
    borderBottomColor: 'rgba(124,185,231,1)'
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
    fontSize: 21,
    fontFamily: "titleFont",
    textAlign: "center"
  },
  todayDate: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize: 35,
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
    width: 350,
    height: 100,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.16,
    marginTop: 16,
    
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
  },
  noEvents:{
    fontFamily:'textFont-bold',
    fontSize: 21,
    color: Colors.lightBlue,
    textAlign:'center',
  }
});

export default TodayContent;

import React, { Component } from "react";
import { StyleSheet, View, ScrollView, FlatList, Text } from "react-native";

import TodayContent from "../components/TodayContent";
import { createStackNavigator } from '@react-navigation/stack';
import FeedContent from "../components/FeedContent";
import SideSwiper from "../components/SideSwiper";

import Quiz from './Quiz';

import EventPage from './EventPage';
const styles = StyleSheet.create({

    header2: {
      width: 375,
      height: 95
    },
    headerTabs1: {
      width: 375,
      height: 60
    },
    feedContainer: {
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(230, 230, 230,1)"
    },
    feedContainer_contentContainerStyle: {
      width: "100%",
      flexDirection: "column"
    },
    todayContent2: {
      height: 358
    },
    upcomingSideSwipe: {
      width: "100%",
      height: 439,
      backgroundColor: "rgba(230, 230, 230,1)",
      borderColor: "rgba(124,185,231,1)",
      borderWidth: 0,
      borderTopWidth: 6,
      borderBottomWidth: 6
    },
    upcomingSideSwipe_contentContainerStyle: {
      height: 418,
      flexDirection: "column",
      justifyContent: "center"
    },
    uEventList: {
      width: "100%",
      height: 388,
      flexDirection: "row",
      marginLeft: 11,
      marginRight: 11
    },
    uEvent1: {
      width: 298,
      height: 383,
      marginRight: 11
    },
  
  });

  export class LiveFeed extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.feedContainer}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.feedContainer_contentContainerStyle}
        >
          <TodayContent/>
          <SideSwiper/>
          <FeedContent/>
        </ScrollView>
      </View>

        );
    }
  }

const FeedStack = createStackNavigator();

export default function FeedStackScreen() {
  return(
    <FeedStack.Navigator headerMode = "none" initialRouteName = "Home">
      <FeedStack.Screen name="Home" component={LiveFeed}/>
      <FeedStack.Screen name="EventPage" component={EventPage}/>
      <FeedStack.Screen name="Quiz" component={Quiz} />
    </FeedStack.Navigator>
  );
}
import React, { Component } from "react";
import { StyleSheet, View, ScrollView, FlatList, Text } from "react-native";

import Event from "../components/Event";
import Quote from "../components/Quote";
import QuizRowItem from '../components/QuizRowItem';

import TodayContent from "../components/TodayContent";
import { createStackNavigator } from '@react-navigation/stack';
import FeedContent from "../components/FeedContent";
import SideSwiper from "../components/SideSwiper";

import {EventList} from '../components/firebaseAuth';

import vishnuLakshmiQuestions from "../assets/data/vishnuLakshmi";
import ramayanQuestions from "../assets/data/ramayan";
import hanumanQuestions from "../assets/data/hanuman";
import shivaQuestions from "../assets/data/shiva";
import generalQuestions from "../assets/data/general";

import Quiz from './Quiz';

import EventPage from './EventPage';
import HEvent from "../components/HEvent";

var counter = 0;
const MAXSTRINGLENGTH = 3;
var feed = [];






const styles = StyleSheet.create({

  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12
  },
  content: {
    width: 345,
    height: 290,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.16,
    margin: 6
  },

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
        this.loadFeed = this.loadFeed.bind(this);
        this.loadFeed();
    }

    
    loadFeed = () => {
      if(counter + MAXSTRINGLENGTH <= EventList.length){
        for (let index = 0; index < MAXSTRINGLENGTH; index++) {
          feed.push({type: "Event", item: EventList[counter]})
          counter++;
        }
        feed.push({type: "Trivia"})
      }
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
          <FlatList
              data={feed}
              contentContainerStyle={styles.container}
              renderItem={({item}) => {
                if(item.type == "Event") return <Event style={styles.content} event={item.item}/>
                else if(item.type == "Trivia") return <QuizRowItem/>
              }}
              onEndReached={this.loadFeed}
          />

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
import React, { Component } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, FlatList, Text } from "react-native";

import Event from "../components/Event";
import Quote from "../components/Quote";
import QuizRowItem from '../components/QuizRowItem';

import TodayContent from "../components/TodayContent";
import { createStackNavigator } from '@react-navigation/stack';
import FeedContent from "../components/FeedContent";
import SideSwiper from "../components/SideSwiper";

import {EventList, QuoteList} from '../components/firebaseAuth';

import vishnuLakshmiQuestions from "../assets/data/vishnuLakshmi";
import ramayanQuestions from "../assets/data/ramayan";
import hanumanQuestions from "../assets/data/hanuman";
import shivaQuestions from "../assets/data/shiva";
import generalQuestions from "../assets/data/general";

import Colors from '../constants/Colors';

import Quiz from './Quiz';

import EventPage from './EventPage';
import HEvent from "../components/HEvent";

var counter = 0;
var quoteCounter = 0;
const MAXSTRINGLENGTH = 3;
var feed = [];
var key = 0;
const styles = StyleSheet.create({

  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12
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
      backgroundColor: Colors.lightBlue
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

          if(EventList[counter].status != 'today'){
            feed.push({type: "Event", item: EventList[counter], key:JSON.stringify(key)});
          }
          key++;
          counter++;
          
        }
        feed.push({type: "Trivia", key: JSON.stringify(key)});
        key++;
        while(QuoteList[quoteCounter].quote.length < 20){
          quoteCounter++;
        }
        feed.push({type: 'Quote', quote: QuoteList[quoteCounter], key: JSON.stringify(key)});
        quoteCounter++;
        key++;
      }
    } 
    render(){
        return(
        <View style={styles.feedContainer}>
          <ScrollView
            horizontal={false}
            showsVerticalScrollIndicator={false}
          >
            <TodayContent/>
            <SideSwiper/>
            <FlatList
                data={feed}
                renderItem={({item}) => {
                  if(item.type == "Event") return <Event event={item.item}/>
                  else if(item.type == "Trivia") return <QuizRowItem/>
                  else if(item.type == 'Quote') return <Quote set={item.quote}/>
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
    <FeedStack.Navigator  initialRouteName = "Home" screenOptions={{headerStyle: {backgroundColor: Colors.header, shadowColor: 'transparent'}, headerTintColor: "white", headerTitleStyle: {
      fontFamily: 'titleFont-regular',
      fontSize: 20
    },}}>
      <FeedStack.Screen name="Home" component={LiveFeed} options={{title: "Bhavani Shankar Mandir"}}/>
      <FeedStack.Screen name="EventPage" component={EventPage}/>
      <FeedStack.Screen name="Quiz" component={Quiz} options={({ route }) => ({ title: route.params.title })}/>
    </FeedStack.Navigator>
  );
}
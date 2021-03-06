import React, { Component } from "react";
import { StyleSheet, View, ScrollView, FlatList, Text, SafeAreaView } from "react-native";
import {EventList, loadMoreEvents} from "./firebaseAuth";
import moment from 'moment';
import Colors from '../constants/Colors';
import HEvent from "./HEvent";
import { render } from "react-dom";

const TODAY = moment().format();
var dates = [];
var counter=0;


export default class SideSwiper extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { loaded: false, dates:EventList};

      
  }

    render(){

        return(
        <View style={styles.upcomingSideSwipe}>
            <Text style = {styles.todayText}>Upcoming Events</Text>
            <SafeAreaView
                    horizontal={true}
                    contentContainerStyle={
                        styles.upcomingSideSwipe_contentContainerStyle
                    }
                    >
                    <View style={styles.uEventList}>
                        <FlatList
                            data = {this.state.dates}
                            onEndReached={()=>{loadMoreEvents()}}
                            onEndReachedThreshold={0.1}
                            keyExtractor = {(item, index) => item.key}
                            showsHorizontalScrollIndicator={false}
                            horizontal = {true}
                            renderItem={({ item }) => (
                                <HEvent
                                    event = {item}
                                    style = {styles.uEvent1}
                                />
                            )}
                    
                            />
                    </View>
            </SafeAreaView>
          </View>
        );
    }
}

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
        height: 470,
        backgroundColor: "#f7f7f7",
        borderColor: "rgba(124,185,231,1)",
        borderBottomColor: Colors.lightBlue,
        borderWidth: 0,
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
      },
      uEvent1: {
        width: 298,
        height: 383,
        marginHorizontal: 5.5
      },
      todayText: {
        color: Colors.titleColour,
        alignSelf: "stretch",
        fontSize: 21,
        margin: 20,
        fontFamily: "titleFont",
        textAlign: "center",
      }
  });
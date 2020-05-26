import React, { Component } from "react";
import { StyleSheet, View, ScrollView, FlatList, Text } from "react-native";
import {EventList} from "./firebaseAuth";

import HEvent from "./HEvent";


export default class SideSwiper extends React.Component {
    render(){

        return(
        <View style={styles.upcomingSideSwipe}>
            <Text style = {styles.todayText}>Upcoming Events</Text>
            <View>
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={
                        styles.upcomingSideSwipe_contentContainerStyle
                    }
                    >
                    <View style={styles.uEventList}>
                        <FlatList
                            data = {EventList}
                            extraData = {this.state}
                            horizontal = {true}
                            renderItem={({ item }) => (
                                <HEvent
                                    event = {item}
                                    style = {styles.uEvent1}
                                />
                            )}
                    
                            />
                    </View>
                </ScrollView>
            </View>
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
      todayText: {
        color: "rgba(255,0,0,3)",
        alignSelf: "stretch",
        fontSize: 20,
        fontFamily: "kadwa-700",
        textAlign: "center"
      }
  });
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import ParallaxScrollView  from 'react-native-parallax-scroll-view';

import * as color from "../constants/Colors";

export default class EventPage extends React.Component {

    state = {
       event: this.props.route.params.event,
    }

    render() {
        return(
            <ParallaxScrollView
            backgroundColor="blue"
            contentBackgroundColor="white"
            parallaxHeaderHeight={250}
            renderBackground = {() => (<Image
                source={require("../assets/images/krishna.jpg")}
                resizeMode="cover"
                style={styles.picture}
              ></Image>)}>
             <View style = {styles.container}>
                <Text style = {styles.title}>{this.state.event.title}</Text>
                <Text style = {styles.date}>{this.state.event.commonStartDate}</Text>
                <View style = {styles.descriptionBox}>
                    <Text style = {styles.description}>{this.state.event.description}</Text>
                </View>
            </View>
          </ParallaxScrollView> 

        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    picture: {
      width: "100%",
      height: "100%"
    },
    title: {
        color: color.default.titleColour,
        fontSize: 23,
        lineHeight: 35,
        marginHorizontal: 8,
        fontFamily: "titleFont",
    },
    description: {
        fontSize: 15,
        marginHorizontal: 8,
        fontFamily: "titleFont-regular",
    },
    descriptionBox: {
        marginTop: 13,
        borderTopWidth: 3,
        borderTopEndRadius: 20,
        borderTopColor: "black"
    },
    date: {
        fontSize: 23,
        marginHorizontal: 8,

        fontFamily: "textFont-regular",
    }
  });
  
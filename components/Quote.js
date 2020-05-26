import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Quote(props) {
  return (
    <View style={[styles.container, props.style]}>
     <View>
     <ImageBackground
     source = {require("../assets/images/Quotes.png")}
     resizeMode = "contain"
     style = {styles.background}
     
     />
     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    alignContent: "center",
  },
  background: {
    width: "100%",
    height: "95%",
  },
});

export default Quote;

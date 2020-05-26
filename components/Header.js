import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Header(props) {
  return (
    <View style={[styles.container, props.style]}>
      
      <ImageBackground
        style={styles.headerBox}
        imageStyle={styles.headerBox_imageStyle}
        source={require("../assets/images/Gradient_YXnHQ3e.png")}
      >
                  <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.logo}
          ></Image>     
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
  },
  headerBox: {
    width: 375,
    height: 95,
    flexDirection: "row",
    alignContent: "center"
  },
  headerBox_imageStyle: {},
  settings: {
    color: "rgba(255,255,255,1)",
    fontSize: 34,
    height: 34,
    width: 30,
    marginLeft: 332,
    marginTop: 47
  },
  logo: {
    width: 225,
    height: 80,
    marginTop: 10,
    flex: 1
  },
  settingsFiller: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default Header;

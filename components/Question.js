import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Question(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group6}>
        <Text style={styles.questionText}>
          Which of these does Vishnu not hold?
        </Text>
        <View style={styles.choices}>
          <View style={styles.group4}>
            <TouchableOpacity style={styles.c1}>
              <View style={styles.rect33}>
                <Text style={styles.trident33}>Trident</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.c2}>
              <View style={styles.rect34}>
                <Text style={styles.mace}>Mace</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.group5}>
            <TouchableOpacity style={styles.c3}>
              <View style={styles.rect4}>
                <Text style={styles.conch}>Conch</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.c4}>
              <View style={styles.rect32}>
                <Text style={styles.lotus}>Lotus</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.trivia}>Trivia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  group6: {
    width: 257,
    height: 261,
    justifyContent: "space-between",
    marginTop: 14,
    marginLeft: 44
  },
  questionText: {
    width: 257,
    height: 38,
    color: "rgba(0,95,168,1)",
    fontSize: 18,
    fontFamily: "titleFont-regular",
    textAlign: "center"
  },
  choices: {
    width: 257,
    height: 209,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  group4: {
    width: 95,
    height: 209,
    justifyContent: "space-around"
  },
  c1: {
    width: 95,
    height: 95
  },
  rect33: {
    width: 95,
    height: 95,
    backgroundColor: "rgba(0,95,168,1)",
    elevation: 9,
    borderRadius: 7,
    shadowOffset: {
      height: 3,
      width: 3
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.14,
    shadowRadius: 3
  },
  trident33: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "titleFont-regular",
    marginTop: 38,
    marginLeft: 11
  },
  c2: {
    width: 95,
    height: 95
  },
  rect34: {
    width: 95,
    height: 95,
    backgroundColor: "rgba(0,95,168,1)",
    elevation: 9,
    borderRadius: 7,
    shadowOffset: {
      height: 3,
      width: 3
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.14,
    shadowRadius: 3
  },
  mace: {
    width: 95,
    height: 20,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "titleFont-regular",
    textAlign: "center",
    marginTop: 38
  },
  group5: {
    width: 95,
    height: 209,
    justifyContent: "space-around"
  },
  c3: {
    width: 95,
    height: 95
  },
  rect4: {
    width: 95,
    height: 95,
    backgroundColor: "rgba(0,95,168,1)",
    elevation: 9,
    borderRadius: 7,
    shadowOffset: {
      height: 3,
      width: 3
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.14,
    shadowRadius: 3
  },
  conch: {
    width: 95,
    height: 20,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "titleFont-regular",
    textAlign: "center",
    marginTop: 38
  },
  c4: {
    width: 95,
    height: 95
  },
  rect32: {
    width: 95,
    height: 95,
    backgroundColor: "rgba(0,95,168,1)",
    elevation: 9,
    borderRadius: 7,
    shadowOffset: {
      height: 3,
      width: 3
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.14,
    shadowRadius: 3
  },
  lotus: {
    width: 95,
    height: 20,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "titleFont-regular",
    textAlign: "center",
    marginTop: 38
  },
  trivia: {
    color: "rgba(0,0,0,1)",
    fontSize: 8,
    fontFamily: "titleFont-regular",
    textDecorationLine: "underline",
    marginLeft: 312
  }
});

export default Question;

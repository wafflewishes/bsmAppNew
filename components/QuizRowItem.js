import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {RowItem} from './RowItem';
import { useNavigation } from '@react-navigation/native';


import vishnuLakshmiQuestions from "../assets/data/vishnuLakshmi";
import ramayanQuestions from "../assets/data/ramayan";
import hanumanQuestions from "../assets/data/hanuman";
import shivaQuestions from "../assets/data/shiva";
import generalQuestions from "../assets/data/general";




export default function QuizRowItem(){
    const navigation = useNavigation();
    var loadedQuiz = {};
    var RandomNumber = Math.floor(Math.random() * 5) + 1 ;

    switch(RandomNumber){
        case 1:
            loadedQuiz = {
                title: "Trivia: Vishnu and Lakshmi",
                questions: vishnuLakshmiQuestions,
                color: "#36b1f0"
            }
            break;
        case 2:
            loadedQuiz = {
                title: "Trivia: Ramayana",
                questions: ramayanQuestions,
                color: "#799496"
            }
            break;
        case 3:
            loadedQuiz = {
                title: "Trivia: Hanuman",
                questions: hanumanQuestions,
                color: "#49475B"
            }
            break;
        case 4:
            loadedQuiz = {
                title: "Trivia: Shiva",
                questions: shivaQuestions,
                color: "#49475B"
            }
            break;    

        default:
            loadedQuiz = {
                title: "Trivia: General",
                questions: generalQuestions,
                color: "#799496"
            }
            break;                
    }
    return(
        <RowItem
        name={loadedQuiz.title}
        color={loadedQuiz.color}
        onPress={() => {navigation.navigate("Quiz", loadedQuiz)}
          
        }
      />
    );
}
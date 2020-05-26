import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {Calendar, CalendarList} from "react-native-calendars";
import { createStackNavigator } from '@react-navigation/stack';
import EventPage from './EventPage';

import { useNavigation } from '@react-navigation/native';

import moment from 'moment';
import {EventList} from '../components/firebaseAuth';


const WIDTH = Math.round(Dimensions.get('window').width);
const HEIGHT = Math.round(Dimensions.get('window').height);

const CalendarStack = createStackNavigator();


const TODAY = moment().format();
console.log(TODAY);
var dates = [];

let mark = {};


dates.forEach(day => {
  mark[day] = {selected: true, marked: true};
});

EventList.forEach(element => 
{if(Date.parse(element.startDate) > Date.parse(TODAY)){
dates.push(JSON.stringify(element.startDate).substring(1,11))}},
);

var obj = dates.reduce((c, v) => Object.assign(c, {[v]: {selected: true,marked: true,disabled: false}}), {});

function LinksScreen() {
  const navigation = useNavigation();  

    return (
      <View>
        <CalendarList
            markedDates = {obj}
            onDayPress = {(day) =>  {  
              var output = filterItems(EventList, day.dateString);
              console.log(output);
              navigation.navigate("EventPage", {event: output[0]});
            }}
            calendarWidth={WIDTH}
          current={TODAY}
          />
      </View>
    );
  
}

function loadDate(day){


}

function filterItems(arr, dayString) {
  return arr.filter(function(el) {
      return el.startDate == dayString;
  })
}

export default function CalendarStackScreen(){
  return(
    <CalendarStack.Navigator headerMode = "None">
      <CalendarStack.Screen name="Calendar" component={LinksScreen}/>
      <CalendarStack.Screen name="EventPage" component={EventPage}/>
    </CalendarStack.Navigator>
  );
}

const styles = StyleSheet.create({
});

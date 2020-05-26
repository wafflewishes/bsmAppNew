import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {Calendar, CalendarList} from "react-native-calendars";
import { createStackNavigator } from '@react-navigation/stack';
import EventPage from './EventPage';

import { useNavigation } from '@react-navigation/native';

import moment from 'moment';
import {EventList} from '../components/firebaseAuth';

import Layout from '../constants/Layout';




const CalendarStack = createStackNavigator();


const TODAY = moment().format();
console.log(TODAY);
var dates = [];

let mark = {};
var obj = [];

class LinksScreen extends React.Component {

  constructor(){
    super();
    this.state = {loaded: false}
    dates.forEach(day => {
      mark[day] = {selected: true, marked: true};
    });
    
    EventList.forEach(element => 
    {if(Date.parse(element.startDate) > Date.parse(TODAY)){
    dates.push(JSON.stringify(element.startDate).substring(1,11))}},
    );
    
    obj = dates.reduce((c, v) => Object.assign(c, {[v]: {selected: true,marked: true,disabled: false}}), {});
    this.state = {loaded: true}

  }

 loadDate = day =>{
  const navigation = this.props.navigation;  

    var output = filterItems(EventList, day.dateString);
    console.log(day);
    if(output.length > 0)navigation.navigate("EventPage", {event: output[0]});    
  }

render(){

    return (
      <View>
        <CalendarList
            markedDates = {obj}
            onDayPress = {(day) =>  {  this.loadDate(day)  }}
            calendarWidth={Layout.window.width}
            current={TODAY}
          />
      </View>
    );
  }
}


function filterItems(arr, dayString) {
  return arr.filter(function(el) {
      return el.startDate == dayString && Date.parse(el.startDate) > Date.parse(TODAY);
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

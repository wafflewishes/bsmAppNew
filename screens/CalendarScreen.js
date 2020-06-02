import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import {Calendar, CalendarList} from "react-native-calendars";
import { createStackNavigator } from '@react-navigation/stack';
import EventPage from './EventPage';

import { useNavigation } from '@react-navigation/native';

import moment from 'moment';
import {EventList} from '../components/firebaseAuth';

import Layout from '../constants/Layout';
import { FlatList } from 'react-native-gesture-handler';




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
    
    obj = dates.reduce((c, v) => Object.assign(c, {[v]: {selected: true,marked: true,disabled: false, selectedColor:'#e0a227'}}), {});
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
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: 'black',
              selectedDayTextColor: 'black',
              selectedDotColor: '#e0a227',
              todayTextColor: 'black',
              todayBackgroundColor: '#90c5e6',
              dayTextColor: 'black',
              textDisabledColor: '#d9e1e8',
              monthTextColor: '#90c5e6',
              selectedDayBackgroundColor: '#e0a227',
              selectedDayTextColor: 'black',
              /*textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',*/
              textDayFontWeight: 'bold',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 38,
              textDayHeaderFontSize: 16,
              /*week: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: 'gray',
                margin: 1,
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
              },*/
              
              }}/>
              
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
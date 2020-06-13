import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import {Calendar, CalendarList} from "react-native-calendars";
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import EventPage from './EventPage';
import Web from './Web';


import { useNavigation } from '@react-navigation/native';

import Col from '../constants/Colors';

import moment from 'moment';
import {EventList, loadMoreEvents} from '../components/firebaseAuth';

import Layout from '../constants/Layout';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';




const CalendarStack = createStackNavigator();


const TODAY = moment().format();
console.log(TODAY);
var dates = [];
var weekly = {};
let mark = {};
var obj = [];
var markings = [];

class LinksScreen extends React.Component {

  constructor(){
    super();
    this.state = {tems: {}}
    this.loadCal=this.loadCal.bind(this);
  }

  componentDidMount(){
    this.loadCal();
  }

  loadCal = () => {
    dates.forEach(day => {
      mark[day] = {selected: true, marked: true};
    });
    
    EventList.forEach(element => 
    {if(Date.parse(element.startDate) > Date.parse(TODAY)){
    dates.push(JSON.stringify(element.startDate).substring(1,11))}},
    );
    
    obj = dates.reduce((c, v) => Object.assign(c, {[v]: {selected: true,marked: true,disabled: false, selectedColor:'#e0a227'}}), {});
    this.setState({items:obj});
    this.forceUpdate();

  }

 loadDate = day =>{
  const navigation = this.props.navigation;  

    var output = filterItems(EventList, day.dateString);
    console.log(output[0])

    

    if(output.length > 1){
      navigation.navigate("EventPage", {event: output[0]}); 
      
    }   
    else if (output.length > 0){
      navigation.navigate("EventPage", {event: output[0]}); 
    }
  }

render(){

    return (
      <View style={{alignItems: 'stretch', height: '100%',}}>
          <View style = {{flex:10}}>
          <CalendarList
              markedDates = {this.state.items}
              onDayPress = {(day) =>  {  this.loadDate(day)  }}
              calendarWidth={Layout.window.width}
              onMonthChange={(month)=> loadMoreEvents().then(this.loadCal())}
              pastScrollRange= {0}
              current={TODAY}
              theme={customOptions}
              />
          </View>
          
        <View style = {{flex: 3, backgroundColor: Col.titleColour}}>
          <View style={{flex: 9, alignItems: 'center', justifyContent:'center', backgroundColor:Col.header, }}>
            <Text style={styles.title}>Legend</Text>
          </View>
          <View style={styles.row}>
            <View style={{width: 25,height: 25,borderRadius: 25/2,backgroundColor: '#90c5e6'}}/>
            <Text style={styles.legendText}>  -    Today</Text>
          </View>
          <View style={styles.row}>
            <View style={{width: 25,height: 25,borderRadius: 25/2,backgroundColor: '#e0a227'}}/>
            <Text style={styles.legendText}>  -    Upcoming Event</Text>
          </View>
          <View style={[styles.row, {backgroundColor: Col.titleColour}]}>
            <Text style={[styles.title, {fontSize: 18}]}>Scroll down to see all Upcoming Events!</Text>
          </View>
          

        </View>

              
      </View>
    );
  }
}
//          


var customOptions = {
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  textSectionTitleColor: 'black',
  selectedDayTextColor: 'black',
  selectedDotColor: '#e0a227',
  todayTextColor: 'black',
  todayBackgroundColor: '#90c5e6',
  dayTextColor: 'black',
  textDisabledColor: '#d9e1e8',
  //monthTextColor: '#e0a227',
   monthTextColor: '#90c5e6',
  selectedDayBackgroundColor: '#e0a227',
  selectedDayTextColor: 'black',

  textDayFontWeight: 'bold',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '300',
  textDayFontSize: 16,
  textMonthFontSize: 38,
  textDayHeaderFontSize: 15,
  
  'stylesheet.calendar.main':{
    container: {
      padding: 5,
        },
  }

}

function filterItems(arr, dayString) {
  return arr.filter(function(el) {
      return el.startDate == dayString && Date.parse(el.startDate) > Date.parse(TODAY);
  })
}


export default function CalendarStackScreen(){
  return(
    <CalendarStack.Navigator initialRouteName='Calendar' screenOptions={{headerStyle: {backgroundColor: Col.header, borderBottomWidth: 0}, headerTintColor: "white", headerLeft: null, headerTitleStyle: {
      fontFamily: 'titleFont-regular',
      fontSize: 20
    }}}>
      <CalendarStack.Screen name="Calendar" component={LinksScreen}/>
      <CalendarStack.Screen name="EventPage" component={EventPage} options={({ route }) => ({ title: route.params.event.commonStartDate })}/>
      <CalendarStack.Screen name="Web" component={Web} options={({ route }) => ({ title:'' })}/>

    </CalendarStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    flexDirection: 'column'
  },
  calendar:{
      height: 400,
  },
  legend:{
    flex: 1,
    height: 100
  },
  title:{
    color: 'white',
    fontFamily: 'textFont-semiBold', 
    fontSize: 20,
    textAlign:'center',
    alignSelf:'center'
  },
  row:{
    flex: 10, 
    paddingHorizontal: 20,
    flexDirection: 'row', 
    alignItems: 'center'
  },
  legendText:{
    fontFamily: 'textFont-regular',
    color: 'white',
    fontSize: 16
  },

});
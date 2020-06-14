import firebase from 'firebase';
import { View, Image } from 'react-native';
import { State } from 'react-native-gesture-handler';
import moment from 'moment';
import WeeklyButton from './WeeklyButton';
import Quote from './Quote';

require('firebase/firestore');

firebase.initializeApp({  
     apiKey: "AIzaSyDBpLhEqqh7hcJHWwEd--gr9rHx4SxelpU",
authDomain: "bsm-application-1580966372867.firebaseapp.com",
databaseURL: "https://bsm-application-1580966372867.firebaseio.com",
storageBucket: "bsm-application-1580966372867.appspot.com",
projectId: "bsm-application-1580966372867",});



//connects to firebase, retrieves all the events, 
//returns EventList

//Future:   retrieve Trivia, returns TriviaList
//          retrieve Quote, returns QuoteList

const EventList = [];
const TriviaList = [];
const QuoteList = {};
const WeeklyList = [];
var key = 0;
var lastDate ='';

export async function getEvent(){

    if(EventList.length > 20) return;

    var snapshot = await firebase.firestore()
    .collection('AEvents')
    .where('startDate', '>=', new Date(moment().subtract(1, 'days')))
    .orderBy('startDate')
    .limit(3)
    .get()


    snapshot.forEach((doc) => {
        var event = {};

        event.title = doc.get('title');
        event.description = doc.get('description');

        if(doc.get('endTime') == "") event.endTime = '';
        else event.endTime = moment(doc.get('endTime').seconds * 1000).format('H:mm');  
        if(doc.get('startTime') == "") event.startTime = '';
        else event.startTime = moment(doc.get('startTime').seconds * 1000).format('H:mm');  

        event.expandable = new Boolean (doc.get('expandable'));  
        event.thumbnail = {uri: doc.get('thumbnail')};  
        event.media = doc.get('media');
        event.baseStartDate=doc.get('startDate');

        event.RawStartDate = event.baseStartDate.seconds * 1000;
        event.startDate = moment(event.RawStartDate).format('YYYY-MM-DD');
        event.commonStartDate = moment(event.RawStartDate).format('MMMM Do, YYYY');

        event.baseEndDate=doc.get('endDate');

        event.RawEndDate = event.baseEndDate.seconds * 1000;
        if(event.baseEndDate != ''){
          event.endDate = moment(event.RawEndDate).format('YYYY-MM-DD');
          event.commonEndDate = moment(event.RawEndDate).format('MMMM Do, YYYY');
          event.period = moment(event.RawStartDate).format('MMMM Do') + " - " + event.commonEndDate;
        }
        else event.period = event.commonStartDate;

        event.key = (event.title+event.startDate);


        if(event.startDate > moment().format()) event.type = doc.get('type');  
        else event.type = "Past Event";


        if(event.startDate > moment().format('YYYY-MM-DD')){
          event.status = 'future'
        }
        else if(event.startDate <  moment().format('YYYY-MM-DD')){
          event.status = 'past'
        }
        else event.status = 'today'


        if(!event.RawStartDate == "" && !(event in EventList)){
          if (event.status == 'today'){
            WeeklyList.push(event);
          } 
          console.log(event.title + " - " + event.startDate + ' - ' + event.status);
          EventList.push(event);
          key++;
          lastDate=event.baseStartDate;
        }
    });





    key++;

    loadWeekly();
}

function loadWeekly(){
  

  var event={};
  var day = moment().day();
  switch(day){
    case 0:
      event = {
        key: 'Sunday Morning Service'+ moment().format('YYYY-MM-DD'),
        title: 'Sunday Morning Service',
        description: 'Begin your week in spirituality',
        endTime: '12:30',
        startTime: '9:30',
        expandable: new Boolean('false'),
        thumbnail: {uri: "https://static.wixstatic.com/media/329225_17684e1364234aa99cdacbd8e29e7c8f~mv2.jpg"},
        RawStartDate: moment().unix(),
        startDate: moment().format('YYYY-MM-DD'),
        commonStartDate: moment().format('MMMM Do, YYYY'),
        RawEndDate: "",
        endDate: "",
        type: "weekly",
        commonEndDate: "",
        status: "today",
        period: moment('09:30', "hh:mm").fromNow()
      };
      break;
     case 1:
      event = {
        key: 'Shiva Puja'+ moment().format('YYYY-MM-DD'),
        title: 'Shiva Puja',
        description: 'We offer special puja to the lingam, and sing the praises of bhagwan Shiva.',
        endTime: '20:00',
        startTime: '18:30',
        expandable: new Boolean('false'),
        thumbnail: {uri: "https://static.wixstatic.com/media/329225_3f07664debae4bdfa32c6ae72c374aa7~mv2.jpg"},
        RawStartDate: moment().unix(),
        startDate: moment().format('YYYY-MM-DD'),
        commonStartDate: moment().format('MMMM Do, YYYY'),
        RawEndDate: "",
        endDate: "",
        type: "weekly",
        commonEndDate: "",
        status: "today",
        period: moment('18:30', "hh:mm").fromNow()

      };
      break;
 case 2:
      event = {
        key: 'Hanuman Puja'+ moment().format('YYYY-MM-DD'),
        title: 'Hanuman Puja',
        description: 'We offer special puja to Hanumanji, and chant the Hanumanji Chalisa.',
        endTime: '20:00',
        startTime: '18:30',
        expandable: new Boolean('false'),
        thumbnail: {uri: "https://static.wixstatic.com/media/28e3bd_19d9728974b84f3eb2e4ec48c426a750~mv2.jpg"},
        RawStartDate: moment().unix(),
        startDate: moment().format('YYYY-MM-DD'),
        commonStartDate: moment().format('MMMM Do, YYYY'),
        RawEndDate: "",
        endDate: "",
        type: "weekly",
        commonEndDate: "",
        status: "today",
        period: moment('18:30', "hh:mm").fromNow()

      };
      break;
 case 5:
      event = {
        key: 'Devi Puja'+ moment().format('YYYY-MM-DD'),
        title: 'Devi Puja',
        description: 'We offer special puja to Maa Durga, Maa Saraswatti, and Mata lakshmi on this day.',
        endTime: '20:00',
        startTime: '18:30',
        expandable: new Boolean('false'),
        thumbnail: {uri: "https://static.wixstatic.com/media/329225_9c15e18666e24c479dc99c5c708a4e06~mv2.jpg"},
        RawStartDate: moment().unix(),
        startDate: moment().format('YYYY-MM-DD'),
        commonStartDate: moment().format('MMMM Do, YYYY'),
        RawEndDate: "",
        endDate: "",
        type: "weekly",
        commonEndDate: "",
        status: "today",
        period: moment('18:30', "hh:mm").fromNow()

      };
      break;
    
  }


  if(event != {}){
    if(WeeklyList.filter(e => e.key === event.key) == 0) WeeklyList.push(event);
  }
  if(WeeklyList.filter(e => e.key === 'Aarti'+ moment().format('YYYY-MM-DD')).length == 0){
    WeeklyList.push({
      key: 'Aarti'+ moment().format('YYYY-MM-DD'),
      title: 'Aarti',
      description: 'We conclude the day with Aarti at 8:00pm.',
      endTime: '',
      startTime: '20:00',
      expandable: new Boolean('false'),
      thumbnail: {uri: "https://static.wixstatic.com/media/28e3bd_b98b6dbd6893467a8930e473b0a7756a~mv2.png"},
      RawStartDate: moment().format(),
      startDate: moment().format('YYYY-MM-DD'),
      commonStartDate: moment().format('MMMM Do, YYYY'),
      RawEndDate: "",
      endDate: "",
      type: "daily",
      commonEndDate: "",
      status: "today",
      period: moment('20:00', "hh:mm").fromNow()

    });
  }

}

export async function getTrivia(){

    var snapshot = await firebase.firestore()
    .collection('Trivia')
    .get()

    snapshot.forEach((doc) => {
        TriviaList.push(doc.data());
    });

}

export async function getQuotes(){

    var snapshot = await firebase.firestore()
    .collection('Quotes')
    .get()

    QuoteList.Morning = [];
    QuoteList.Afternoon = [];
    QuoteList.Night = [];

    snapshot.forEach((doc) => {
      if(doc.get('quote').length >= 20)
        var tod = doc.get('timeOfDay')
        switch(tod){
          case 'Morning':
            QuoteList.Morning.push(doc.data());
            break;
          case 'Afternoon':
            QuoteList.Afternoon.push(doc.data());
            break;
          case 'Night':
            QuoteList.Night.push(doc.data());
            break;
          default:
            QuoteList.Afternoon.push(doc.data());
            break;
        }
    });


}


function getMonthName (number){
    var monthName;
    number = parseInt(number);
    switch (number) {
      case 1:
        monthName = 'January';
        break;
        case 2:
        monthName = 'February';
        break;
        case 3:
        monthName = 'March';
        break;
        case 4:
        monthName = 'April';
        break;
        case 5:
        monthName = 'May';
        break;
        case 6:
        monthName = 'June';
        break;
      case 7:
        monthName = 'July';
        break;
      case 8:
        monthName = 'August';
        break;
      case 9:
        monthName = 'September';
        break;
      case 10:
        monthName = 'October';
        break;
      case 11:
        monthName = 'November';
        break;
      case 12:
        monthName = 'December';
        break;
      default:
        monthName = 'January';
        break;
  
    }
    return monthName;
  }

export async function loadMoreEvents(){
  var snapshot = await firebase.firestore()
  .collection('AEvents')
  .where('startDate', '>=', new Date(moment()))
  .orderBy('startDate')
  .startAfter(lastDate)
  .limit(3)
  .get()

  snapshot.forEach((doc) => {
    var event = {};
    
   
    event.title = doc.get('title');
    event.description = doc.get('description');
    if(doc.get('endTime') == "") event.endTime = '';
    else event.endTime = moment(doc.get('endTime').seconds * 1000).format('H:mm');  
    if(doc.get('startTime') == "") event.startTime = '';
    else event.startTime = moment(doc.get('startTime').seconds * 1000).format('H:mm');  
    event.expandable = new Boolean (doc.get('expandable'));  
    event.thumbnail = {uri: doc.get('thumbnail')};  
    event.media = doc.get('media');

    event.baseStartDate=doc.get('startDate');

    event.RawStartDate = doc.get('startDate').seconds * 1000;
    event.startDate = moment(event.RawStartDate).format('YYYY-MM-DD');
    event.commonStartDate = moment(event.RawStartDate).format('MMMM Do, YYYY');

    event.baseEndDate=doc.get('endDate');

    event.RawEndDate = event.baseEndDate.seconds * 1000;
    if(event.baseEndDate != ''){
      event.endDate = moment(event.RawEndDate).format('YYYY-MM-DD');
      event.commonEndDate = moment(event.RawEndDate).format('MMMM Do, YYYY');
      event.period = moment(event.RawStartDate).format('MMMM Do') + " - " + event.commonEndDate;
    }
    else event.period = event.commonStartDate;

    event.key = (event.title+event.startDate);
    if(event.startDate > moment().format()) event.type = doc.get('type');  
    else event.type = "Past Event";


    if(event.startDate > moment().format()){
      event.status = 'future'
    }
    else if(event.startDate < moment().format()){
      event.status = 'past'
    }
    else event.status = 'today'


    if(!event.baseStartDate == "" && EventList.filter(e => e.key === event.key).length == 0){
      EventList.push(event);
      key++;
      lastDate=event.baseStartDate;

    }
});

}
  
  export{EventList, TriviaList, QuoteList, WeeklyList};

import firebase from 'firebase';
import { View, Image } from 'react-native';
import { State } from 'react-native-gesture-handler';
import moment from 'moment';

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
const QuoteList = [];

export async function getEvent(){

    if(EventList.length > 20) return;

    var snapshot = await firebase.firestore()
    .collection('AEvents')
    .orderBy('startDate')
    .get()
    var key = 0;

    if(moment().day() == 0){
      var event = {
        key: JSON.stringify(key),
        title: 'Sunday Morning Service',
        description: 'Begin your week in spirituality',
        endTime: '12:30pm',
        startTime: '9:30am',
        expandable: new Boolean('false'),
        thumbnail: {uri: "https://static.wixstatic.com/media/329225_17684e1364234aa99cdacbd8e29e7c8f~mv2.jpg"},
        RawStartDate: moment().unix(),
        startDate: moment().format('YYYY-MM-DD'),
        commonStartDate: moment().format('MMMM Do, YYYY'),
        RawEndDate: "",
        endDate: "",
        type: "weekly",
        commonEndDate: "",
        status: "today"
      };
      EventList.push(event);
      key++;

    }

    snapshot.forEach((doc) => {
        var event = {};

        event.key = JSON.stringify(key);
        event.title = doc.get('title');
        event.description = doc.get('description');
        event.endTime = doc.get('endTime');  
        event.startTime = doc.get('startTime');  
        event.expandable = new Boolean (doc.get('expandable'));  
        event.thumbnail = {uri: doc.get('thumbnail')};  

        event.RawStartDate = doc.get('startDate').seconds * 1000;
        event.startDate = moment(event.RawStartDate).format('YYYY-MM-DD');
        event.commonStartDate = moment(event.RawStartDate).format('MMMM Do, YYYY');

        event.RawEndDate = doc.get('endDate');
        if(event.RawEndDate != ''){
          event.endDate = moment(event.RawEndDate.seconds * 1000).format('YYYY-MM-DD');
          event.commonEndDate = moment(event.RawEndDate).format('MMMM Do YYYY');;
        }

        if(event.startDate > moment().format()) event.type = doc.get('type');  
        else event.type = "Past Event";


        if(event.startDate > moment().format()){
          event.status = 'future'
        }
        else if(event.startDate < moment().format()){
          event.status = 'past'
        }
        else event.status = 'today'


        if(!event.RawStartDate == "" && !(event in EventList)){
          EventList.push(event);
          key++;
        }
    });

    EventList.push({
      key: JSON.stringify(key),
      title: 'Aarti',
      description: 'You are invited to join us as we concluded each evening with Aarti at 8:00 pm.',
      endTime: '8:20pm',
      startTime: '8:00pm',
      expandable: new Boolean('false'),
      thumbnail: {uri: "https://static.wixstatic.com/media/28e3bd_b98b6dbd6893467a8930e473b0a7756a~mv2.png"},
      RawStartDate: moment().format(),
      startDate: moment().format('YYYY-MM-DD'),
      commonStartDate: moment().format('MMMM Do, YYYY'),
      RawEndDate: "",
      endDate: "",
      type: "daily",
      commonEndDate: "",
      status: "today"
    });

    key++;

    console.log(EventList);
    return EventList;
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

    snapshot.forEach((doc) => {
        QuoteList.push(doc.data());
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


  
  export{EventList, TriviaList, QuoteList};

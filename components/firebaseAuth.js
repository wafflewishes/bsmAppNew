import firebase from 'firebase';
import { View, Image } from 'react-native';
import { State } from 'react-native-gesture-handler';

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
    var snapshot = await firebase.firestore()
    .collection('AEvents')
    .orderBy('startDate')
    .get()
    var key = 0;
    snapshot.forEach((doc) => {
        var event = {};

        event.key = JSON.stringify(key);
        event.title = doc.get('title');
        event.description = doc.get('description');
        event.endTime = doc.get('endTime');  
        event.startTime = doc.get('startTime');  
        event.expandable = new Boolean (doc.get('expandable'));  
        event.media = "https://static.wixstatic.com/media/28e3bd_56257553de024cb7871d7a3d56da23e0~mv2.png";  
        event.type = doc.get('type');  

        var startDate = doc.get('startDate');
        if (startDate == "") {
            event.startDate = "1999-01-01";
            event.commonStartDate = "January 1, 1999";
        }
        else {
            var month = startDate.toDate().getMonth()+1;
            var day = startDate.toDate().getDate();
            if(month <= 9) month = "0" + JSON.stringify(month);
            if(day <= 9) day = "0" + JSON.stringify(day);
            event.startDate =  startDate.toDate().getFullYear() + "-" + month + "-" + day;
            event.commonStartDate = getMonthName(month) + " " + day;

        }


        var endCheck = doc.get('endDate');
        if (endCheck == ""){
            event.endDate = event.startDate;
            event.commonEndDate = event.commonStartDate;
        }
        else {
            var month = endCheck.toDate().getMonth();
            var day = endCheck.toDate().getDate();
            if(month <= 9) month = "0" + JSON.stringify(month);
            if(day <= 9) day = "0" + JSON.stringify(day);
            event.endDate =  endCheck.toDate().getFullYear() + "-" + month + "-" + day;
            event.commonEndDate = getMonthName(month) + " " + day;

        }  
        
        
        var clear = true;
        for(var i = 0; i < EventList.length; i ++){
            if (EventList[i].title == event.title && EventList[i].startDate == event.startDate){
                clear = false;
            }
        }
        if(clear)EventList.push(event);
        key = key + 1;
    });
    console.log(EventList);
    return true;
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

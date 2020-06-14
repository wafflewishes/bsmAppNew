import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, FlatList, StatusBar } from 'react-native';
import ParallaxScrollView  from 'react-native-parallax-scroll-view';

import Colors from '../constants/Colors';

import * as color from "../constants/Colors";

import Event from '../components/Event';
import { EventList } from "../components/firebaseAuth";

export default class Week extends React.Component {

    state = {
       event: this.props.route.params.event,
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                <StatusBar hidden={true} />  
                <View style={styles.titleBox}>
                    <Image source={require('../assets/images/logo.png')}
                        resizeMode='contain'
                        style={{width: 250, height: 100, alignSelf:'center'}}
                    />
                    <Text style={[styles.title, {fontSize: 30}]}>Weekly Schedule</Text>

                </View>
                <View style={styles.line}/>

                <View>
                    <Text style={[styles.title, styles.day]}>Monday</Text>
                    <Event event = {{title: "Shiva Puja", description: '', commonStartDate:'6:30pm - 8:00pm', thumbnail: require('../assets/images/lingam.jpg'), status:'week'}}/>
                    
                    <Text style={[styles.title, styles.day]}>Tuesday</Text>
                    <Event event = {{title: "Hanuman Puja", description: '', commonStartDate:'6:30pm - 8:00pm', thumbnail:require('../assets/images/hanuman.jpg'), status:'week'}}/>
                    
                    <Text style={[styles.title, styles.day]}>Friday</Text>
                    <Event event = {{title: "Devi Puja", description: '', commonStartDate:'6:30pm - 8:00pm', thumbnail: require('../assets/images/durga.jpg'), status:'week'}}/>
                    
                    <Text style={[styles.title, styles.day]}>Sunday</Text>
                    <Event event = {{title: "Sunday Morning Service", description: '', commonStartDate:'9:30am - 12:00pm', thumbnail: require('../assets/images/shivaparvati.jpg'), status:'week'}}/>
                    

                </View>
                <View style={{backgroundColor:Colors.lightGold, height: 380, marginTop: 10}}>
                    <Text style={[styles.title, styles.day, {color:'white', alignSelf:'center'}]}>Every Evening</Text>
                    <Event event = {{title: "Aarti", description: '', commonStartDate:'8:00pm', thumbnail: {uri:'https://static.wixstatic.com/media/28e3bd_b98b6dbd6893467a8930e473b0a7756a~mv2.png'}, status:'week'}}/>
                    <View style={{justifyContent:'center', alignContent:'center', height: 60}}>
                        <Text style={[styles.title, {color:'white', alignSelf:'center', fontSize:18, fontFamily:'textFont-bolditalic'}]}>*Weekly events subject to change</Text>
                    </View>

                </View>
                
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8fbfb'
    },
    titleBox:{
        height: 150,
        backgroundColor: Colors.header
    },
    line:{
        height:3,
        width: '100%',
        flex: 2,
        marginBottom: 10,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontFamily: 'titleFont',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        lineHeight: 40,

    },
    day:{
        fontSize: 22, 
        textAlign:'left', 
        color: Colors.titleColour,
        marginLeft: 10,
        textDecorationLine:'underline'
    }
    
  });
  
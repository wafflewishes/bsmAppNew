import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import ParallaxScrollView  from 'react-native-parallax-scroll-view';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';


import InAppBrowser from 'react-native-inappbrowser-reborn'
import color from "../constants/Colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loadMoreEvents } from "../components/firebaseAuth";

export default class EventPage extends React.Component {

    constructor(props){
        super(props);
        this.loadNavigation=this.loadNavigation.bind(this);
        this.isValidURL=this.isValidURL.bind(this);
    }
    state = {
       event: this.props.route.params.event,
    }

    loadNavigation = link => {
        const navigation = this.props.navigation;
        navigation.setOptions({ 
            headerTitle: this.state.event.title
          });
        navigation.navigate("Web", {item:{link:link, title:this.state.event.title}})
    }

    isValidURL = str =>{
        var pattern = new RegExp('^((https?:)?\\/\\/)?'+ // protocol
        '(?:\\S+(?::\\S*)?@)?' + // authentication
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locater
            if (!pattern.test(str)) {
                console.log('false')
                return false;
            } else {
                console.log('true')

                return true;
            }
        }

    render() {
        var line = '';
        
        if(this.isValidURL(this.state.event.media)){
            return(
                <ParallaxScrollView
                backgroundColor={color.lightBlue}
                contentBackgroundColor="white"
                parallaxHeaderHeight={250}
                
                renderBackground = {() => (<Image
                    source={this.state.event.thumbnail}
                    resizeMode= 'center'
                    style={styles.picture}
                  ></Image>)}
                  
                  rengerFoot
                  
                  >
                 <View style = {styles.container}>


                     <View style = {styles.titleBox}>
                         <View style={{justifyContent: 'center'}}>
                            <Text style = {styles.title}>{this.state.event.title}</Text>
                         </View>
                        <Text style = {styles.date}>{this.state.event.period}</Text>
    
                     </View>
                    <View style = {styles.descriptionBox}>
                     <Text style = {styles.description}>{this.state.event.description}</Text>
    
                    </View>
                    <TouchableOpacity  onPress={() => this.loadNavigation(this.state.event.media)}>
                        <View style={{height:70, backgroundColor: color.lightGold, marginTop: 30, justifyContent:'center', alignContent:'center'}}>
                            <Text style = {{fontSize: 18, textAlign:'center',  fontFamily : "titleFont", color:'white'}}>Click here to see moments from previous years!</Text>
                        </View>  
                    </TouchableOpacity>
                    

                </View>
   
              </ParallaxScrollView> 
    
            );

        }
        if(this.state.event.startTime != ''){
            if(this.state.event.endTime != ''){
                line = moment(this.state.event.startTime,'H:mm').format('h:mm a') + ' - ' + moment(this.state.event.endTime,'H:mm').format('h:mm a');
            }
            else line = moment(this.state.event.startTime,'H:mm').format('h:mm a');
            return(
                <ParallaxScrollView
                backgroundColor={color.lightBlue}
                contentBackgroundColor="white"
                parallaxHeaderHeight={250}
                
                renderBackground = {() => (
                        <Image
                            source={this.state.event.thumbnail}
                            resizeMode="cover"
                            style={styles.picture}
                        />
                  )}>
                    <View style = {styles.container}>
                     <View style = {styles.titleBox}>
                         <View style={{justifyContent: 'center'}}>
                            <Text style = {styles.title}>{this.state.event.title}</Text>
                         </View>
                         <View>
                            <Text style = {styles.date}>{this.state.event.period}</Text>
                         </View>
                    </View>
                    <View style={{backgroundColor: '#c0891b'}}>
                        <Text style = {styles.times}>{line}</Text>
                    </View>
                    <View style = {styles.descriptionBox}>
                     <Text style = {styles.description}>{this.state.event.description}</Text>
    
                    </View>
                </View>
              </ParallaxScrollView> 
    
            );
        }
        else{
            return(
                <ParallaxScrollView
                backgroundColor={color.lightBlue}
                contentBackgroundColor="white"
                parallaxHeaderHeight={250}
                
                renderBackground = {() => (<Image
                    source={this.state.event.thumbnail}
                    resizeMode="cover"
                    style={styles.picture}
                  ></Image>)}>
                 <View style = {styles.container}>
                     <View style = {styles.titleBox}>
                         <View style={{justifyContent: 'center'}}>
                            <Text style = {styles.title}>{this.state.event.title}</Text>
                         </View>
                        <Text style = {styles.date}>{this.state.event.period}</Text>
    
                     </View>
                    <View style = {styles.descriptionBox}>
                     <Text style = {styles.description}>{this.state.event.description}</Text>
    
                    </View>
                </View>
              </ParallaxScrollView> 
    
            );
        }
        
    }
}



const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    picture: {
      width: "100%",
      height: "100%"
    },
    title: {
        color: 'white',
        fontSize: 23,
        flexGrow: 2,
        fontFamily : "titleFont",
        alignContent: 'center',

    },
    description: {
        fontSize: 18,
        marginHorizontal: 8,
        lineHeight: 25,
        fontFamily: "textFont-regular",

    },
    descriptionBox: {
        marginTop: 20,

    },
    times:{
        fontFamily:'textFont-regular',
        fontSize:21,
        marginHorizontal: 8,
        color:'white',
        textAlign:'center'

    },
    date: {
        fontSize: 21,
        color: 'white',
        flexShrink: 1,
        fontFamily: "textFont-semiBold",
    },
    titleBox:{
        backgroundColor: '#e0a227',
        height: 100,
        justifyContent: 'center',

        paddingLeft: 8
    }
  });
  
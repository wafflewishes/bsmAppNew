import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {getEvent, EventList, getTrivia} from './components/firebaseAuth';
import { AppLoading } from 'expo';


import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import { useFonts } from '@use-expo/font';


const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  let [fontsLoaded] = useFonts({
    'georgia-regular': require('./assets/fonts/georgia-regular.ttf'),
    'kadwa-700': require('./assets/fonts/kadwa-700.ttf'),
    'kadwa-regular': require('./assets/fonts/kadwa-regular.ttf'),
    'roboto-regular': require('./assets/fonts/roboto-regular.ttf'),
  });

  getEvent();

  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {
    if (!isLoadingComplete) {
      return null;
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          <NavigationContainer linking={LinkingConfiguration}>
            <Stack.Navigator op>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

async function loadFirebase(){
  return Promise.all(getEvent());
}
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {getEvent, EventList, getTrivia} from './components/firebaseAuth';
import { AppLoading,SplashScreen } from 'expo';


import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import { useFonts } from '@use-expo/font';


const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);


  let [fontsLoaded] = useFonts({
    'textFont-regular': require('./assets/fonts/georgia-regular.ttf'),
    "titleFont": require('./assets/fonts/kadwa-700.ttf'),
    'titleFont-regular': require('./assets/fonts/kadwa-regular.ttf'),
  });

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
          await getEvent();

      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);


  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {
    if (!isLoadingComplete && !props.skipLoadingScreen) {
      return <AppLoading />;
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
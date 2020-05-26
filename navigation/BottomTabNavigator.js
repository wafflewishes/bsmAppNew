import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/CalendarScreen';
import FeedStackScreen from '../screens/LiveFeed';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  var tabOptions = {
    activeBackgroundColor: "rgba(0,133,200,1)",
    inactiveBackgroundColor: "rgba(0,93,150,1)",
    showLabel : true,
    activeTintColor: "white",
    labelStyle: {
      fontFamily: "kadwa-700",
      
    },
    style:{
      marginBottom: -6,
      height: 55

    }
  }

  navigation.setOptions({ 
    headerTitle: getHeaderTitle(route) ,
    headerStyle: {
      backgroundColor: 'rgba(0,93,150,1)',
    },
    headerTintColor: "white"
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={tabOptions}>
      <BottomTab.Screen
        name="Home"
        component={FeedStackScreen}
        options={{
          title: 'Feed',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
        }}
      
      />
      <BottomTab.Screen
        name="Calendar"
        component={LinksScreen}
        options={{

          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-calendar" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Bhavani Shankar Mandir';
    case 'Calendar':
      return 'All events for the Year';
  }
}

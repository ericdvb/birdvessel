import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
//import HomeScreen from '../screens/HomeScreen';
import CoreScreen from '../screens/CoreScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

//const HomeStack = createStackNavigator({
  //Home: HomeScreen,
//});

//HomeStack.navigationOptions = {
  //tabBarLabel: 'Home',
  //tabBarIcon: ({ focused }) => (
    //<TabBarIcon
      //focused={focused}
      //name={
        //Platform.OS === 'ios'
          //? `ios-information-circle${focused ? '' : '-outline'}`
          //: 'md-information-circle'
      //}
    ///>
  //),
//};

const CoreStack = createStackNavigator({
  Core: CoreScreen,
});

CoreStack.navigationOptions = {
  tabBarLabel: 'Conversations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-chatboxes${focused ? '' : '-outline'}`
          : 'ios-chatboxes'
      }
    />
  ),
};

//const LinksStack = createStackNavigator({
  //Links: LinksScreen,
//});

//LinksStack.navigationOptions = {
  //tabBarLabel: 'Links',
  //tabBarIcon: ({ focused }) => (
    //<TabBarIcon
      //focused={focused}
      //name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    ///>
  //),
//};

const DiscoverStack = createStackNavigator({
  Links: LinksScreen,
});

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : '-outline'}`
          : 'ios-search'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  //HomeStack,
  CoreStack,
  //LinksStack,
  DiscoverStack,
  SettingsStack,
});

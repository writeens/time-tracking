/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import {generate as shortKey} from 'shortid';

const App = () => {
  const {timers, setTimers} = useState(myTimers)
  [
    {
      title:'Pick up my phone',
      project:'Outside',
      elapsed: 5456099,
      id: shortKey(),
      isRunning:true
    },
    {
      title:'Walk the dog',
      project:'Outside',
      elapsed: 1273998,
      id: shortKey(),
      isRunning: false,
    }
  ]
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView>
        <ToggleableTimerForm isOpen={false} />
        <EditableTimer
          id="1"
          title="Dance all day"
          project="Learning"
          elapsed="8986300"
          isRunning
        />
        <EditableTimer
          id="2"
          title="Sing Please Me"
          project="Singing"
          elapsed="3890985"
          editFormOpen
        />
      </ScrollView>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
  },
  timerList: {
    paddingBottom: 15
  }
});

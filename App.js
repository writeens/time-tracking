/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';

import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import { generate as shortKey } from 'shortid';
import { newTimer } from './utils/TimerUtils';

const App = () => {

  let myTimers = [
    {
      title:'Pick up my phon',
      project:'Outside',
      elapsed: "8986300",
      id: shortKey(),
      isRunning:false
    },
    {
      title:'Walk the dog',
      project:'Outside',
      elapsed: "3890985",
      id: shortKey(),
      isRunning: false,
    }
  ]
  const [timers, setTimers] = useState(myTimers)

  const handleCreateFormSubmit = (timer) => {
    //Get New Timer
    const aTimer = newTimer(timer);
    //Create new timer object with old and new timer
    const updatedTimers = [...timers, aTimer]
    //Update State
    setTimers(updatedTimers)
  }

  const handleFormSubmit = (attrs) => {
    //Update exact timer based on id
    const updatedTimers = timers.map((timer) => {
      if(timer.id === attrs.id){
        const {title, project} = attrs;
        return {
          ...timer,
          title,
          project,
        }
      }
      return timer
    })

    //Update Timers State
    setTimers(updatedTimers);
  }

  const handleRemovePress = (timerId) => {
    const updatedTimers = timers.filter((timer) => timer.id !== timerId)
    setTimers(updatedTimers)
  }

  const incrementTimer = (TIME_INTERVAL) => {
    const updatedTimers = timers.map((timer) => {
      const {elapsed, isRunning} = timer;
      
      return {
        ...timer,
        elapsed: isRunning ? (parseInt(elapsed) + parseInt(TIME_INTERVAL)) : elapsed
      }
    })

    setTimers(updatedTimers)
  }

  const toggleTimer = (timerId) => {
    const updatedTimer = timers.map(timer => {
      const {id, isRunning} = timer;

      if( id === timerId) {
        return {
          ...timer,
          isRunning: !isRunning
        }
      }
      return timer

    })
    setTimers(updatedTimer)
  }


  //On Mount and On Timer Update
  useEffect(() => {
    const TIME_INTERVAL = 1000;
    let INTERVAL_ID = setInterval(() => {
      incrementTimer(TIME_INTERVAL)
    }, TIME_INTERVAL);

    //Component Will Unmount Clean Up
    return () => clearInterval(INTERVAL_ID)
  }, [timers])

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView>
        <ToggleableTimerForm isOpen={false} onFormSubmit={handleCreateFormSubmit}/>
        {timers.map(({ title, project, id, elapsed, isRunning }) => (
          <EditableTimer
          key={id}
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          isRunning={isRunning}
          onFormSubmit={handleFormSubmit}
          onRemovePress={handleRemovePress}
          onStartPress={toggleTimer}
          onStopPress={toggleTimer}
          />
        ))}
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

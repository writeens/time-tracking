/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, View, Text } from 'react-native';

import { millisecondsToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';

const Timer = (props) => {
    const {
        title, 
        project, 
        elapsed, 
        onEditPress, 
        id, 
        isRunning,
        onRemovePress,
        onStartPress,
        onStopPress
    } = props;
    const elapsedString = millisecondsToHuman(elapsed);


    const handleRemovePress = () => {
        onRemovePress(id)
    }

    const handleStartPress = () => {
        onStartPress(id)
    }

    const handleStopPress = () => {
        onStopPress(id)
    }

    const renderActionButton = () => {
        if(isRunning) {
            return (
                <TimerButton 
                    color="#DB2828" 
                    title="Stop" 
                    onPress={handleStopPress}
                    />
            )
        }
        return (
            <TimerButton 
                color="#21BA45" 
                title="Start"
                onPress={handleStartPress}
                />
        )
    }

    return (
        <View style={styles.timerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text>{project}</Text>
            <Text style={styles.elapsedTime}>{elapsedString}</Text>
            <View style={styles.buttonGroup}>
                <TimerButton 
                    color="blue" 
                    small 
                    title="Edit" 
                    onPress={onEditPress}/>
                <TimerButton 
                    color="blue" 
                    small 
                    title="Remove" 
                    onPress={handleRemovePress}
                    />
            </View>
            {renderActionButton()}
        </View>
    )
}

const white = 'white';
const myBorder = '#d6d7da'
const styles = StyleSheet.create({
    timerContainer: {
        backgroundColor: white,
        borderColor: myBorder,
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    elapsedTime:{
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
})

Timer.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    elapsed: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    onEditPress: PropTypes.func.isRequired,
    onRemovePress: PropTypes.func.isRequired,
    onStartPress: PropTypes.func.isRequired,
    onStopPress: PropTypes.func.isRequired,
}

export default Timer;
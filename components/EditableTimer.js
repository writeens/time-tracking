import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TimerForm from './TimerForm';
import Timer from './Timer';

const EditableTimer = (props) => {

    const [editFormOpen, setEditFormOpen] = useState(false)
    const {
        id, 
        title, 
        project, 
        elapsed, 
        isRunning, 
        onFormSubmit, 
        onRemovePress,
        onStartPress,
        onStopPress,
    } = props;

    const handleEditPress = () => {
        openForm()
    }

    const handleFormClose = () => {
        closeForm()
    }

    const handleSubmit = (timer) => {
        onFormSubmit(timer);
        closeForm()
    }

    const closeForm = () => {
        setEditFormOpen(false)
    }
    const openForm = () => {
        setEditFormOpen(true)
    }


    if(editFormOpen){
        return <TimerForm 
        id={id} 
        title={title} 
        project={project}
        onFormSubmit={handleSubmit}
        onFormClose={handleFormClose}
        />
    }
    return (
        <Timer
         id={id}
         title={title}
         project={project}
         elapsed={elapsed}
         isRunning={isRunning}
         onEditPress={handleEditPress}
         onRemovePress={onRemovePress}
         onStartPress={onStartPress}
         onStopPress={onStopPress}
        />
    )
}

EditableTimer.propTypes = {
    id:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    elapsed: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onRemovePress: PropTypes.func.isRequired,
    onStartPress: PropTypes.func.isRequired,
    onStopPress: PropTypes.func.isRequired,
}

export default EditableTimer;
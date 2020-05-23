import React, { Component } from 'react'

import TimerForm from './TimerForm';
import Timer from './Timer';

const EditableTimer = (props) => {
    const {id, title, project, elapsed, isRunning, editFormOpen} = props;
    if(editFormOpen){
        return <TimerForm id={id} title={title} project={project}></TimerForm>
    }
    return (
        <Timer
         id={id}
         title={title}
         project={project}
         elapsed={elapsed}
         isRunning={isRunning}
        />
    )
}

export default EditableTimer;
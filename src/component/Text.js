import React, { useState } from 'react'
/** @jsx jsx */
import {jsx } from "@emotion/core";
import {
    inputContainer,
    fieldCont,
    parentInputCont,
    buttonCont,
    close,
    backdrop
} from '../style'

const Text = ({showField, setShowField, setTaskList, elementId, hideButton, initialTask, initialTitle}) => {
    const [task, setTask] = useState(initialTask || '')
    const [title, setTitle] = useState(initialTitle || '')
    const [inputFocus, setInputFocus] = useState(false)

    function addTask(elementId) {
        if (!task) {
            setInputFocus(false)
            setShowField(false)
            return
        }
        if (elementId) {
            setTaskList(taskList => {
                const newTaskList = { ...taskList }
                newTaskList[elementId].text = task
                newTaskList[elementId].title = title
                return newTaskList
            })
        } else {
            const time = new Date().getTime().toString()
            setTaskList(taskList => {
                const newTaskList = { ...taskList, ...{ [time]: { text: task, id: time, title } } }
                return newTaskList
            })
            setTask('')
            setTitle('')
        }
        setInputFocus(false)
        setShowField(false)
    }
    return (
        <React.Fragment>
            <span css={backdrop} className={`${inputFocus ? 'show' : ''}`} onClick={() => { addTask(elementId) }}></span>
            <div css={parentInputCont}>
                <div css={inputContainer}>
                    {
                        showField && (
                            <div css={fieldCont}>
                                <input placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} onFocus={() => { 
                            setInputFocus(true)
                            setShowField(true) }}/>
                            </div>
                        )
                    }
                    <div css={fieldCont}>
                        <textarea type='text' value={task} placeholder={'Take a note...'} onFocus={() => { 
                            setInputFocus(true)
                            setShowField(true) }} onChange={(e) => { setTask(e.target.value) }} />
                    </div>
                </div>
                {
                    (!hideButton && showField) && (<div css={buttonCont}>
                        <div css={close} onClick={() => { addTask() }}>Close</div>
                    </div>)
                }
            </div>
        </React.Fragment>
    )
}

export default Text
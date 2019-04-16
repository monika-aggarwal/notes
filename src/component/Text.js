import React, { useReducer, useEffect } from 'react'
/** @jsx jsx */
import {jsx } from "@emotion/core";
import {
    fieldCont,
    buttonCont,
    close,
    backdrop
} from '../style'

const initialState = {
    task: '',
    title: '',
    inputFocus: false
}
const reducer = (state, { type, payload }) => {
    let newState
    switch (type) {
        case 'SET_TASK':
            newState =  { ...state, ...{ task: payload } }
            break
        case 'SET_TITLE':
            newState =  { ...state, ...{ title: payload } }
            break
        case 'SET_FOCUS':
            newState =  { ...state, ...{ inputFocus: payload } }
            break
    }
    return newState
}

const Text = ({className,showField, setShowField, setTaskList, elementId, hideButton, initialTask, initialTitle}) => {
    const [currentState, dispatch] = useReducer(reducer, initialState)
    function addTask(elementId) {
        if (!currentState.task) {
            dispatch({type: 'SET_FOCUS', payload: false})
            setShowField(false)
            return
        }
        if (elementId) {
            setTaskList(taskList => {
                const newTaskList = { ...taskList }
                newTaskList[elementId].text = currentState.task
                newTaskList[elementId].title = currentState.title
                return newTaskList
            })
        } else {
            const time = new Date().getTime().toString()
            setTaskList(taskList => {
                const newTaskList = { ...taskList, ...{ [time]: { text: currentState.task, id: time, title: currentState.title } } }
                return newTaskList
            })
            dispatch({ type: 'SET_TASK', payload: ''})
            dispatch({ type: 'SET_TITLE', payload: '' })
        }
        dispatch({ type: 'SET_FOCUS', payload: false })
        setShowField(false)
    }
    useEffect(() => {
        console.log("component did mount")
        dispatch({
            type: 'SET_TASK',
            payload: initialTask || ''
        })
        dispatch({
            type: 'SET_TITLE',
            payload: initialTitle || ''
        })
    },[])
    return (
        <React.Fragment>
            <span css={backdrop} className={`${currentState.inputFocus ? 'show' : ''}`} onClick={() => { addTask(elementId) }}></span>
            <div className={className}>
                {
                    showField && (
                        <div css={fieldCont}>
                            <input placeholder='Title' value={currentState.title} onChange={(e) => { dispatch({ type: 'SET_TITLE', payload: e.target.value }) }} onFocus={() => { 
                                dispatch({ type: 'SET_FOCUS', payload: true })
                        setShowField(true) }}/>
                        </div>
                    )
                }
                <div css={fieldCont}>
                    <textarea type='text' value={currentState.task} placeholder={'Take a note...'} onFocus={() => { 
                        dispatch({ type: 'SET_FOCUS', payload: true })
                        setShowField(true)
                    }} onChange={(e) => { dispatch({ type: 'SET_TASK', payload: e.target.value}) }} />
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
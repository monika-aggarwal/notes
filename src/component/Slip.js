import React, {useRef} from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faThumbtack } from '@fortawesome/free-solid-svg-icons'

import {
    taskSlip,
    iconContainer,
    textContainer
} from '../style'

export default ({ text, id, setTaskList}) => {
    const textRef = useRef()
    // const titleRef = useRef()
    
    function  deleteElement(elementId) {
        setTaskList(taskList => {
            const newTaskList = { ...taskList}
            delete (newTaskList[elementId])
            return newTaskList
        })
    }
    function updateTask(elementId){
        setTaskList(taskList => {
            const newTaskList = {...taskList}
            newTaskList[elementId].text = textRef.current.textContent
            return newTaskList
        })
    }

    function pinElement(elementId) {
        setTaskList(taskList => {
            const newTaskList = { ...taskList }
            newTaskList[elementId].isPinned = true
            return newTaskList
        })
    }

    return (
        <div css={taskSlip}>
            <div className='iconContainer'>
                <i onClick={() => deleteElement(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} size={'1x'}/>
                    {/* <span>Delete</span> */}
                </i>
                <i onClick={() => pinElement(id)}><FontAwesomeIcon icon={faThumbtack} size={'1x'} /></i>
            </div>
            {/* <div contentEditable="true" css={textContainer} onBlur={() => updateTask(id)}>

            </div> */}
            <div contentEditable="true" css={textContainer} onBlur={() => updateTask(id)} ref={textRef}>{text}</div>
        </div>
    )
}
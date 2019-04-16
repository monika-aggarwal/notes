import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { 
    taskSlip,
    taskListContainer,
    slipContainer,
    categoryTitle,
    categoryContainer
 } from '../style'
import Slip from './Slip'
const taskTemplate = ({ title, list, setTaskList}) => {
    return (
        <div css={categoryContainer}>
            <h1 css={categoryTitle}>{title}</h1>
            <div css={slipContainer}>
                {
                    Object.values(list).map(({ text, id }) => {
                        return <Slip text={text} key={id} id={id} setTaskList={setTaskList} />
                    })
                }
            </div>
        </div>
    )
}


const TaskList = ({ taskList, setTaskList}) => {
    const pinnedTask = Object.values(taskList).filter(item => item.isPinned)
    const others = Object.values(taskList).filter(item => !item.isPinned)
    return (
        <div css={taskListContainer}>
            {
                pinnedTask.length > 0 && taskTemplate({ title: 'Pinned', list: pinnedTask, setTaskList})
                
            }
            {
                others.length > 0 && taskTemplate({ title: 'others', list: others, setTaskList })
            }
        </div>
    )
}

export default TaskList
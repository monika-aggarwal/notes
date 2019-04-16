
import React, { useState, useEffect} from 'react'
import Input from './component/Input'
import TaskList from './component/TaskList'
/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import { addToStorage, readStorage } from './utils'

export default () => {

  const [taskList, setTaskList] = useState(readStorage())
  
  useEffect(() => {
    addToStorage(taskList)
  }, [taskList])

  return (
  <div css={css`
    /* background-color: red; */
    padding: 50px;

  `}>
      <Input setTaskList={setTaskList} taskList={taskList}/>
      <TaskList taskList={taskList} setTaskList={setTaskList}/>
  </div>)
}
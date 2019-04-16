import React, { useState, useRef } from 'react'
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { 
  inputContainer,
  fieldCont,
  parentInputCont,
  buttonCont,
  close,
  highestDiv
} from '../style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const useText = (inputFocus, setTitle, setInputFocus, setTask  ) => {
  return (
    <div css={inputContainer}>
      {
        inputFocus && (
          <div css={fieldCont}>
            <input placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
          </div>
        )
      }
      <div css={fieldCont}>
        <textarea type='text' value={task} placeholder={'Take a note...'} onFocus={() => { setInputFocus(true) }} onChange={(e) => { setTask(e.target.value) }} />
      </div>
    </div>
  )
}


const Input = ({ taskList, setTaskList}) => {
  const [task, setTask] = useState('')
  const [title, setTitle] = useState('')
  const [inputFocus, setInputFocus] = useState(false)
  const abcd = useText(inputFocus, setTitle, setInputFocus, setTask )
  function addTask(e){
    if (!task){
      return
    }
    const time = new Date().getTime().toString()
    const newTaskList = { ...taskList, ...{ [time]: { text: task, id: time, title }}}
    setTaskList(newTaskList)
    setInputFocus(false)
    setTask('')
    setTitle('')
  }

return (
    <div css={highestDiv}>
    <span className={`backdrop ${inputFocus ? 'show' : ''}`} onClick={addTask}></span>
      <div css={parentInputCont}>
        {/* <div css={inputContainer}>
          {
            inputFocus && (
              <div css={fieldCont}>
                <input placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
              </div>
            )
          }
          <div css={fieldCont}>
            <textarea type='text' value={task} placeholder={'Take a note...'} onFocus={() => { setInputFocus(true) }} onChange={(e) => { setTask(e.target.value)}} />
          </div>
        </div> */}
        {
          inputFocus && (<div css={buttonCont}>
            <div role='close' css={close} onClick={addTask}>Close</div>
          </div>)
        }
      </div>
    </div>
  )
}

export default Input
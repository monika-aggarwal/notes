import { useState } from 'react'
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { 
  highestDiv,
  parentInputCont
} from '../style'
import Text from './Text'



const Input = ({ taskList, setTaskList}) => {
  const [showField, setShowField] = useState(false)
  return (
    <div css={highestDiv}>
      <Text css={parentInputCont} showField={showField} setShowField={setShowField} setTaskList={setTaskList} initialTask='' initialTitle=''/>
    </div>
  )
}

export default Input
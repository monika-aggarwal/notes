import { useState } from 'react'
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { 
  highestDiv
} from '../style'
import Text from './Text'



const Input = ({ taskList, setTaskList}) => {
  const [showField, setShowField] = useState(false)
  return (
    <div css={highestDiv}>
      <Text showField={showField} setShowField={setShowField} setTaskList={setTaskList}/>
    </div>
  )
}

export default Input
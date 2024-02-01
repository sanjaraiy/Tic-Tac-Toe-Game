import { FaRegCircle , FaTimes,FaPen} from 'react-icons/fa'
import React from 'react'

function Icon({name}) {
  
          if(name==="circle"){
             return <FaRegCircle></FaRegCircle>
          }else if(name==="cross"){
            return <FaTimes></FaTimes>
          }else{
            return <FaPen></FaPen>
          }
  
}

export default Icon
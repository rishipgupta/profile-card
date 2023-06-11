import React from 'react'

const Skill = (props) => {
  return (

    <button className='skill' style={{ backgroundColor: props.backgroundColor }}>{`${props.skill} 😎`}</button>

  )
}

export default Skill;

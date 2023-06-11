import React from 'react'
import Skill from './Skill';

const SkillList = () => {
  return (
    <div className='skill-list'>
      <Skill skill="HTML + CSS" backgroundColor="Yellow" />
      <Skill skill="Javascript" backgroundColor="green" />
      <Skill skill="Web Design" backgroundColor="orange" />
      <Skill skill="Git and GitHub" backgroundColor="lightpink" />
      <Skill skill="React" backgroundColor="teal" />
      <Skill skill="NodeJs" backgroundColor="aqua" />
    </div>
  )
}

export default SkillList

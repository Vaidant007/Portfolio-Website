import React from 'react'
import  "./skills.css"
function Skills() {
  return (
    <section class="skills section" id="skills">
  <h2 class="section__title1">Skills</h2>
  <span class="section__subtitle1">Technical Proficiencies</span>
  
  <div class="skills__container">
    <div class="row">
      <div class="skill__box">DSA</div>
      <div class="skill__box">C++</div>
      <div class="skill__box">C</div>
      <div class="skill__box">Python</div>
      <div class="skill__box">HTML</div>
     
    </div>
    <div class="row">
    <div class="skill__box">CSS</div>
      <div class="skill__box">JavaScript</div>
      <div class="skill__box">React</div>
      <div class="skill__box">Tailwind</div>
      
    </div>
    <div class="row center">
    <div class="skill__box">API</div>
      <div class="skill__box">Git</div>
      <div class="skill__box">GitHub</div>
    </div>
  </div>
</section>

  
  )
}

export default Skills
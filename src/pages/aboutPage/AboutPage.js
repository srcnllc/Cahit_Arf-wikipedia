import React from 'react'
import './AboutPage.css'
import Title from '../../component/Title'
import 'aos/dist/aos.css'


function AboutPage() {
  return (
    <>
    <div className='aboutPage'>
      <div data-aos="zoom-in">
          <Title item={"HAKKINDA?"}/>
      </div>
        <div className='aboutContent'>
            <p data-aos="fade-up">Cahit Arf; Arf degismezi, Arf halkaları ve Arf kapanısları gibi kendi adıyla bilinen matematiksel terimleri bilim dünyasına kazandıran bir dehadır.</p>
        </div>
    </div>
</>
  )
}

export default AboutPage
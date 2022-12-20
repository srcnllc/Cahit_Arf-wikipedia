import React from 'react'
import './Title.css'

function Title({item}) {
  return (
    <div className='title'>
        <h1>Cahit Arf
        <span>{item}</span></h1>
    </div>
  )
}

export default Title
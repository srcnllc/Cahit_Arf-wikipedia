import React from 'react'
import Header from '../..//component/Header'
import './HomePage.css'


function HomePage() {
  return (
    <>
        <Header/>
        <div className='homePage'>
            <div className='homeContent'>
                <p data-aos="zoom-in-right">“Bilim adamı olabilmek için tutku gerekir.”</p>
                <h4 data-aos="zoom-in-left">Ord. Prof. Dr. Cahit Arf</h4>
            </div>
        </div>
    </>
  )
}

export default HomePage
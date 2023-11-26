import React from 'react'
import './benefits.style.css'
export default function Benefits() {
    return (
        <div className='benefit' id='benefit'>
            <h1 className='benefits_title'>Преимущества</h1>
            <div className='benefits_cont'>
                <div className='benefits'>
                    <p className='benefit_num'>1 200+</p>
                    <span className='benefit_desc'>займов выдано</span>
                </div>
                <div className='benefits'>
                    <p className='benefit_num'>96 %</p>
                    <span className='benefit_desc'>Одобрений</span>
                </div>
                <div className='benefits'>
                    <p className='benefit_num'>8 минут</p>
                    <span className='benefit_desc'>Решение по займу</span>
                </div>
            </div>
        </div>
    )
}

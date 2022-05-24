import React from 'react'

export default function Slider() {
  return (
    <div className="answer">
        <div className="slider">
            <div className='point'></div>
            <div className='line'></div>
            <div className='point'></div>
            <div className='line'></div>
            <div className='point'></div>
            <div className='line'></div>
            <div className='point'></div>
            <div className='line'></div>
            <div className='point'></div>
        </div>
        <div className='label-container'>
            <div className='label'>Strongly disagree</div>
            <div className='label'>Disagree</div>
            <div className='label'>Neutral</div>
            <div className='label'>Agree</div>
            <div className='label'>Strongly Agree</div>
        </div>
    </div>
  )
}

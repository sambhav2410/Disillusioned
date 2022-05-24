import React from 'react'

export default function Progressbar() {
  return (
    <div className="progress-bar">
        <div className='progress-box'>
            <div className='progress-status'>
                <div className='box'>
                    <div id='box1'></div>
                </div>
            </div>
            <div className='progress-text'>Idealistic</div>
        </div>
        <div className='progress-box'>
            <div className='progress-status'>
                <div className='box'>
                    <div id='box2'></div>
                </div>
            </div>
            <div className='progress-text'>Disillusioned</div>
        </div>
        <div className='progress-box'>
            <div className='progress-status'>
                <div className='box'>
                    <div id='box3'></div>
                </div>
            </div>
            <div className='progress-text'>Cynical</div>
        </div>
        <div className='progress-box'>
            <div className='progress-status'>
                <div className='box'>
                    <div id='box4'></div>
                </div>
            </div>
            <div className='progress-text'>Hopeful</div>
        </div>
            </div>
  )
}

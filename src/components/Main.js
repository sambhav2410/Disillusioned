import React,{useState,useEffect} from 'react'

import Progressbar from './Progressbar';
import Slider from './Slider';
import Buttons from './Buttons';

export default function Main() {
    const [count,setCount] = useState(1);
    const questions = [
        'I have ambitious aims of making a difference.',
        'My leadership journey has progressed as I anticipated.',
        'I have spent fewer than 4 years in full time service or ministry.',
        'With hard work and determination, I have been able to persevere through the ministry challenges that have come my way.',
        'My plans are likely to succeed.',
        "I'm beginning to believe the journey of service will be much harder than I anticipated.",
        'I question whether I can remain effective in my role long-term.',
        "I wonder if I'm really making the difference I anticipated making.",
        "It feels as though I have hit a wall in my ministry, and I'm not sure where to go from here.",
        "In this season of ministry, I'm feeling the disappointment of unmet expectations.",
        'If I had the option of changing careers, I would.',
        "The problems we're confronting are just too big to make a meaningful difference.",
        "The passion I once had for the ministry I serve has been depleted.",
        "As a leader, it is my job to bring about outcomes at my organization.",
        "I have a generally pessimistic outlook toward the future of my ministry.",
        "It is my job to be faithful; it is God's job to bring about outcomes.",
    ]; 
   
    useEffect(()=>{
        let num = Math.floor((count/4)+1);
        let value = count%4;
        const boxnew = document.getElementById('box'+num);
        if(value===0) num--;
        const box = document.getElementById('box'+num);
        if(count<15) boxnew.style.width = 25*value + '%';
        if(value===0) value=4;
        box.style.width = 25*value + '%';
    },[count])

    useEffect(()=>{
        const next = document.getElementById('next');
        const prev = document.getElementById('prev');
        const points = document.querySelectorAll('.point');
        const labels = document.querySelectorAll('.label');
        for(let point of points){
            point.addEventListener('click',()=>setCount(prev=>prev===16?prev:prev+1))
        }
        for(let label of labels){
            label.addEventListener('click',()=>setCount(prev=>prev===16?prev:prev+1))
        }
        next.addEventListener('click',function(){
            setCount(prev=> prev===16?prev:prev+1);
        })
        prev.addEventListener('click',function(){
            setCount(prev=>{
                if(prev!==1) return prev-1;
                else return prev;
            });
        })
    },[])
  return (
    <div className='main'>
        <div className='container'>
            <Progressbar/>
            <div className="que-count">
                <p className='count'><span className='cnt'>{count}</span>/16</p>
            </div>
            <div className="question">
                <p className='que-text'>{questions[count-1]}</p>
            </div>
            <Slider/>
            <Buttons/>
        </div>
    </div>
  )
}

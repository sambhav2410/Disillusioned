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
        
    ]; 
   
    useEffect(()=>{
        let num = Math.floor((count/4)+1);
        let value = count%4;
        const boxnew = document.getElementById('box'+num);
        if(value===0) num--;
        const box = document.getElementById('box'+num);
        if(count<2) boxnew.style.width = 25*value + '%';
        if(value===0) value=4;
        box.style.width = 25*value + '%';
    },[count])

    useEffect(()=>{
        const next = document.getElementById('next');
        const prev = document.getElementById('prev');
        const points = document.querySelectorAll('.point');
        const labels = document.querySelectorAll('.label');
        for(let point of points){
            point.addEventListener('click',()=>setCount(prev=>prev===3?prev:prev+1))
        }
        for(let label of labels){
            label.addEventListener('click',()=>setCount(prev=>prev===3?prev:prev+1))
        }
        next.addEventListener('click',function(){
            setCount(prev=> prev===3?prev:prev+1);
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
                <p className='count'><span className='cnt'>{count}</span>/3</p>
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

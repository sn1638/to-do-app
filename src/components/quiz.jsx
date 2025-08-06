import React,{useEffect, useState} from 'react'
import question from "./array"

function Quiz() {
    const [num,setnum] = useState(0)
    const [message,setmessage]=useState("")
    
    const [bg1,setbg1]=useState(`bg-purple-500`)
    const [bg2,setbg2]=useState(`bg-purple-500`)
    const [bg3,setbg3]=useState(`bg-purple-500`)
    const [bg4,setbg4]=useState(`bg-purple-500`)

    const [count,setcount]= useState(0)
    const subclick = () =>{
        setmessage(`correct answer is ${count} out of ${question.length}`)
    }
    const prevclick =(e)=>{
        if (num>0)
            {
                setnum(num-1)
                setbg1(`bg-purple-500`)
                setbg2(`bg-purple-500`)
                setbg3(`bg-purple-500`)
                setbg4(`bg-purple-500`)
                setmessage("")
            }
    }
    const nextclick =(e)=>{
        if (num<question.length-1)
            {
                setnum(num+1)
                setbg1(`bg-purple-500`)
                setbg2(`bg-purple-500`)
                setbg3(`bg-purple-500`)
                setbg4(`bg-purple-500`)
                setmessage("")
            }
    }
const btn1click = ()=>{
    if(question[num].options[0]==question[num].answer)
        {
        setbg1(`bg-green-500`)
        setmessage(`correct answer`)
        setcount(count+1)
    }
    else
    {
        setmessage(`wrong || correct answer is ${question[num].answer}`)
        setbg1(`bg-red-500`)
    }
  
}
const btn2click = ()=>{
    if(question[num].options[1]==question[num].answer)
        {
        setbg2(`bg-green-500`)
        setmessage(`correct answer`)
        setcount(count+1)
    }
    else
       {
        setmessage(`wrong || correct answer is ${question[num].answer}`)
        setbg2(`bg-red-500`)
    }
}
const btn3click = ()=>{
    if(question[num].options[2]==question[num].answer)
    {
        setbg3(`bg-green-500`)
        setmessage(`correct answer`)
        setcount(count+1)
    }
    else
    {
        setmessage(`wrong || correct answer is ${question[num].answer}`)
        setbg3(`bg-red-500`)
    }}
const btn4click = ()=>{
    if(question[num].options[3]==question[num].answer)
    {
        setbg4(`bg-green-500`)
        setmessage(`correct answer`)
        setcount(count+1)
    }
    else
    {
        setmessage(`wrong || correct answer is ${question[num].answer}`)
        setbg4(`bg-red-500`)
    }}
  return (
    <>
        <div className='w-full h-full p-5'>
           <div className=' lg:h-1/5 md:h-1/3 sm:h-1/2 shadow-black shadow-xl rounded-3xl p-6 bg-cyan-700 text-white sm:text-3xl md:text-4xl lg:text-4xl flex items-center justify-center m-1'>
               {question[num].question}
            </div > 
            <div className='lg:p-7 sm:p-1 w-full text-black text-xl sm:flex-col md:flex-col lg:flex-row flex-col flex md:h-1/5 sm:h-1/4 lg:h-1/6 justify-around items-center'>
            <button onClick={btn1click} className={`shadow-black shadow-2xl cursor-pointer sm:w-full md:w-1/2 lg:w-1/5 rounded-2xl p-3 m-1 ${bg1}`}>{`(a)${question[num].options[0]}`}</button> 
            <button onClick={btn2click} className={`shadow-black shadow-2xl ${bg1.replace("bg-","")} cursor-pointer sm:w-full md:w-1/2 lg:w-1/5  m-1 min-w-1/5 rounded-2xl p-3 ${bg2}`}>{`(b)${question[num].options[1]}`}</button> 
            <button onClick={btn3click} className={`shadow-black shadow-2xl ${bg1.replace("bg-","")} cursor-pointer   m-1 sm:w-full md:w-1/2 lg:w-1/5 rounded-2xl p-3 ${bg3}`}>{`(c)${question[num].options[2]}`}</button> 
            <button onClick={btn4click} className={`shadow-black shadow-2xl ${bg1.replace("bg-","")} cursor-pointer m-1 sm:w-full md:w-1/2 lg:w-1/5 rounded-2xl p-3 ${bg4}`}>{`(d)${question[num].options[3]}`}</button> 
            </div>
            <div className='text-red-800 p-7 sm:text:4xl md:text-5xl lg:text-6xl flex items-center justify-center'>
                {message}
            </div>
            <footer className='fixed bottom-0 right-0 sm:w-full md:w-1/2 lg:w-1/3 p-7 flex justify-between'>
                <button onClick={subclick} className='sm:w-1/4 md:w-/4 lg:w-1/6 cursor-pointer hover: shadow-black shadow-xl rounded-2xl p-2 bg-amber-400'>submit</button>
                <button onClick={prevclick} className='cursor-pointer hover: shadow-black shadow-xl rounded-2xl p-2 bg-blue-600'>previous questin</button>
                <button onClick={nextclick} className='cursor-pointer shadow-black shadow-xl rounded-2xl p-2 bg-green-500'>next question</button>
            </footer>
        </div>
    </>
  )
}

export default Quiz
import React,{useState,useEffect} from 'react'

function Todo() {
    const[text,settext]=useState("")
    const [task,settask]=useState([])
    const [inval, setinval]= useState("")
    const [addone,setaddone]=useState("Add Task")

    const handlechange = (e) => {
        settext(e.target.value)
    }
    const addtask = ()=> {
        if(text.trim()==="") return
        settext("")
        const newtask = {
            id : Date.now(),
            message : text
        }
        setaddone("Add Task")
        settask([...task,newtask])
    } 
    const editclick = (id)=>{
        const edittask = task.find((item)=>item.id===id)
        settext(edittask.message)
        const updatedTasks = task.filter(item => item.id !==id);
        settask(updatedTasks)
        setaddone("Done")
        
    }
    const delclick =(id)=>{
        const updatedTasks = task.filter((item) => item.id !== id);
        settask(updatedTasks);
    }
  return (
    <>
    <div className='bg-[url(https://wallpapers.com/images/hd/black-texture-waves-pattern-60jiov04jtd4ihov.jpg)] lg:w-1/2 sm:w-4/5 md:w-2/3 md:h-3/4 sm:h-1/2 lg:h-[450px] overflow-auto bg-white rounded-2xl'>
        <div className='text-black text-3xl italic font-bold  p-2 mt-4 text-center'>Todo App</div>
      <input value={text} onChange={handlechange}  className='rounded-xl border-white border-2 p-2 w-full text-white' placeholder='Enter a task'></input>
    <button onClick={addtask} className='w-full mt-2 p-2 bg-cyan-400 rounded-2xl' >{addone}</button>
    {
        task.map((item)=>(
            <div className='break-all w-full text-center items-center text-xl pl-3 rounded-2xl flex justify-between bg-amber-100 border-2 mt-2 mb-2' key={item.id} >
                {item.message}
            <div className=' flex-row flex'>
            <button onClick={()=>{editclick(item.id)}} className='min-w-17 h-full text-lg bg-green-300 p-2 pl-4 pr-4 rounded-l-xl'>Edit</button>
            <button onClick={() =>delclick(item.id)} className='min-w-17 text-lg h-full bg-red-400 p-2 rounded-r-xl'>Delete</button>
            </div>
            </div>
        ))
    }
    </div>
    </>
  )
}

export default Todo

import React from 'react'
// import image from "./assets/writting-notes.png";
import { useState } from 'react'
import { Trash2 } from 'lucide-react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task,setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]

    copyTask.push({title, details})

    setTask(copyTask)



    setTitle('')
    setDetails('')

  }

  const deleteNote = (idx) => {
    console.log("note deleted")

    const copyTask = [...task]


    copyTask.splice(idx, 1)

    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form 
        className='flex  flex-col lg:w-1/2  gap-4 items-start  p-10  '
        onSubmit={
          (e)=>{
            submitHandler(e)
          }
        }>
            <h2 className='text-3xl font-bold'>Add Notes</h2>
            <input
            className='px-5 w-full py-2 border-2 outline-none rounded'
            type="text" 
            placeholder='Enter Notes Heading' 
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }
              
            }

          />
          <textarea
            className='px-5 w-full py-2 h-32  flex items-start  flex-row  outline-none border-2 rounded'
            type='text'
            placeholder='Enter Details'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}  

          />
          <button className='bg-white active:scale-95 border-none w-full text-black  outline-none px-5 py-2 rounded'>Add Notes</button>
     
      </form>
      <div className='lg:w-1/2  lg:border-l-2 p-10'>
        <h3 className='text-3xl font-bold'>Your Notes</h3>
        <div className="flex flex-wrap items-start gap-6 mt-6 h-[90%] overflow-auto px-4">
  {task.map(function (elem, idx) {
    return (
      <div
        key={idx}
        className="relative h-56 w-44 bg-white rounded-2xl p-5 
                   border border-gray-100"
      >
        <h2
          onClick={()=>{
            deleteNote(idx)
          }}
          className="absolute top-4 right-4 p-2 rounded-full 
                     bg-gray-100
                     text-black
                     hover:bg-red-100 
                     hover:text-red-600 
                     cursor-pointer 
                     transition duration-200"
        >
          <Trash2 size={18} strokeWidth={2.25} />
        </h2>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 leading-snug">
            {elem.title}
          </h3>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            {elem.details}
          </p>
        </div>
      </div>
    );
  })}
</div>

        
      </div>
    </div>
  )
}

export default App
import React from 'react'
// import image from "./assets/writting-notes.png";
import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Plus } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task,setTask] = useState([])

  const [showForm, setShowForm] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]

    copyTask.push({title, details})

    setTask(copyTask)



    setTitle('')
    setDetails('')

    setShowForm(false)


  }

  const deleteNote = (idx) => {
    console.log("note deleted")

    const copyTask = [...task]


    copyTask.splice(idx, 1)

    setTask(copyTask)
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-800 via-purple-700s to-pink-700  p-10'>

      <h1 className="text-5xl font-semibold text-center text-white mb-12">
      My Notes
    </h1>
    <div className="flex gap-10 flex-wrap">

      <div
        onClick={() => setShowForm(true)}
        className="h-60 w-60 rounded-3xl flex items-center justify-center 
                   border-2 border-white/40 
                   hover:border-white 
                   transition duration-300 
                   cursor-pointer"
      >
        <Plus size={80} className="text-white opacity-80" />
      </div>

      {task.length === 0 && (
        <div className="flex flex-col items-right text-white opacity-70 mt-20">
          <Plus size={40} />
          <p className="mt-3 text-lg">
            No notes yet. Click + to add one!
          </p>
        </div>
      )}

      {task.map((elem, idx) => (
        <div
          key={idx}
          className="relative h-60 w-60 rounded-3xl 
                     bg-white/10 backdrop-blur-md 
                     border border-white/30 
                     p-6 text-white 
                     shadow-lg"
        >

          <button
            onClick={() => deleteNote(idx)}
            className="absolute top-4 right-4 
                       bg-white/20 
                       hover:bg-red-200 
                       hover:text-red-600 
                       p-2 rounded-full 
                       transition duration-200"
          >
            <Trash2 size={18} />
          </button>

          <h3 className="text-xl font-bold mb-3 break-words">
            {elem.title}
          </h3>
          <p className="text-sm opacity-90 break-words">
            {elem.details}
          </p>
        </div>
      ))}

    </div>
      {showForm && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-white w-96 p-6 rounded-3xl shadow-2xl">

          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Add Notes
            </h2>

            <input
              className="border-2 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
              type="text"
              placeholder="Enter Notes Heading"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="border-2 rounded-lg px-4 py-2 h-28 outline-none focus:border-purple-500"
              placeholder="Enter Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <button className="bg-gradient-to-br from-purple-600 to-pink-600 
                               text-white py-2 rounded-lg 
                               hover:scale-95 transition">
              Add Notes
            </button>
          </form>

        </div>
      </div>
    )}
     
    </div>
  )
}

export default App
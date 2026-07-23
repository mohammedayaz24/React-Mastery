import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className='min-h-screen lg:flex bg-black'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold text-gray-800'>Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-3 border border-gray-300 outline-none rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* DETAILED VALA INPUT  */}
        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-3 flex items-start flex-row border border-gray-300 outline-none rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none'
          placeholder='Write Details here'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          className='bg-blue-500 hover:bg-blue-600 active:scale-95 font-medium w-full outline-none text-white px-5 py-3 rounded-lg transition-all cursor-pointer'
        >
          Add Note
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l border-gray-200 p-10'>
        <h1 className='text-4xl font-bold text-gray-800'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 max-h-[80vh] overflow-auto pr-2'>
          {task.map(function (elem, idx) {

            return <div key={idx} className="flex justify-between flex-col items-start w-48 min-h-52 bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
              <div className='w-full'>
                <h3 className='leading-tight text-lg font-bold text-gray-800 break-words'>{elem.title}</h3>
                <p className='mt-3 leading-relaxed text-sm text-gray-500 break-words'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-100 hover:bg-red-200 text-red-600 py-2 text-sm rounded-lg font-semibold transition-all mt-3'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
//notes app
import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
 
  return (
    <div className="w-full h-screen duration-0" style={{backgroundColor : color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-xl px-3 py-2'>
        <button className='outline-none px-4 py-1 rounded-xl shadow-lg text-white' style={{backgroundColor:"red"}}
        onClick={() => setColor("red")}
          >red
        </button>
        <button className='outline-none px-4 py-1 rounded-xl shadow-lg text-white' style={{backgroundColor:"blue"}}
        onClick={() => setColor("blue")}
          >blue
        </button>
        <button className='outline-none px-4 py-1 rounded-xl shadow-lg text-white' style={{backgroundColor:"green"}}
        onClick={() => setColor("green")}
          >green
        </button>
      </div>
    </div>
    </div>
  )
}

export default App

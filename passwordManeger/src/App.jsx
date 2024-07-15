import React from 'react'
import { useState,useCallback,useEffect,useRef } from 'react'

function App() {

  const[length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState('');

  const passwordref = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghtijklmnopqrstuvwxyz"

    if(numberAllowed) str+="1234567890"
    if(charAllowed) str+= "!@#$%^&*()"

    for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass);
    
  }, [length, numberAllowed, charAllowed, setPassword])  // Optimize the dependancies;

  const copyPasswordToClipboard = useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{ 
    
    passwordGenerator();

  },[length, numberAllowed, charAllowed, passwordGenerator]) // if we interfair these dependancies it will re-run;

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-4  text-orange-500 bg-gray-800'
      >
        <h1 className='text-white text-center my-1'>password Generator</h1>
        <div className='flex shadow-lg rounded-lg overflow-hidden mb-4 mt-3'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordref}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '
          onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 '>
            <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />

            <label>length : {length}</label>

            <div className='flex items-center gap-x-1 gap-y-2'>
              <input type="checkbox" 
                defaultChecked = {numberAllowed}
                id='numberInput'
                onChange={()=>{
                  setNumberAllowed((prev) => (!prev))
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1 gap-y-2'>
              <input type="checkbox" 
                defaultChecked = {charAllowed}
                id='charInput'
                onChange={()=>{
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}

export default App

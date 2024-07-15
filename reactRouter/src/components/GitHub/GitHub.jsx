import React, {useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=> response.json())
    //     .then(data=> {
    //         // console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center text-3xl bg-gray-500 text-white p-4'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Gti pic" width={300}/>
    </div>

  )
}

export default GitHub


export const githubLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/Asutosh12345')
  return response.json()
}
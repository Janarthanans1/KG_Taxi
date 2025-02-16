"use client"

import axios from "axios"
import { useState } from "react"

const Example = () => {
    const [name,setName] = useState('')
    const formData = async(e)=>{
        e.preventDefault()
        const response = await axios.post('/api/example',{
            name
        })
        console.log(response.data);
        

    }
  return (
    <form onSubmit={formData}>
        <input type="text" onChange={e=>setName(e.target.value)} value={name} />
        <button type="submit">submit</button>
    </form>
  )
}

export default Example
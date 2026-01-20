import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()

    const btnHandler = ()=>{
        navigate('/about')

    }

  return (
    <div>

        <Link to={'/about'}>About us</Link>
        <button onClick={()=>btnHandler()}>click here</button>
        
    </div>
  )
}

export default HomePage
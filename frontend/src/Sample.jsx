import React,{useState} from 'react'


function Sample() {

  let[counter,setCounter] = useState(0)
  let[name,setName] = useState("")



  return (
    <>

    <button onClick={()=>setCounter(counter - 1)}>-</button>

    <h1>{counter}</h1>

    <button onClick={() => setCounter(counter + 1)}>+</button>


{/* input data fetching onchange event */}
    <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)} value={name} />
    <p>{name}</p>




    </>
  )
}

export default Sample
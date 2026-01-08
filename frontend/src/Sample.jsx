import React from 'react'
import './Sample.css'

function Sample({ name, age, isLoggin }) {



  return (
    <>

      <div>
        <h1 className={isLoggin ? 'head' : 'nonuser'}>my name is {name}</h1>

        <h3 style={{ color: isLoggin ? 'red' : 'blueviolet' }}>age is {age}</h3>
      </div>

      <div>
        {
          isLoggin ? <p>Login successs</p> : <p>please login</p>
        }

        <p>{isLoggin ? "welcome" : "Run.."}</p>

        {/* { isLoggin && <h2>This is private info</h2>} */}
      </div>


    </>
  )
}

export default Sample
import Sample from "./Sample"


function App() {

  let userName = "John Doe"
  let Age = 40
  
  

  return (
    <>
      <Sample name={userName} age={Age}/>

      <Sample name="Alice" age={30}/>
      
    </>
  )
}

export default App

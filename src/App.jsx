function App(){
  function callFun(){
    alert("Function Called")
  }
  function fruit(){
    alert("apple")
  }
  
  return(
    <>
     <h1>Event And Function Call</h1>
     <button onClick={callFun}>Click Me</button>
     <button onClick={fruit}>Apple</button>
    </>
  )
}

export default App

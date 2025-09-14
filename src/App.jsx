function App(){
  function callFun(){
    alert("Function Called")
  }
  function fruit(name){
    alert(name)
  }
  
  return(
    <>
     <h1>Event And Function Call</h1>
     <button onClick={callFun}>Click Me</button>
     <button onClick={() => fruit("Apple")}>Apple</button>
     <button onClick={() => fruit("Banana")}>Banana</button>
    </>
  )
}

export default App

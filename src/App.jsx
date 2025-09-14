function App(){
  const name = "Amaan Ansari"
  let x = 10 
  let y = 20
  return(
    <>
     <h1>{name}</h1>
     <h1>{10 + 20 + 30}</h1> 
     <h1>{ x + y }</h1>
     <button onClick={() => alert("Hello")}>Click Me</button>
    </>
  )
}

export default App

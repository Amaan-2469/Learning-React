import Change from './Change.jsx';
function App(){ 
  let fruit = "Apple";
  const handleFruit = () => {
    fruit = "Banana";
  }
  return(
    <>
     <h1>States in React</h1>
     <h1>{fruit}</h1>
     <button onClick={handleFruit}>Change fruit name</button>
     <Change />
    </>
  )
}

export default App

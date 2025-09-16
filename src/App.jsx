import { useState } from "react"

function App(){
  const [val,setValue] = useState("")
  return (
    <div>
      <h1>Get Input Field Value</h1>
      <input type="text" value={val} onChange={(event) => setValue(event.target.value)} placeholder="Enter Username" />
      <h1>{val}</h1>
      <button onClick={() => setValue("")}>Clear Value</button>
    </div>
  )
}

export default App
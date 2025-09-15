import { useState } from "react";
function App(){
  const [display,setDisplay] = useState(true);
  return(
    <div>
      <h1>Toggle in React</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>

      {
        display ? <h1>Amaan Ansari</h1>: null
      }

    </div>
  )
}

export default App
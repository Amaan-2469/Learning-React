import { useState } from "react"

function App(){
  const[name,setName] = useState('');
  const[password,setPassword] = useState('')
  const[email,setEmail] = useState('')
  return (
    <div>
      <h1>Controlled Component</h1>
      <form action="" method="get">
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Username"/>
        <br /><br />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password"/>
        <br /><br />
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email"/>
        <br /><br />
        <button>Submit</button>
        <button onClick={() => {setName(''),setPassword(''),setEmail('')}}>Clear</button>
      </form>
      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    </div>
  )
}

export default App
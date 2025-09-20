import { useState } from "react"

function App(){
  const [gender,setGender] = useState('female');
  const [city,setCity] = useState('delhi');
  return (
    <div>
      <h1>Handle Radio and Dropdown in React</h1>
      <h4>Select Gender</h4>
      <input onChange={(event) => setGender(event.target.value)} type="radio" name="gender" checked={gender=='male'} id="male" value={"male"}/>
      <label htmlFor="male">Male</label>
      <input onChange={(event) => setGender(event.target.value)} type="radio" name="gender" checked={gender=='female'} id="female" value={"female"}/>
      <label htmlFor="female">Female</label>
      <h2>Selected Gender : {gender}</h2>
      <br /><br />
      <h4>Select City</h4>
      <select onChange={(event) => setCity(event.target.value)}>
        <option value="delhi">Delhi</option>
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
      </select>
      <h2>Selected City : {city}</h2>
    </div>
  )
}

export default App
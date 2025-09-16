import User from "./User"
function App(){
  // let userName = "Amaan Ansari";
  // let age = 24;
  // let email = "amaan@test.com";
  let userObject = {
    name:"Amaan Ansari",
    age:"24",
    email:"amaan@test.com"
  }
  let userObject2 = {
    name:"Farhaan Ansari",
    age:"14",
    email:"farhaan@test.com"
  }
  let userObject3 = {
    name:"Faizan Ansari",
    age:"20",
    email:"faizan@test.com"
  }
  return (
    <div>
      <h1>Props in React</h1>
      {/* <User name ="Amaan Ansari" age = {24} email = "amaan@test.com"/> */}
      {/* <User name = {userName} age = {age} email = {email} /> */}
      <User user = {userObject} />
      <User user = {userObject2} />
      <User user = {userObject3} />
    </div>
  )
}

export default App
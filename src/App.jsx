import User from "./User"
import Wrapper from "./Wrapper"
function App(){
  return (
    <div>
      {/* <User name="Amaan Ansari" />
      <User name="Farhaan Ansari" />
      <User />
      <User /> */}

      <Wrapper color="blue">
        <h1>Hi Everyone</h1>
      </Wrapper>
      <Wrapper color="orange">
        <h1>Hi Amaan</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hi Admin</h1>
        <h2 style={{color:"red"}}>Please Login</h2>
      </Wrapper>
    </div>
  )
}

export default App
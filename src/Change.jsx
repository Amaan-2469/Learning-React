import { useState } from "react";
function Change(){
    const [ fruit,setFruit] = useState("Apple");
    const fruitHandler = () => {
        setFruit("Banana");
    }
    return(
        <>
        <h1>{fruit}</h1>
        <button onClick={fruitHandler}>Change fruit name</button>
        </>
    )
}

export default Change
import { useState } from "react";

function Skills(){
    const [skills,setSkills] = useState([]);
    const handleSkills = (event) => {
        console.log(event.target.value,event.target.checked)
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills(skills.filter((item) => item != event.target.value))
        }
    }
    return(
        <div>
            <h3>Select your Skills</h3>
            <input onChange={handleSkills} type="checkbox" id="html" value="html"/>
            <label htmlFor="html">HTML</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" id="js" value="js"/>
            <label htmlFor="js">JS</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" id="css" value="css"/>
            <label htmlFor="css">CSS</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" id="java" value="java"/>
            <label htmlFor="java">JAVA</label>
            <h1>{skills.toString()}</h1>
        </div>
    )
}

export default Skills;
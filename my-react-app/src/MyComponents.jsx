import React, {useState} from 'react'


function MyComponents() {

    const [name, setName] = useState("Guest");

    const [age, setAge] = useState(0)

    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Spongbob")
    }

    const increment_age = () => {
        setAge(age+1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return (<div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={increment_age}>Increment age</button>
            <p>Is employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployedStatus}>Toggle status</button>
    </div>)

}

export default MyComponents
import React, {useState} from 'react'


function MyComponents() {

    const [car, setCar] = useState({year: 2024, 
                                    make:"Ford", 
                                    model:"Mustang"})

    const [name, setName] = useState("Guest");

    const [age, setAge] = useState(0)

    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Spongbob")
    }

    const increment_age = () => {
        setAge(a => a + 1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value}))
    }
    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}))

    }

    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}))
    }
    return (<div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={increment_age}>Increment age</button>
            <p>Is employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployedStatus}>Toggle status</button>

            <div>
                <input type="number" value={car.year} onChange={handleYearChange}></input> <br/>
                <input type="text" value={car.make} onChange={handleMakeChange}></input><br/>
                <input type="text" value={car.model} onChange={handleModelChange}></input><br/>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            </div>
    </div>)

}

export default MyComponents
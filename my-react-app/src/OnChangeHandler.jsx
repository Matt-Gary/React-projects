import React, {useState} from 'react'


function OnChangeHandler () {


        const [name, setName] = useState("")
        const [quantity, setQuantity] = useState(1)
        const [comment, setComment] = useState("")
        const [payment, setPayment] = useState("")
        const [shipping, setShipping] = useState("")

        function handleNameChange(event) { //when we change something within an input, it call this function and change value in a real time
            setName(event.target.value)
        }

        function QuantityChange(event) {
            setQuantity(event.target.value)
        }

        function handleCommentChange(event) {
            setComment(event.target.value)
        }

        function handlePaymentChange(event) {
            setPayment(event.target.value)
        }

        function handleShippingChange (event) {
            setShipping(event.target.value)
        }

        return(<>
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p> 

            <input value = {quantity} onChange={QuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}
            placeholder='Enter delivery instructions'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange= {handleShippingChange}></input>
                Pick up
            </label>
            <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange= {handleShippingChange}></input>
                Delivery
           </label>
           <p>Shipping: {shipping}</p>
        </div>
        
        
        </>)
}

export default OnChangeHandler
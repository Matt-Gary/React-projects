import ProfilePicture from "./ProfilePicture"

function button() {

const handleClick = (e) => e.target.style.display = "flex";

    return(<>
        <button onClick={(e) => handleClick(e)} src={ProfilePicture.imageUrl}>Click me</button>
    </>)
}

export default button
import profilePic from './assets/gamer.jpg'

function Card() {
    return(
        <div className = "card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Mateusz Garczynski</h2>
            <p className="card-description">I'm study a Web Development to being able to create website on my own</p>
        </div>
    )
}

export default Card
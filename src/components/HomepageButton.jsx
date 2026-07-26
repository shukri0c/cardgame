import { Link } from 'react-router-dom';


function HomepageButton ({lobbyOption}) {
    return (
        
        
        <Link to={lobbyOption.name === "Create" ? "/CreateRoom" : "/FindRoom"}>
            <button title="priv/public button">{lobbyOption.name}</button>
        </Link>
        
    )
}

export default HomepageButton

// this is the component for the two buttons on the home page that allow a user to choose between finding or creating a game
// there is an if statement saying is the name equal to create? if so take us to the createroom directory else take us to findroom
// since there will only be two buttons its fine to program it in this way
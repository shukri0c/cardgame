import { Link } from 'react-router-dom';


function HomepageButton ({lobbyOption}) {
    return (
        
        
        <Link to={lobbyOption.name === "Public" ? "/CreateRoom" : "/FindRoom"}>
            <button title="priv/public button">{lobbyOption.name}</button>
        </Link>
        
    )
}

export default HomepageButton
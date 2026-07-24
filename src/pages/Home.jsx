import HomepageButton from "../components/HomepageButton"

function Home() {
    return (
        <>
        <div> Home Page </div>
        <div>
            <HomepageButton lobbyOption={{name: "Private"}}/> 
            <HomepageButton lobbyOption={{name: "Public"}}/> 
        </div>
        </>
        
    )
}

export default Home 
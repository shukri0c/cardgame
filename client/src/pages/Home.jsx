import HomepageButton from "../components/HomepageButton"

function Home() {
    return (
        <>
        <div> Home Page </div>
        <div>
            <HomepageButton lobbyOption={{name: "Create"}}/> 
            <HomepageButton lobbyOption={{name: "Find"}}/> 
        </div>
        </>
        
    )
}

export default Home 

//shld probably change this to create room and find room
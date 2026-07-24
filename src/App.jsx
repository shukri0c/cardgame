import './App.css'
import Home from './pages/Home'
import CreateRoom from './pages/CreateRoom'
import FindRoom from './pages/FindRoom'
import {Routes, Route} from "react-router-dom"

function App() {
  

  return (
   
    <main className = "main-content">
      <Routes>
        <Route path = "/"  element = {<Home/>}/>
        <Route path = "/CreateRoom"  element = {<CreateRoom/>} />
        <Route path = "/FindRoom"  element = {<FindRoom/>} />
        
      </Routes>
    </main>
  )
}

export default App

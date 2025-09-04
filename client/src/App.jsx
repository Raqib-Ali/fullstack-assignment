import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import FetchConfigPage from './pages/FetchConfigPage'
import UpdateConfigPage from './pages/UpdateConfigPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <div>
          <nav style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <Link style={{ fontSize: "20px" }} to="/">Fetch Config</Link>
            <Link style={{ fontSize: "20px" }} to="/update">Update Remark</Link>
          </nav>
        </div>

        <Routes>
          <Route path='/' element={<FetchConfigPage />}></Route>
          <Route path='/update' element={<UpdateConfigPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

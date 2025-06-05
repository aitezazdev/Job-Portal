import React from 'react'
import Navbar from './Components/Navbar'
import JobsListing from './Pages/JobsListing'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs-listing" element={<JobsListing />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

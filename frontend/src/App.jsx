import React from 'react'
import Navbar from './Components/Navbar'
import JobsListing from './Pages/JobsListing'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import JobDetails from './Pages/JobDetails'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs-listing" element={<JobsListing />} />
          <Route path='/jobs/details' element={<JobDetails />} />
        </Routes>
      </main>
    </div>

  )
}

export default App

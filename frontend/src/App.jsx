import React from 'react'
import Navbar from './Components/Navbar'
import JobsListing from './Pages/JobsListing'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <JobsListing />
      </main>
    </div>
  )
}

export default App
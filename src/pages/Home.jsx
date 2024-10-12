import React from 'react'
import Main from '../Components/main/Main'
import About from '../Components/about/About'
import Projects from '../Components/Projects/Projects'
import Oursocials from '../Components/OurSocials/Oursocials'
import Howtocontribute from '../Components/Howtocontribute/Howtocontribute'
import SpotifyWidget from '../Components/SpotifyWidget/SpotifyWidget'
import joinasmentor from '../Components/joinasmentor/joinasmentor'
function Home() {
  return (
    <div className=''>
        <Main/>
        <About/>
        <Projects/>
        <Howtocontribute/>
       <joinasmentor/>
        <SpotifyWidget/>
        <Oursocials/>
     
      
    </div>
  )
}

export default Home

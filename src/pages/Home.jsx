import React from 'react'
import Guardianspage from './Mainpage.jsx'
import Moviespage from './Moviepage.jsx'
import VideoGallery from './Video.jsx'

const  HomePage = ({moviesData}) => {
  
  console.log( moviesData)
  return (
     <>
    <Guardianspage/>
    <Moviespage moviesdata={moviesData}/>
    <VideoGallery/>
     </>
  )
}

export default  HomePage
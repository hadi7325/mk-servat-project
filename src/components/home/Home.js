
import React from 'react'
import HomePage from './home-components/HomePage'
import Level from './home-components/Level'
import PaperResent from './home-components/PaperResent'
import ResentPackage from './home-components/ResentPackage'
import ResentPodcast from './home-components/ResentPodcast'
import Tags from './home-components/Tags'
import "./sass.scss"
function Home() {
  return (
    <>
     <HomePage/>
     <Level/>
     <Tags/>
     <ResentPodcast/>
     <ResentPackage/>
     <PaperResent/>
    </>
  )
}

export default Home
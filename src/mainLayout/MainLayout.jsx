import React from 'react'
import StoryNavigation from '../components/StoryNavigation'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <StoryNavigation/>
        <Outlet/>
    </div>
  )
}

export default MainLayout
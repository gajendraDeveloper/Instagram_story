import React from 'react'
import Story from './components/StoryNavigation'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './mainLayout/MainLayout'
import DummyDesign from './components/DummyDesign'

const App = () => {
  return (
    <div>
      <Routes>
        <Route  element={<MainLayout/>}>
        <Route path='/' element={<DummyDesign/>} />
        </Route> 
      </Routes>
    </div>
  )
}

export default App
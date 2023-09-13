import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayouts from '../layout/MainLayouts'
import HomePage from '../pages/HomePage'

function MainRoutes() {
  return (
    <Router> {/* Wrap your routes in a Router */}
      <Routes>
        <Route element={<MainLayouts />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default MainRoutes

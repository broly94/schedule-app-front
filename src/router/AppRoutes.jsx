import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login, Register } from "../auth"
import { Home } from '../pages/front/home/Home'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
    </Routes>
  )
}

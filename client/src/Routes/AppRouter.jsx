import React from 'react'
import Landing from '../pages/LandingPage'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'
import JoinUs from '../pages/JoinUsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/JoinUs" element={<JoinUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
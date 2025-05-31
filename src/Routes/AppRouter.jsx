import Landing from '../pages/LandingPage'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'
import JoinUs from '../pages/JoinUsPage'
import Home from '../pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtecedRoutes'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/JoinUs" element={<JoinUs />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/Messages" element={<Home />} />
                    <Route path="/Notifications" element={<Home />} />
                    <Route path="/Profile" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
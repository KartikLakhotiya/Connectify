import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Settings from './pages/Settings'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/useAuthStore'
import { Loader2 } from 'lucide-react'
import { useThemeStore } from './store/useThemeStore'

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  console.log(onlineUsers);
  const { theme } = useThemeStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  console.log(authUser);
  if (isCheckingAuth && !authUser) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader2 className='size-10 animate-spin' />
      </div>
    )
  }

  return (
    <div data-theme={theme}>

      <Navbar />
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to="/" />} />
        <Route path='/profile' element={authUser ? <Profile /> : <Navigate to="/login" />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            background: "#36454F", // Global background color
            color: "#fff", // Global text color
          },
        }}
      />

    </div>
  )
}

export default App
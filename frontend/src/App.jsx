import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from './page/LoginPage'
import HomePage from './page/HomePage'
import SignupPage from './page/SignupPage'

const App = () => {
  let authUser = null
  return (
    <div className='flex flex-col items-center justify-start'>
      <Routes>
        <Route
          path='/'
          element={authUser ? <HomePage /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/login'
          element={!authUser ? <LoginPage /> : <Navigate to={'/'} />}
        />
        <Route
          path='/signup'
          element={!authUser ? <SignupPage /> : <Navigate to={'/'} />}
        />
      </Routes>
    </div>

  )
}

export default App

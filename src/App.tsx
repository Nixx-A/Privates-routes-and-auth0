import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import { useAuth0 } from '@auth0/auth0-react'
import Dashboard from './Pages/Dashboard'
import Analytics from './Pages/Analytics'
import Admin from './Pages/Admin'
import ProtectedRoute from './Components/ProtectedRoute'
import MessageProtectedRoutes, { MessageAdminRoute } from './Components/MessageProtectedRoutes'

function App (): JSX.Element {
  const { user } = useAuth0()

  return (
    <main className="bg-black text-white h-screen w-screen">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoute isAllowed={user} message={<MessageProtectedRoutes />} />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/analytics' element={<Analytics />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={user?.email === 'nicolas.ayan18@gmail.com'} message={<MessageAdminRoute />} />}>
            <Route path='/admin' element={<Admin />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </main>
  )
}

export default App

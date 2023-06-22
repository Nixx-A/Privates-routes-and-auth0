import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import { useAuth0 } from '@auth0/auth0-react'

export default function Header (): JSX.Element {
  const { user } = useAuth0()
  return (
    <header>
      <nav>
        <ul className="text-white flex justify-end gap-4">
          <Link className='text-purple-600 hover:text-purple-800 duration-100 cursor-pointer' to={'/'}>Home</Link>
          <Link className='text-purple-600 hover:text-purple-800 duration-100 cursor-pointer' to={'/dashboard'}>Dashboard</Link>
          <Link className='text-purple-600 hover:text-purple-800 duration-100 cursor-pointer' to={'/analytics'}>Analytics</Link>
          <Link className='text-purple-600 hover:text-purple-800 duration-100 cursor-pointer ' to={'/admin'}>Admin</Link>
          {(user != null) ? <LogoutButton /> : <LoginButton />}
        </ul>
      </nav>
    </header>
  )
}

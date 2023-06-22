/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Outlet } from 'react-router-dom'
import { type PropsProtectedRoute } from '../Types'

export default function ProtectedRoute ({ children, isAllowed, message}: PropsProtectedRoute): JSX.Element {
  if (!isAllowed) {
    return (message)
  }

  return (children != null) ? children : <Outlet />
}

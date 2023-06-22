/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/promise-function-async */

import { useAuth0 } from '@auth0/auth0-react'

export default function LoginButton (): JSX.Element {
  const { loginWithRedirect } = useAuth0()

  return (
    <button className="pr-4 hover:text-gray-400 duration-150" onClick={() => loginWithRedirect()}>Login</button>

  )
}

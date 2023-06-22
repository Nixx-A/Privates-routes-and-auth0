
/* export interface User {
  id: number
  name: string
  permissions: string[]
  roles: string[]
}
 */
export interface UserProps {
  user: User
}

export interface PropsProtectedRoute {
  children?: JSX.Element
  isAllowed: boolean | undefined
  redirectTo?: string | undefined
  message: ReactElement | null
}

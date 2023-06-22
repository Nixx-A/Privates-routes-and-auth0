import LoginButton from './LoginButton'

export default function MessageProtectedRoutes (): JSX.Element {
  return (
    <section className="flex items-center justify-center flex-col mt-8">
      <h1>You need to login first</h1>
      <LoginButton />
    </section>
  )
}

export function MessageAdminRoute (): JSX.Element {
  return (
    <section className="flex items-center justify-center flex-col mt-8">
      <h1>You need to be the admin Nico to enter here</h1>
    </section>
  )
}

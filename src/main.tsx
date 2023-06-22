import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'

const DOMAIN = import.meta.env.VITE_DOMAIN
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Auth0Provider domain={DOMAIN} clientId={CLIENT_ID} authorizationParams={{ redirect_uri: window.location.origin }}>
    <App />
  </Auth0Provider>
)

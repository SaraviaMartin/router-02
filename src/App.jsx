
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import { Router } from "./Router"

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search',
    Component: () => <h1>Componente de Busqueda</h1>
  }
]

function App() {

  return (
    <main>
      <Router routes={appRoutes}/>
    </main>
  )
}

export default App


import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import { Router } from "./Router"
import { Route } from "./Route"
import SearchPage from "./pages/Search"
import Page404 from "./pages/404"

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} >
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
      
    </main>
  )
}

export default App

import SearchPage from "./pages/Search"
import Page404 from "./pages/404"

import { Suspense, lazy } from "react"
import { Router } from "./Router"
import { Route } from "./Route"

const LazyHomePage = lazy(() =>  import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() =>  import('./pages/About.jsx'))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404} >
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
      
    </main>
  )
}

export default App

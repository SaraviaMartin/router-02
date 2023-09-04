import { EVENTS } from "./consts"
import { useState, useEffect, Children } from "react"
import { match } from "path-to-regexp"

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    console.log(children)
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () => { 
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
  
      }
    }, [])


    let routeParams = {}

    const routesFromChildren = Children.map(children, ({props, type}) => {
      const {name} = type
      const isRoute = name === "Route"

      return isRoute ? props : null
    })
    
    const routesToUse = routes.concat(routesFromChildren)

    const Page = routesToUse.find(({path}) => {
    if(path === currentPath) return true 


    //usamos path-to-regexp para poder detectar rutas dinamicas. 
    // por ejmeplo search/:query  --> :query es un a ruta dinamica
    const matchedUrl = match(path, {decode: decodeURIComponent})
    const matched = matchedUrl(currentPath)
    if(!matched) return false 


    //guardar los parametros de las rutas dinamicas 
    routeParams = matched.params
    return true 

  })?.Component
    return Page 
    ? <Page routeParams={routeParams} /> 
    : <DefaultComponent routeParams={routeParams} />
  }
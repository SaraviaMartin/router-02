import { EVENTS } from "./consts"
import { useState, useEffect } from "react"
import { match } from "path-to-regexp"

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
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
  
    const Page = routes.find(({path}) => {
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
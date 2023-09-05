import {Link} from '../Link.jsx'

const i18n = {
  es: {
    title: "Sobre nosotros",
    button: 'Ir a la home',
    description: "Hola me llamo Juan y este es un clon simple de React Router"
  },
  en: {
    title: "About us",
    button: "Go to Home",
    description: "Hi mi name is Juan and this is a simple clone of React Router"
  }
}

const useI18n = (lang )=> {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
    const i18n = useI18n(routeParams.lang ?? 'es')
    return (
      <>
        <h1>{i18n.title}</h1>
        <p>{i18n.description}</p>
        <img src="" alt="" /><br />
        <Link to='/'>{i18n.button}</Link>
      </>
    )
  }
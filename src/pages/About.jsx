import {navigate} from '../Link.jsx'
export default function AboutPage() {

    return (
      <>
        <h1>Router-02-About</h1>
        <p>Este es la seccion acerda de nosotros</p>
        <img src="" alt="" /><br />
        <button onClick={() => navigate('/')}>Ir a la Home</button>
      </>
    )
  }
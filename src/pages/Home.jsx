import {Link} from '../Link.jsx'
export default function HomePage() {

    return (
      <>
        <h1>Router-02-Home</h1>
        <p>Esta en una pagina de jemplo del Router</p>
        <img src="" alt="" /><br />
        <Link to='/about'>Ir a sobre nosotros</Link>
      </>
    )
  }
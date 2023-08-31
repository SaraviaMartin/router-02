import {navigate} from '../Link.jsx'
export default function HomePage() {

    return (
      <>
        <h1>Router-02-Home</h1>
        <p>Esta en una pajina de jemplo del Router</p>
        <img src="" alt="" /><br />
        <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
      </>
    )
  }
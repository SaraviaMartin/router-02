import { Link } from "../Link";

export default function Page404 () {
    return (
        <>
            <h1>This is NOT fine</h1>
            <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Gif del perro quemandose" /> <br />
            <Link to="/">Volver a la Home</Link>
        </>
    )
}
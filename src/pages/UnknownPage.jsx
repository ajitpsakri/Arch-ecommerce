import { Link } from 'react-router-dom'
const UnknownPage = () => {
    return (
        <h1 className='unknown-page'>404 Go to <Link to="/">Home page</Link></h1>
    )
}
export { UnknownPage }

import { Link } from 'react-router-dom'
const UnknownPage = () => {
    return (
        <h1 className='unknown-page'>404 Error Page  not found, Go to <Link to="/">Home page</Link></h1>
    )
}
export { UnknownPage }

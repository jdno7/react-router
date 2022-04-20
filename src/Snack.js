import {BrowserRouter, Route, Link} from "react-router-dom"
import "./Snack.css"

const Snack = ({name}) => {
    return (
        <div className="Snack">
            <Link className="Snack-link" to={`/${name.toLowerCase().replace(/\s/g, '')}`} >{name}</Link>
        </div>
    )
    
}

export default Snack
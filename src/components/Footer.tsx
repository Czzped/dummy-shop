import { Link } from "react-router-dom"

export function Footer() {
    return (
        <footer>
            <span>
                Made With ❤️ By <Link to={"https://github.com/Czzped"} target="_blank">Pedro Henrique</Link>
            </span>
        </footer>
    )
}
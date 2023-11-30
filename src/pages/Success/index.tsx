import { Link } from "react-router-dom"

export function Success() {
    return (
        <>
            <h1>Congratulations, your purchase are completed!!</h1>
            <Link to={"/"}>
                <button>
                    home
                </button>
            </Link>
        </>
    )
}
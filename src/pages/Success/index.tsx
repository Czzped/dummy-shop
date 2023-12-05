import { Link } from "react-router-dom"

import { Button } from "../../components/Button"

export function Success() {
    return (
        <section
            className="flex flex-col items-center justify-center gap-16 h-full">
            <h1 className="text-3xl font-semibold">Congratulations, your purchase are completed!!</h1>
            <Link to={"/"}>
                <Button buttonText="go back" additionalStyle="p-2" />
            </Link>
        </section>
    )
}
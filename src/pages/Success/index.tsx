import { Link } from "react-router-dom"

import { Button } from "../../components/Button"

import image from "../../assets/image.png"

export function Success() {
    return (
        <section
            className="flex flex-col flex-1 items-center  justify-center text-center gap-8 h-full mb-28 p-4"
        >
            <img src={image} alt="completed-purchase-img" className="w-[30rem]" />
            <h1 className="text-3xl font-semibold">Congratulations, your purchase are completed!!</h1>
            <Link to={"/"}>
                <Button buttonText="go back" additionalStyle="p-2 bg-green-800" />
            </Link>
        </section>
    )
}
export function Button(props: { eventOnClick: () => void, buttonText: string, additionalStyle?: string }) {

    return (
        <button
            onClick={props.eventOnClick}
            className={`flex justify-center font-semibold rounded bg-primaryColor ${props.additionalStyle} hover:opacity-80`}
        >
            {props.buttonText}
        </button>
    )
}
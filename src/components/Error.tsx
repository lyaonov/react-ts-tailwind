interface ErrorMessProps {
    error: string
}

export function ErrorMess({error}:ErrorMessProps) {
    return (
        <p className='text-center text-red-600'>{error}</p>
    )
}
export default function ErrorMessage( { message = 'Oh my. Something went wrong.' }) {
    return (
        <div className="error-message" data-testid='error-message'>
            <h1>{message}</h1>
        </div>
    )
}
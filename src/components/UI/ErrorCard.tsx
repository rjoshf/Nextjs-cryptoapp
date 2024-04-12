export default function ErrorCard({ errorMessage }: { errorMessage: string }) {
    return (
        <div className="text-black max-w-25rem w-auto mx-auto my-8 p-5 bg-red-500 rounded-lg shadow-md text-center">
            <p className="font-bold">{errorMessage}</p>
        </div>
    )
}
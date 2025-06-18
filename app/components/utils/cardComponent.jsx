import Link from "next/link"

const CardComponent = ({cardWidth, typePage}) => {
    return (
        <div className={`${cardWidth} bg-white
            dark:bg-gray-900
            text-gray-800
            dark:text-white
            rounded-2xl
            shadow-lg
            p-6
            max-w-md`}
        >
            <h3 className="text-xl font-semibold mb-2">title</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">description</p>

            {
                typePage === 'home' ?
                <Link href='/id' className="bg-gray-900 text-white rounded-2xl p-2 cursor-pointer">Read more</Link>
                : null
            }
        </div>
    )
}

export default CardComponent

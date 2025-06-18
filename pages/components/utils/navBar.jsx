import Link from "next/link"

const NavBar = () => {
    return (
        <div className="w-full
            flex
            items-center
            justify-between
            py-4
            mx-auto
            container
            transition-all
            duration-1000"
        >
            <Link href="/" className="flex items-center gap-1">
                <h2 className="font-normal text-2xl sm-max:text-lg text-black">
                Postly
                </h2>
            </Link>

            <div className="flex items-center gap-2">
                <Link href='/createPost' className="bg-gray-600
                text-white
                px-4
                py-2
                rounded-md
                hover:bg-gray-700
                transition-all"
            >
                Create New Post
                </Link>
            </div>
        </div>

    )
}

export default NavBar

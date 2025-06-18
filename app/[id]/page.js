import CardComponent from "../components/utils/cardComponent"

const PostDetails = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold py-5 text-center">Post Details</h3>

            <div className="flex
                flex-col
                justify-center
                gap-4
                items-center
                overflow-y-auto"
            >
                <CardComponent cardWidth='w-full' typePage='details' />
            </div>
        </div>
    )
}

export default PostDetails

import CardComponent from '@/pages/components/utils/cardComponent'
import axios from 'axios';

export async function getStaticPaths() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = res.data;

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = res.data;

    return {
        props: {
            post,
        },
    };
}
const PostDetails = ({ post }) => {
    
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
                <CardComponent
                    id={post.id}
                    title={post.title}
                    description={post.body}
                    cardWidth='w-full'
                    typePage='details'
                />
            </div>
        </div>
    )
}

export default PostDetails

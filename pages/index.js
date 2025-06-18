import axios from "axios";
import CardComponent from "./components/utils/cardComponent";

export async function getStaticProps() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = res.data;
    
    return {
        props: {
            posts,
        },
        revalidate: 1,
    };
}
export default function Home({ posts }) {
    return (
        <div>
            <h3 className="text-xl font-semibold py-5 text-center">Blog Post</h3>

            <div className="flex
                justify-center
                gap-4
                items-start
                flex-wrap
                overflow-y-auto"
            >
                {
                    posts.map(post => (
                        <CardComponent
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            description={post.body}
                            cardWidth='w-[400px]' 
                            typePage='home'
                        />
                    ))
                }
            </div>
        </div>
    );
}
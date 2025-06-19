import axios from "axios";
import CardComponent from "./components/utils/cardComponent";
import { useState } from "react";

// getStaticProps works at build time to fetch data from API
export async function getStaticProps() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = res.data.reverse();
    
    return {
        props: {
            posts,
        },
        revalidate: 1, // Rebuild the page every second if requested
    };
}

export default function Home({ posts }) {
    // Number of posts displayed on the screen initially = 6
    const [showCountPosts, setShowCountPosts] = useState(6);

    // When you click the "Load More" button, we display 6 additional posts.
    const handleLoadMore = () => {
        setShowCountPosts(prev => prev + 6);
    };

    // Specify which posts to display based on the current count
    const ShowPosts = posts.slice(0, showCountPosts);
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
                    ShowPosts.map(post => (
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
            
            
                {showCountPosts < posts.length && (
                    <div className="flex justify-center my-8">
                        <button
                            onClick={handleLoadMore}
                            className="bg-gray-600
                            hover:bg-gray-700
                            text-white
                            px-6
                            py-2
                            rounded-md"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
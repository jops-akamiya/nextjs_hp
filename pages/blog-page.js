import Layout from '../components/Layout'
import { getAllpostsData } from '../lib/post'
import Post from "../components/Post"

export default function Blog({ posts }) {
    return (
        <Layout title="Blog">
            <ul className="m-10">
                {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            </ul>
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = await getAllpostsData();
    return {
        props: {
            posts
        }
    }
}

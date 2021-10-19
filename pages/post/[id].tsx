import { useRouter } from "next/dist/client/router";

const Post: React.FC = () => {
    
    const router = useRouter()
    const id = router.query.id
    
    return <h1>Post: {id}</h1>
}

export default Post;
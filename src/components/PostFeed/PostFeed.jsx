import PostCard from '../PostCard/PostCard'
import { Card } from 'semantic-ui-react'

export default function PostFeed({posts, itemsPerRow, isProfile}){
        console.log(posts[0].caption, ' < This is posts[0].caption')
     
		const postCards = posts.map((post) => {
			return <PostCard post={post} key={post._id} isProfile={isProfile}/> 
		})
	
		return (
		   <Card.Group itemsPerRow={itemsPerRow}>
			{postCards}
		   </Card.Group>
		)
    
}
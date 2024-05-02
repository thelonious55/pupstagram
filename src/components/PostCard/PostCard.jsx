import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";


export default function PostCard({ post, isProfile, addLike, removeLike, loggedUser }) {
  
  const likeIndex = post.likes.findIndex(like => like.username === loggedUser.username)
  const likeColor = likeIndex > -1 ? 'red' : 'grey'
  const clickHandler = likeIndex > -1 ? () => removeLike(post.likes[likedIndex]._id)  : () => addLike(post._id)

  
  
  
  return (
    <Card>
      {isProfile ? null : (
        <Card.Content textAlign="left">
          <Link to={`/${post.user.username}`}>
            <Image
              floated="left"
              size="large"
              avatar
              src={
                post.user.photoUrl
                  ? post.user.photoUrl
                  : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
            />
            <Card.Header floated="right">{post.user.username}</Card.Header>
          </Link>
        </Card.Content>
      )}

      <Image src={`${post.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{post.caption}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Icon name={"heart"} size="large" color={likeColor} onClick={clickHandler}/>
        {post.likes.length} Likes
      </Card.Content>
    </Card>
  );
}

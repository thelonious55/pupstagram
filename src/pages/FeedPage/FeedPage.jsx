import { useState } from 'react'

import PostFeed from "../../components/PostFeed/PostFeed";
import Header from "../../components/Header/Header";
import AddPostForm from "../../components/AddPostForm/AddPostForm";

import { Grid } from "semantic-ui-react";

export default function FeedPage() {

  const [posts, setPosts] = useState([]); // this will be an array of objects!	

  // Wherever you store your state, 
  // this is where we will define the api calls, 
  // because when they finish we need to update state
  // to reflect whatever CRUD operation we just performed
  function handleAddPost(postToSendToServer){
	console.log(postToSendToServer, " formData from addPost form")
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddPostForm  handleAddPost={handleAddPost}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <PostFeed />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

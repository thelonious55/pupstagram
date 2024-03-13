import { useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'


export default function AddPostForm(){
    
    const [state, setState] = useState({
        caption: ''
    })

    const [photo, setPhoto] = useState({})

    function handleFileInput(e){
        setPhoto(e.target.files[0])
    }

    function handleChange(e){
        setState({
            ...state, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(){
        
    }

    return (
    <Segment>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Input
            className="form-control"
            name="caption"
            value={state.caption}
            placeholder="What's on your pups mind?"
            onChange={handleChange}
            required
          />
          <Form.Input
            className="form-control"
            type="file"
            name="photo"
            placeholder="upload image"
            onChange={handleFileInput}
          />
          <Button type="submit" className="btn">
            ADD PUPPY
          </Button>
        </Form>
      </Segment>
 
    );
}
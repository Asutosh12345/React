import React, {useEffect, useState} from 'react'
import Container from '../components/container/Container'
import PostForm from '../components/post-form/PostForm'
import appwriteService from '../appwrite/configs'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {

    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=> {
        if(slug) {
            appwriteService.getPost(slug).then((post) => {
                if(post) {
                    setPost(post)
                }
            }) 
        } else {
            navigate('/')
        }
    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost
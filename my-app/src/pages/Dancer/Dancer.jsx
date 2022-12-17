import './Dancer.scss'
import { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import CommentForm from '../../components/CommentForm/CommentForm';
import UserComments from '../../components/UserComments/UserComments';
import { useRef } from 'react'

export default function Dancer (){

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [editId, setEditId] = useState(null)
    const commentRef = useRef()

    const getUserComments = () => {
        const jwtToken = localStorage.getItem("jwt_token");
        axios.get('http://localhost:8080/comment', 
        { headers: { Authorization: `Bearer ${jwtToken}`, },
          })
          .then(response => {
            setComments(response.data)
          })
          .catch(
            error => console.log(error)
            );
    }

    return (
        <>
          <Header />
          <CommentForm 
            getUserComments={getUserComments} 
            comment={comment} setComment={setComment}  
            imageUrl={imageUrl} setImageUrl={setImageUrl} 
            editId={editId} setEditId={setEditId}
            commentRef={commentRef}
            />

          <UserComments getUserComments={getUserComments} 
            comments={comments} 
            comment={comment} 
            setComment={setComment} 
            imageUrl={imageUrl} 
            setImageUrl={setImageUrl} 
            editId={editId} 
            setEditId={setEditId}
            commentRef={commentRef}/>
        </>
    )
}
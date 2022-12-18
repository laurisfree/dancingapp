import { useEffect, useState } from 'react'
import moment from "moment";
import axios from 'axios';
import './UserComments.scss'


const UserComments = ({ getUserComments, comments, imageUrl, comment, setComment, setImageUrl, editId, setEditId, commentRef }) => {
   useEffect(() => {
    getUserComments()
   }, [])

   const onDeleteHandler = (id) => {
    const jwtToken = localStorage.getItem("jwt_token");
    axios.delete(`http://localhost:8080/comment?id=${id}`,{
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then(response => {
        getUserComments()
      })
      .catch(error => console.log(error));
   }

   const onEditHandler =(id, comment, imageUrl) => {
       commentRef.current.focus()
       setComment(comment)
       setImageUrl(imageUrl)
       setEditId(id)
   }

    return (
      <>
        <div className='user-comments'>
            {
                comments.map((comment) => (
                    <div key={comment._id}>
                      <div className='user-comments__text'>{comment.comment}</div>
                      <div> <img className='user-comments__img' src={comment.imageUrl} alt="ballerina photo"/> </div>
                      <p>{`Posted on ${moment(comment.createdAt).format("dddd MMMM Do YYYY")}`}</p>
                      <button className='user-comments__btn1' onClick={() => onEditHandler(comment._id, comment.comment, comment.imageUrl)}>EDIT</button>
                      <button className='user-comments__btn2' onClick={() => onDeleteHandler(comment._id)}>DELETE</button>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default UserComments;
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
        <div>
            {
                comments.map((comment) => (
                    <div key={comment._id}>
                      <div>{comment.comment}</div>
                      <div> <img src={comment.imageUrl} alt="alternate name" width="500px"/> </div>
                      <p>{`Posted on ${moment(comment.createdAt).format("dddd MMMM Do YYYY")}`}</p>
                      <button onClick={() => onEditHandler(comment._id, comment.comment, comment.imageUrl)}>edit</button>
                      <button onClick={() => onDeleteHandler(comment._id)}>delete</button>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default UserComments;